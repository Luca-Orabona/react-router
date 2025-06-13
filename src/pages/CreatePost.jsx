import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
   
  const formInitialization = {
    author: "",
    title: "",
    body: "",
    public: false
  }

  const [dataForm, setDataForm] = useState(formInitialization);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    setDataForm({ ...dataForm, [name]: type === "checkbox" ? checked : value })
  }


  const sendData = (e) => {
    e.preventDefault()
    axios
    .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", dataForm)
    .then(resp => {

    navigate(`/listapost/${resp.data.id}`)
    })
  }

  

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="text-center">Create new post</h1>

            <form onSubmit={sendData}>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  name="author"
                  value={dataForm.author}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Write the name of the author..." />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  name="title"
                  value={dataForm.title}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Write the title of the post..." />
              </div>

              <div className="mb-3">
                <label htmlFor="body" className="form-label">post content</label>
                <textarea
                  name="body"
                  value={dataForm.body}
                  onChange={handleChange}
                  className="form-control"
                  id="body"
                  rows="3"></textarea>
              </div>

              <div className="form-check">
                <input
                  name="public"
                  className="form-check-input"
                  type="checkbox"
                  id="public"
                  checked={dataForm.public}
                  onChange={handleChange}
                />

                <label className="form-check-label" htmlFor="public">
                  Public
                </label>
              </div>

              <button className="btn btn-primary mt-2">Submit post</button>
            </form>

         


          </div>
        </div>
      </div>
    </>
  )

}

export default CreatePost;