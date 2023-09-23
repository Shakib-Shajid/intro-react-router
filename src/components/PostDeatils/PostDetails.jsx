import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const { postId } = useParams();
    const post = useLoaderData();
    const { id, title, body } = post;
    console.log(postId)
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post details about:{id} </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;