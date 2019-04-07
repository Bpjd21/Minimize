import React, { Component } from 'react';
import Post from './Post';
import CreatePost from './Library/CreatePost';

class Category extends Component {
  render() {
    const {
      categoryId,
      categoryName,
      categoryDescription,
      posts,
      AddPost,
      editPost
    } = this.props;

    const listOfPosts = posts.map(post => (
      <Post key={post.postId} post={post} editPost={editPost} />
    ));

    return (
      <div>
        <h2>{categoryName}</h2>
        <p>{categoryDescription}</p>

        <ul>{listOfPosts}</ul>

        <CreatePost categoryId={categoryId} addPost={this.props.addPost} />
      </div>
    );
  }
}

export default Category;
