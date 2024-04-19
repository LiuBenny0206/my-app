import { MdPostAdd, MdMessage } from 'react-icons/md';

function MainHeader({ onCreatePost}) {
  return (
    <header className="my-8 mx-10p p-4 flex justify-between text-center items-center align-center border-b-2">
      <h1 className="text-4xl flex gap-5 items-center text-violet-200">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button onClick={onCreatePost} className="inline-flex items-center gap-2 py-3 px-6 bg-violet-400 text-black border-none rounded shadow-xl pointer font-bold" >
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;