import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsLists from "./features/posts/PostsLists";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsLists />
    </div>
  );
}

export default App;
