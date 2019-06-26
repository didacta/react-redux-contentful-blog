import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/index";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.books.map((book, index) => {
      return (
        <div id ="categories">
          
          <h3>{book.fields.title}</h3>
          <h4><b>Author: </b>{book.fields.author}</h4><ul>
          <h5>{book.fields.publicationDate}</h5>
          </ul>  
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2><u>Books</u></h2>
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.books.all };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
