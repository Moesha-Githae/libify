class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :user_id
      t.string :book_id
      t.string :Review
    end
  end
end
