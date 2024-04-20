import React, {useState} from "react";

function NewPost({onClose, onAddPost}) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleBody = (e) => {
      setBody(e.target.value)
  }

  const handleAuthor = (e) => {
      setAuthor(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        body: body,
        author: author
      };
      console.log(data);
      onAddPost(data)
      onClose();
  }



  return (
    <form class="bg-violet-800 p-4 w-80" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body" className="block w-full mb-1 text-violet-200 font-bold">Text</label>
        <textarea 
            id="body" 
            required rows={3} 
            onChange={handleBody}
            className="block w-full p-2 rounded-md border-none  bg-violet-200 text-gray-800" />
      </p>
      <p>
        <label htmlFor="name" className="block w-full mb-1 text-violet-200 font-bolde" >Your name</label>
        <input 
            type="text" 
            id="name" 
            onChange={handleAuthor}
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