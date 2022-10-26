class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :src
      t.string :title
      t.text :description
      t.integer :likes
      t.integer :dislikes
      t.integer :channel_id
      t.integer :number_of_views

      t.timestamps
    end
  end
end
