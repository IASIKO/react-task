import { useCallback, useEffect, useState } from "react";
import "./App.css";
import FriendsComponent from "./components/FriendsComponent";
import Loading from "./components/Loading";
import UsersList from "./components/UsersList";
import UsersProvider, { useUsersContext } from "./store/UsersContext";

function App() {
  const { isLoading, setIsLoading, error, setError } = useUsersContext();
  const [users, setUsers] = useState([]);
  
  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const usersInfo = data.list.map((userInfo) => {
        return {
          id: userInfo.id,
          name: userInfo.name,
          lastName: userInfo.lastName,
          prefix: userInfo.prefix,
          title: userInfo.title,
          imageUrl: userInfo.imageUrl,
        };
      });
      setUsers(usersInfo);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [setError, setIsLoading]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  let content = <p>Found no user.</p>;

  if (users.length > 0) {
    content = <UsersList users={users} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Loading />;
  }

  return (
        <UsersProvider>
    <div className="container">
        <FriendsComponent />
        {content}
      </div>
    </UsersProvider>
  );
}

export default App;
