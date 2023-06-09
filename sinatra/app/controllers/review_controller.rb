class ReviewController < AppController
        get "/reviews" do 
            reviews = Review.all
            reviews.to_json(include: :user)
        end
        #add review
        post "/reviews/addreview" do
            review=params[:Review]
            user_id=session[:user_id]
            bookid=params[:book_id]

            if( book_id.present? && review.present?)
               
                review = Review.create(Review: review, book_id: bookid, user_id: user_id)
                if review
                    message = {:success=> "Review created successfully"}
                    message.to_json
                else
                    status 406
                    message = {:error=> "Error saving the review"}
                    message.to_json
                end

            
            else
                status 406
                message = {:error=> "All field are required"}
                message.to_json
            end
        end





# =============DELETE review
delete "/reviews/delete/:id" do
    check_review = Review.exists?(id: params[:id] ) 
    if check_review
        review = Review.find(params[:id])
        review.destroy
        message = {:success=> "review deleted "}
        message.to_json
    else
        status 406
        message = {:error=> "review does not exist"}
        message.to_json
    end


end

end