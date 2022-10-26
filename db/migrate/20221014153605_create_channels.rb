class CreateChannels < ActiveRecord::Migration[7.0]
  def change
    create_table :channels do |t|
      t.string :title
      t.integer :number_of_subscribers 
      t.integer :user_id
      
      t.timestamps
    end
  end
end
