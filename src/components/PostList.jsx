import React, {useState} from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";


function PostList({openModal, setOpenModal}){
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        setPosts((exsitingPostDatas) => [postData, ...exsitingPostDatas]);
    }
    
    return(
        <>
        {openModal &&  (
            <Modal onClose={setOpenModal}>
                <NewPost 
                    onClose={setOpenModal}
                    onAddPost={addPostHandler}
                />
            </Modal>
            )
        }

        {posts.length >= 1 && 
        <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid gap-4 grid-cols-3	justify-center">
            {posts.map((post, index)  => <Post key={index} author={post.author} body={post.body}/>)}
        </ul>
        }

        {posts.length === 0 && 
            <div className="text-white align-center text-3xl mt-6">
                <h1>There is no post yet</h1>
            </div>
        }


        
        </>
    );
}

export default PostList;