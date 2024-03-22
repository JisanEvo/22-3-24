import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title}=post;

    const navigate=useNavigate()
    const UserStyle={
        border:'5px solid red',
        padding:'10px',
        borderRadius:'20px'
    }

    const hadleShowDetails=()=>{
 navigate(`/post/${id}`)
    }
    return (
        <div  style={UserStyle}>
 <h3>Post of id:{id}</h3>
 <p>{title}</p>
<Link to={`/post/${id}`}>PosT Details</Link>
<Link to={`/post/${id}`}><button >Show Details</button></Link>
<button onClick={hadleShowDetails}>Click To See Details</button>
        </div>
    );
};

export default Post;