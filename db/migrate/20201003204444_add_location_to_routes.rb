class AddLocationToRoutes < ActiveRecord::Migration[5.2]
  def change

    add_column :routes, :location, :string, null:false

  end
end
