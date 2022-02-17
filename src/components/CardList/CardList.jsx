import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { deletePostsThunk, getPostsThunk } from "../../redux/thunks";

import AddPostCard from "../AddPostCard/AddPostCard";
import Card from "../Card/Card";
import Search from "../Search/Search";
import styles from "./CardList.module.scss";

function CardList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  const postData = useSelector((store) => store.post.posts);
  console.log("postData", postData);

  const handleDeletePost = (id) => {
    dispatch(deletePostsThunk({ post_id: id }));
  };

  const loading = useSelector((store) => store.loading);
  const searchQuery = useSelector((store) => store.post.searchQuery);

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
            .map((post) => (
              <Card
                id={post.id}
                key={post.id}
                title={post.title}
                body={post.body}
                onDelete={handleDeletePost}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default CardList;
