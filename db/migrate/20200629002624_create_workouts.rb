class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null:false
      t.integer :route_id, null:false
      t.integer :duration, null:false
      t.datetime :start_datetime, null:false
      t.text :notes
      t.string :activity, null:false

      t.timestamps
    end

    add_index :workouts, :activity
    add_index :workouts, :user_id
    add_index :workouts, :route_id
    add_index :routes, :creator_id
    
  end
end
