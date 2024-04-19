import React, {useState} from "react";
import Post from "./Post";

function PostList(){
    return(
        <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid gap-4 grid-cols-3	justify-center">
            <Post author={'Benny'} body={'Hello, I am Benny.'}/>
            <Post author={'Benny'} body={'Hello, I am Benny.'}/>
            <Post author={'Benny'} body={'Hello, I am Benny.'}/>
            

        </ul>
    );
}

export default PostList;