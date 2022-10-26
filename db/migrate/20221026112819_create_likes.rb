class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :video_id
      t.boolean :like?
      t.boolean :dislike?

      t.timestamps
    end
  end
end
