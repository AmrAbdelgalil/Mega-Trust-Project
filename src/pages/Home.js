import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Form from "../components/Form";

const Home = () => {
  const { users, deleteUser, handleEdit } = useGlobalContext();

  return (
    <main>
      <section>
        <ul className="users">
          {users.map((user) => {
            return (
              <li key={user.id} className="user-card">
                <h3>{user.first_name}</h3>
                <p>{user.email}</p>
                <Link to={`/${user.id}`}>
                  <img src={user.avatar} alt={user.first_name} />
                </Link>
                <Link to={`/${user.id}`} className="edit-link">
                  <button
                    className="btn-edit"
                    type="button"
                    onClick={() => handleEdit(user.id)}
                  >
                    edit
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => deleteUser(user.id)}
                  className="btn-del"
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="form">
        <Form />
      </section>
    </main>
  );
};

export default Home;
