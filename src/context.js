import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

export const UsersContext = ({ children }) => {
  const baseUrl = "https://reqres.in/api/users?page=1";
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    avatar: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [singleUser, setSingleUser] = useState({
    first_name: "",
    email: "",
    avatar: "",
  });

  const getUsersData = async () => {
    try {
      const respone = await fetch(baseUrl);
      const data = await respone.json();
      setUsers([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const deleteUser = (id) => {
    let newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  function addUser(e) {
    e.preventDefault();
    let newData = [...users, { ...user, id: 555 }];
    setUsers(newData);
    setUser({
      first_name: "",
      email: "",
      avatar: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleEdit(id) {
    setIsEdit(true);
  }

  function editUser(e) {
    e.preventDefault();

    setSingleUser((preSingleUser) => {
      return {
        ...preSingleUser,
        first_name: user.first_name,
        email: user.email,
        avatar: user.avatar,
      };
    });

    const newList = users.filter((user) => {
      return user.id !== singleUser.id;
    });
    setUsers([...newList, singleUser]);
  }

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        user,
        addUser,
        deleteUser,
        handleChange,
        isEdit,
        editUser,
        handleEdit,
        singleUser,
        setSingleUser,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
