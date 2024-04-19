import React, {useState, useEffect} from "react";

function Post({author, body}) {
    const [name, setName] = useState("good")

    useEffect(() => {
        const newName = Math.random() > 0.5 ? "good" : "bad"
        setName(newName)
    },[]) 

    return (
        <li class="flex flex-col my-4 p-4 bg-violet-400 rounded-lg shadow text-white animate-animate-in">
            <p className="text-sm text-bold text-violet-800 m-0 uppercase">{author}</p>
            <p className='text-xl mt-1 text-color text-violet-800 italic '>{body}</p>
        </li>
    );
}

export default Post;