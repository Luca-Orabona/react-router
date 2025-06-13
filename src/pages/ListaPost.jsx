import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListaPost = () => {
    const [dataPost, setDtaPost] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts?page=1&limit=15")
            .then((resp) => {
                setDtaPost(resp.data);
            })
            .finally(() => {
                setSpinner(false);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mb-4">Lista post</h1>

            {spinner ? (

                <div className="d-flex justify-content-center mb-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (

                <div className="row row-cols-3 g-4">
                    {dataPost.map((curPost, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2>{`${curPost.id} - ${curPost.author}`}</h2>
                                    <p>{curPost.body}</p>
                                </div>
                                <div className="p-3">
                                    <Link to={`/listaPost/${curPost.id}`} className="btn btn-primary">Dettagli</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListaPost;