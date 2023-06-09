import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { ReviewContext } from "../context/reviewcontext";

export default function AddReview() {
  const { current_user } = useContext(AuthContext);
  const { reviews, AddReview, deleteReview } = useContext(ReviewContext);

  const [book_id, setBookId] = useState("");
  const [Review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AddReview(book_id, Review);
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
                    value={book_id}
                    onChange={(e) => setBookId(e.target.value)}
                    className="form-control"
                    placeholder="Enter book ID"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Description</label>
                  <textarea
                    type="text"
                    value={Review}
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
          {(
            <ul>
              {reviews && reviews.map((review) => (
                <li key={review.id}>
                  <div class="card m-10" style={{width: "18rem"}}>
      <div class="card-body">
        <h5 class="card-title">Book ID: {review.book_id}</h5>
        <p class="card-text">Content: {review.Review}</p>
        <button onClick={() => handleDelete(review.id)}>
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
        <div>Please login to add a review</div>
      )}
    </div>
  );
}
