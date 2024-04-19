import React from "react";

function NewPost() {
  return (
    <form class="bg-violet-800 p-4 w-80 mx-auto my-8 rounded-lg shadow-lg">
      <p>
        <label htmlFor="body" className="block w-full mb-2 text-violet-200 font-bold">Text</label>
        <textarea id="body" required rows={3} className="block w-full p-2 rounded-md border-none  bg-violet-200 text-gray-800" />
      </p>
      <p>
        <label htmlFor="name" >Your name</label>
        <input type="text" id="name" className="block w-full p-2 rounded-md border-0  bg-violet-200 text-gray-800 " required />
      </p>
    </form>
  );
}

export default NewPost;