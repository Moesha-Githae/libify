class ReviewController < AppController
        get "/reviews" do 
            reviews = Review.all
            reviews.to_json(include::user)
        end
        #add review
        post "/reviews/addreview" do
            review=params[:Review]
            user_id=params[:user_id]
            book_id=params[:book_id]

            if(user_id.present? && book_id.present? && review.present?)
                check_user = User.exists?(id: user_id)
           
            if check_user===false
                status 406
                message = {:error=> "User trying to add post does not exist!"}
                message.to_json
            
            else
                review = Review.create(Review: review, book_id: book_id, user_id: user_id)
                if review
                    message = {:success=> "Review created successfully"}
                    message.to_json
                else
                    status 406
                    message = {:error=> "Error saving the review"}
                    message.to_json
                end

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