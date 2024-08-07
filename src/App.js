import { useState } from 'react';
import './App.css';





function Post({id,title,images,content,onDelete}){
    return(
      <div className="post">
        <h2 className="post-title">{title}</h2>
        <div className="post-images">
          {images.map((image,index) => (
            <img key={index} src={image}/>
          ))
          }
        </div>
        <p className="post-content">{content}</p>
        <button onClick={() => onDelete(id)} className="post-button">delete</button>
      </div>
    );
}


function App() {
  const [posts,setPosts] = useState([
    {
      id: 1,
      title: "First post",
      images: ["Post 1.jpg"],
      content: "In the first iteration of the portfolio I structured the html and the css to create an image for how I wanted the website to look. In terms of the general ballpark, entirely unstylised."
    },

    {
      id: 2,
      title: "Second Post",
      images: ["Post 2.jpg"],
      content: "In the next step I constructed this function? I think its called. Im not sure the technical react name but it seems to me it is a way to use javascript to build general html structures, in this case a post. I've just noted that they're called components."
    },
    {
      id: 3,
      title: "3rd",
      images: ["Post 3.1.jpg","Post 3.2.jpg","Post 3.3.jpg"],
      content: "Immediately I started noticing I needed more images per post to capture all the changes I have been making so I now pass the component an array and format it into a grid in App.css. This will allow me to comment on what I am doing in greater depth. At the moment I am still not too concerned with aesthetics. Those will come later."
    },
    {
      id: 4,
      title: "4th",
      images: [],
      content: "I began learning about hooks as im pretty sure one of the advantages of react is that the webpages are interactable so I want to be able to add and remove posts as I'd like. I achieved this by adding a delete button which calls a function which filters out posts from the render from how I understand it. Bear in mind all of this has been built with the help of chatgpt. "
    },
    {
      id: 5,
      title: "5th",
      images: [],
      content: ""
    },
  ]);

  const handleRemove = (id) =>{
    setPosts(posts.filter(post=> post.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        Callum's Portfolio
      </header>
      <div className="Main-Content">
        <div className="Left-content"> left box
          <div className="Headshot-container">
            <img src="icon.jpeg" className="Headshot" alt="cdog"/>
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload hello changing things for a commit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div className="Right-Content"> 
          <div className="Create-Post">
            <p>I want to have a tool to be able to add posts from the webpage, in the future this will be hidden to other users?</p>
          </div>
          <div className="Scrollable-content">
            {posts.reverse().map((post)=> (
              <Post
                key = {post.id}
                id = {post.id}
                title = {post.title}
                images = {post.images}
                content = {post.content}
                onDelete = {handleRemove}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
