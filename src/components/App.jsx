import React, {useState, useEffect} from "react";
import Post from "./Post";
import "../index.css"
import PostList from "./PostList";
import NewPost from "./NewPost";
import MainHeader from "./MainHeader";


function App() {
    const [openModal, setOpenModal] = useState(false);

    const handleModal = ()=>{
        setOpenModal(openModal => !openModal);
    }

    return (
    <>
        <MainHeader onCreatePost={handleModal}/>
        <main>
            <PostList openModal={openModal} setOpenModal={handleModal}/>
        </main>
    </>    
    );
}

export default App;