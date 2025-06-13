import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
            .get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
            .then((resp) => {
                console.log(resp);

                setPost(resp.data)
            })
    }, [id])
    return (
        <main>

            {post && (
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h1>Dettagli del post: {id}</h1>
                            <h2>Nome: {post.author}</h2>
                            <p>description: {post.body}</p>
                        </div>
                    </div>

                </div>
            )}
        </main>
    )
}

export default ShowPost;