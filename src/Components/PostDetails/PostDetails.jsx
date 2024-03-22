import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post =useLoaderData();
    const {id,title,body}=post

const {postId}=useParams();
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-4)
    }
    console.log(postId)
    return (
        <div>
            <h3>Post Details:{id}</h3>
            <p>{title}</p>
            <small>{body}</small>
            <button onClick={handleGoBack}>GoBack</button>
        </div>
    );
};

export default PostDetails;