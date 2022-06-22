import React from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { user, addUser, handleChange, isEdit, editUser } = useGlobalContext();

  return (
    <article>
      <form>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          id="first_name"
          onChange={handleChange}
          value={user.first_name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="avatar">Image URL:</label>
        <input
          type="text"
          name="avatar"
          id="avatar"
          onChange={handleChange}
          value={user.avatar}
        />
        <button onClick={isEdit ? editUser : addUser} className="btn-add">
          {isEdit ? "SAVE" : "ADD"}
        </button>
      </form>
    </article>
  );
};

export default Form;
