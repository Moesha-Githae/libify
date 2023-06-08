import { useContext, useState } from "react";
import {AuthContext } from "../context/Authcontext";
import { BookContext } from "../context/bookcontext";

export default function AddBook() {
  const { current_user } = useContext(AuthContext);
  const { books, addBook, deleteBook } = useContext(BookContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(name, description, imageURL);
    setName("");
    setDescription("");
    setImageURL("");
  };

  const handleDelete = (bookId) => {
    deleteBook(bookId);
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
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
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
          {books.length > 0 ? (
            <ul>
              {books.map((book) => (
                <li key={book.id}>
                  <p>Name: {book.name}</p>
                  <p>Description: {book.description}</p>
                  <div className="col-md-6">
              <img src={imageURL} className="img-fluid" alt="Book" />
            </div>
                  <button onClick={() => handleDelete(book.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No books available</p>
          )}
        </>
      ) : (
        <div>Please login to add a book</div>
      )}
    </div>
  );
}
