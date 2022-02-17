import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editPostsThunk } from "../../redux/thunks";
import styles from "./Card.module.scss";

function Card({ id, title, body, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newBody, setNewBody] = useState(body);
  const [newTitle, setNewTitle] = useState(title);

  useSelector((store) => store.post);
  const dispatch = useDispatch();

  const handleEditPost = () => {
    dispatch(editPostsThunk({ post_id: id, body: newBody, title: newTitle }));

    handleToggleEdit();
  };

  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleBodyChange = (e) => {
    setNewBody(e.target.value);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {!isEdit ? (
        <>
          <div className={styles.title}>{title}</div>
          <div className={styles.body}>{body}</div>
          <div className={styles.footer}>
            <button className={styles.button} onClick={() => onDelete(id)}>
              delete
            </button>
            <button className={styles.button} onClick={handleToggleEdit}>
              edit
            </button>
          </div>
        </>
      ) : (
        <>
          <textarea
            rows="2"
            cols="50"
            className={styles.title_input}
            onChange={handleTitleChange}
            value={newTitle}
          ></textarea>
          <textarea
            rows="9"
            cols="50"
            className={styles.body_input}
            onChange={handleBodyChange}
            value={newBody}
          ></textarea>
          <div className={styles.footer}>
            <button className={styles.button} onClick={() => onDelete(id)}>
              delete
            </button>
            <button className={styles.button} onClick={handleToggleEdit}>
              edit
            </button>
            <button className={styles.button} onClick={handleEditPost}>
              save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
