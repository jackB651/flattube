class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :video_id
      t.text :statement

      t.timestamps
    end
  end
end
