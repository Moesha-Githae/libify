class BookController < AppController
        get "/books" do 
            books = Book.all
            books.to_json
        end


        #add review
        post "/books/addbook" do
            name =params[:name]
            description =params[:description]
            imageurl =params[:imageurl]

            if(name.present? && description.present? && imageurl.present?)
                check_book = Book.exists?(name: name)
           
                if check_book===true
                    status 406
                    message = {:error=> "Book trying to add post does  exist!"}
                    message.to_json
                
                else
                    book = Book.create(name: name, description: description, imageurl: imageurl)
                    if book
                        message = {:success=> "Bookcreated successfully"}
                        message.to_json
                    else
                        status 406
                        message = {:error=> "Error saving the book"}
                        message.to_json
                    end
                end
            
            else
                status 406
                message = {:error=> "All field are required"}
                message.to_json
            end
        end
    





 # =============DELETE book
    delete "/book/delete/:id" do
        check_book =Book.exists?(id: params[:id] ) 
        if check_book
            book = Book.find(params[:id])
            book.destroy
            message = {:success=> "book deleted "}
            message.to_json
        else
            status 406
            message = {:error=> "book does not exist"}
            message.to_json
        end
    end
end

