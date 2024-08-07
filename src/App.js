import './App.css';





function Post({title,image,content}){
    return(
      <div className="post">
        <h2 className="post-title">{title}</h2>
        {image && <img src={image} className="post-image"/>}
        <p className="post-content">{content}</p>
      </div>
    );
}


function App() {
  const posts = [
    {
      title: "First post",
      image: "Post 1.jpg",
      content: "In the first iteration of the portfolio I structured the html and the css to create an image for how I wanted the website to look. In terms of the general ballpark, entirely unstylised."
    },

    {
      title: "Second Post",
      image: "Post 2.jpg",
      content: "In the next step I constructed this function? I think its called. Im not sure the technical react name but it seems to me it is a way to use javascript to build general html structures, in this case a post."
    },
    {
      title: "3rd",
      image: "",
      content: ""
    },
    {
      title: "4th",
      image: "",
      content: ""
    },
    {
      title: "5th",
      image: "",
      content: ""
    },
  
    
    
  ]


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
        <div className="Right-Content"> right box 
          <div className="Scrollable-content">
            {posts.reverse().map((post, index)=> (
              <Post
                key = {index}
                title = {post.title}
                image = {post.image}
                content = {post.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
