import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Home = () => {
  const [show, setShow] = useState(false);
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const postsCollectionRef = collection(db, "blog-app");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateHandler = async () => {
    handleClose();
    const docRef = doc(db, "blog-app", id);
    const data = { title, desc };
    await setDoc(docRef, data);
  };
  const [postList, setpostList] = useState([]);
  const [blogId, setblogId] = useState("");
  const [loading, setloading] = useState(false);
  const deleteHandler = async (id) => {
    const docRef = doc(db, "blog-app", id);
    await deleteDoc(docRef);
    setblogId(id);
  };
  useEffect(() => {
    const getPosts = async () => {
      setloading(true);
      const data = await getDocs(postsCollectionRef);
      setloading(false);
      setpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [blogId, show]);
  return (
    <div>
      <div className="mx-2 my-2 button-div">Welcome to my Blog Application</div>
      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <input
              className="input"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="input"
            rows="3"
            cols={36}
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={updateHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="body-div">
        {postList &&
          postList.map((blog) => {
            return (
              <div className="each-div" key={blog.id}>
                <div className="icon-main-div">
                  <h4 className="title">{blog.title}</h4>
                  <AiFillDelete
                    className="icon"
                    onClick={() => {
                      deleteHandler(blog.id);
                    }}
                  />
                </div>
                <p>{blog.desc}</p>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow();
                    setid(blog.id);
                    settitle(blog.title);
                    setdesc(blog.desc);
                  }}
                >
                  Update
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
