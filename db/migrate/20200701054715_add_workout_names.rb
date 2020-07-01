class AddWorkoutNames < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :name, :string

    add_index :workouts, :name 
  end

end
