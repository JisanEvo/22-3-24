import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user
    const UserStyle={
        border:'5px solid red',
        padding:'10px',
        borderRadius:'20px'
    }
    return (
        <div style={UserStyle}>
            <h2>{name}</h2>
           <p>Email:{email}</p>
        <small>Phone:{phone}</small>
        <br />
<Link to={`/user/${id}`}>Show Details</Link>
<Link to={`/user/${id}`}><button>Use Details</button></Link>
        </div>
    );
};

export default User;