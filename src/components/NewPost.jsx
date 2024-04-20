import React from "react";

function NewPost({setAuthor, setBody, onClose}) {

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
      <p className="flex justify-end gap-2 mt-4">
        <button 
          type="button" 
          onClick={onClose}
          className="poinster py-2 px-6 border-none rounded bg-violet-600 text-violet-200 hover:bg-violet-400"
        >
          Cancel
        </button>
        <button className="poinster py-2 px-6 border-none rounded bg-violet-600 text-violet-200 hover:bg-violet-800">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;