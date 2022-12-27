import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";

export const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const postsCollectionRef = collection(db, "blog-app");
  const submitHandler = async () => {
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    } else {
      await addDoc(postsCollectionRef, {
        title,
        desc,
      });
      navigate("/");
    }
  };
  return (
    <Form className="form-div">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="Enter your blog's title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          placeholder="Write description"
        />
      </Form.Group>
      <Button variant="outline-primary" onClick={submitHandler}>
        Create Blog
      </Button>{" "}
    </Form>
  );
};
