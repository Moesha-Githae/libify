import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { ReviewContext } from "../context/reviewcontext";

export default function AddReview() {
  const { current_user } = useContext(AuthContext);
  const { reviews, addReview, deleteReview } = useContext(ReviewContext);

  const [bookId, setBookId] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(bookId, review, current_user.id);
    setBookId("");
    setReview("");
  };

  const handleDelete = (reviewId) => {
    deleteReview(reviewId);
  };

  

  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      {current_user && current_user ? (
        <>
          <h3>Add Review</h3>
          <div className="row h-full">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label>Name</label>
                  <input
                    type="text"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    className="form-control"
                    placeholder="Enter book ID"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Description</label>
                  <textarea
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="form-control"
                    placeholder="Enter review"
                  />
                </div>

                <button type="submit" className="btn mt-3 btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <h3>All Reviews</h3>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <p>Book ID: {review.bookId}</p>
                  <p>Content: {review.content}</p>
                  <button onClick={() => handleDelete(review.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available</p>
          )}
        </>
      ) : (
        <div>Please login to add a review</div>
      )}
    </div>
  );
}
