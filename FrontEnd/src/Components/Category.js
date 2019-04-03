import React, { Component } from "react";
import Post from "./Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends Component {
  render() {
    const {
      categoryName,
      categoryDescription,
      categoryImg,
      posts
    } = this.props;
    console.log(posts);
    const listOfPosts = posts.map(post => <Post post={post} />);
    return (
      <div>
        <h2>{categoryName}</h2>
        <p>{categoryDescription}</p>
        <img src={categoryImg} />
        <ul>{listOfPosts}</ul>
      </div>
    );
  }
}

export default Category;
