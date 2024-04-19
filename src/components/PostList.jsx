import React, {useState} from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";


function PostList({openModal, setOpenModal}){
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const handleBody = (e) => {
        setBody(e.target.value)
      }

      const handleAuthor = (e) => {
        setAuthor(e.target.value)
      }
    

    return(
        <>
        {openModal &&  (
            <Modal onClose={setOpenModal}>
                <NewPost 
                    setAuthor={handleAuthor} 
                    setBody={handleBody
                }/>
            </Modal>
            )
            }
        
        <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid gap-4 grid-cols-3	justify-center">
            <Post author={author} body={body}/>
        </ul>
        </>
    );
}

export default PostList;