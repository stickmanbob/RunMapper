class AddActivitiesColumnToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :activity, :string, null:false
    add_index :routes, :activity
  end
  
end
