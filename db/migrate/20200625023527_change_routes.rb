class ChangeRoutes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :routes, :description, true 
    add_column :routes, :image_url, :string
    rename_column :routes, :route_metadata, :route_data 
  end
end
