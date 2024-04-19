import React, {useState, useEffect} from "react";
import Post from "./Post";
import "../index.css"
import PostList from "./PostList";
import NewPost from "./NewPost";


function App() {
    return (
        <main>
            <NewPost />
            <PostList />
        </main>
    );
}

export default App;