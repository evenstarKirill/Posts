import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPostsThunk } from "../../redux/thunks";
// import { ADD_POSTS_REQUEST } from "./../../redux/actions/actionsTypes";
import styles from "./AddPostCard.module.scss";

function AddPostCard(id, title, body) {
  const [newBody, setNewBody] = useState(body);
  const [newTitle, setNewTitle] = useState(title);
  useSelector((store) => store.post);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setNewBody(e.target.value);
  };

  const handleAddPost = () => {
    dispatch(addPostsThunk({ post_id: id, title: newTitle, body: newBody }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.textarea_wrapper}>
        <textarea
          onChange={handleTitleChange}
          placeholder="title"
          className={styles.title}
        />
      </div>
      <textarea
        onChange={handleBodyChange}
        placeholder="body"
        className={styles.body}
      />
      <button className={styles.save_button} onClick={handleAddPost}>
        save
      </button>
    </div>
  );
}

export default AddPostCard;
