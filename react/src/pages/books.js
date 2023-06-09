import { useContext, useState } from "react";
import {AuthContext } from "../context/Authcontext";
import { BookContext } from "../context/bookcontext";

export default function AddBook() {
  const { current_user } = useContext(AuthContext);
  const { books, AddBook, deleteBook } = useContext(BookContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBook(name, description, imageurl);
    setName("");
    setDescription("");
    setImageurl("");
  };

  

 
  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      {current_user && current_user ? (
        <>
          <h3>Add Book</h3>
          <div className="row h-full">
            
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Description</label>
                  <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    placeholder="Enter description"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Image URL</label>
                  <input
                    type="text"
                    value={imageurl}
                    onChange={(e) => setImageurl(e.target.value)}
                    className="form-control"
                    placeholder="Enter Image URL"
                  />
                </div>

                <button type="submit" className="btn mt-3 btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <h3>All Books</h3>
         { (
            <ul>
              
              {books && books.map((book) => (
                <li key={book.id}>
                      <div class="card m-10" style={{width: "18rem"}}>
      <img src={book.imageurl} className="img-fluid" alt="Book" />
      <div class="card-body">
        <h5 class="card-title">name : {book.name}</h5>
        <p class="card-text">description : {book.description}</p>
        <button onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
                </li>
              ))}
            </ul>
          ) }
        </>
      ) : (
        <div>Please login to add a book</div>
      )}
    </div>
  );
}
