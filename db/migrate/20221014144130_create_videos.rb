class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :src
      t.string :title
      t.text :description
      t.integer :channel_id

      t.timestamps
    end
  end
end
