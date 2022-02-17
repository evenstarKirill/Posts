import {
  DELETE_POSTS_REQUEST,
  GET_POSTS_REQUEST,
} from "./../../redux/actions/actionsTypes";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddPostCard from "../AddPostCard/AddPostCard";
import Card from "../Card/Card";
import Search from "../Search/Search";
import styles from "./CardList.module.scss";

function CardList() {
  const postData = useSelector((store) => store.post.posts);
  const searchQuery = useSelector((store) => store.post.searchQuery);
  console.log("searchQuery", searchQuery);
  console.log("postData", postData);

  const loading = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch({ type: DELETE_POSTS_REQUEST, payload: id });
  };

  useEffect(() => {
    dispatch({ type: GET_POSTS_REQUEST });
  }, []);
  console.log(postData.posts);

  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.cardlist}>
        <AddPostCard />
        {loading ? (
          <div>loading...</div>
        ) : (
          postData
            .filter(({ title }) => title.toLowerCase().includes(searchQuery))
            .map((data) => (
              <Card
                id={data.id}
                key={data.id}
                title={data.title}
                body={data.body}
                onDelete={handleDeletePost}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default CardList;
