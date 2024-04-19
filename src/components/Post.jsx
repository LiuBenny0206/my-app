import React, {useState, useEffect} from "react";

function Post({author, body}) {
    return (
        <li class="flex flex-col my-4 p-4 bg-violet-400 rounded-lg shadow text-white animate-animate-in">
            <p className="text-sm font-extrabold text-violet-800 m-0 uppercase">{author}</p>
            <p className='text-xl font-light mt-1 text-color text-violet-800 italic '>{body}</p>
        </li>
    );
}

export default Post;