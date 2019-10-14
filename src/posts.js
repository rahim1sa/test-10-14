import React from 'react';

class Posts extends React.Component {

  render() {
    const { posts } = this.props;
    return (
      <div>
            {
                posts.length > 0 ? posts.map(item => {
                    return <ul><li>{item.tit}</li><li>{item.text}</li></ul>
                }) : null
            }
      </div>
    )
  }
}

export default Posts;
