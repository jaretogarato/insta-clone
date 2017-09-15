import React from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import Post from './Post';

class Home extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => this.setState({ posts: res.data }) )
  }

  addPost = (post) => {
    let { posts } = this.state;
    this.setState({ posts: [post, ...posts] })
  }

  render() {
    // let { user: { uid } } = this.props;
    let { posts } = this.state;

    let formPosts = posts.map( p => <Post key={p.id} {...p} /> );
    return (
      <div>
        <PostForm addPost={this.addPost} />
        {formPosts}
      </div>
    )
  }
}

export default Home;
