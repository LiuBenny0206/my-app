import React from "react";

function NewPost({setAuthor, setBody}) {

  return (
    <form class="bg-violet-800 p-4 w-80">
      <p>
        <label htmlFor="body" className="block w-full mb-1 text-violet-200 font-bold">Text</label>
        <textarea 
            id="body" 
            required rows={3} 
            onChange={setBody}
            className="block w-full p-2 rounded-md border-none  bg-violet-200 text-gray-800" />
      </p>
      <p>
        <label htmlFor="name" className="block w-full mb-1 text-violet-200 font-bolde" >Your name</label>
        <input 
            type="text" 
            id="name" 
            onChange={setAuthor}
            className="block w-full p-2 rounded-md border-0  bg-violet-200 text-gray-800 " required />
      </p>
    </form>
  );
}

export default NewPost;