import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Form from "./Form";
import { Link } from "react-router-dom";

const User = () => {
  let { userId } = useParams();
  const { singleUser, setSingleUser } = useGlobalContext();

  const url = "https://reqres.in/api/users/";

  const getUser = async () => {
    const res = await fetch(url + userId);
    const data = await res.json();
    setSingleUser(() => {
      return {
        ...data.data,
        first_name: data.data.first_name,
        email: data.data.email,
        avatar: data.data.avatar,
        id: data.data.id,
      };
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <article className="single-user">
      <section className="user-card">
        <img src={singleUser.avatar} alt={singleUser.name} />
        <h1>{singleUser.first_name}</h1>
        <h4>{singleUser.email}</h4>
      </section>
      <section>
        <Form className="edit-form" />
        <Link to={"/"} className="btn-back-home">
          <button type="button">Back Home</button>
        </Link>
      </section>
    </article>
  );
};

export default User;
