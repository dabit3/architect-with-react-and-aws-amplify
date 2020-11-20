import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const data = await API.get('arcapi', '/posts')
      console.log('data:  ', data)
      setPosts(data.Items)
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          posts.map(post => (
            <div>
              <h1>{post.title}</h1>
              <h3>{post.content}</h3>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
