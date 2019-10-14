import React from 'react';
import Posts from './posts';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        posts: [],
    }
  }


  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render(){
    const posts = this.state.state;
    return(
      <div>
        <Posts posts={posts}/>
      </div>
    );
  }
}


export default App;
