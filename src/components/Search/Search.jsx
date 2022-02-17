import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchPost } from "./../../redux/actions/actions";
import styles from "./Search.module.scss";

function Search() {
  useSelector((store) => store.post);
  const dispatch = useDispatch();

  //   const handleSearchPost = () => {
  //     dispatch({ type: SEARCH_POSTS, payload: { body: searchText } });
  //   };
  return (
    <div className={styles.search}>
      <input
        onChange={(event) => {
          dispatch(searchPost(event.target.value));
        }}
        type="search"
        placeholder="Search..."
        id="search-bar"
      />
    </div>
  );
}

export default Search;
