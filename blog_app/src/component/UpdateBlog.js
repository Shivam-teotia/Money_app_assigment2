import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const UpdateBlog = (blog) => {
  console.log(blog.title);
  const navigate = useNavigate();
  const [newtitle, setnewtitle] = useState("");
  const [newdesc, setnewdesc] = useState("");
  const submitHandler = async () => {
    if (!newtitle || !newdesc) {
      alert("Title or Description cannot be empty");
    } else {
      //   await addDoc(postsCollectionRef, {
      //     title,
      //     desc,
      //   });
      navigate("/");
    }
  };
  return (
    <Form className="form-div">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={(e) => {
            setnewtitle(e.target.value);
          }}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => {
            setnewdesc(e.target.value);
          }}
          placeholder="Write description"
        />
      </Form.Group>
      <Button variant="outline-primary" onClick={submitHandler}>
        Update blog
      </Button>{" "}
    </Form>
  );
};

export default UpdateBlog;
