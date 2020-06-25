class ChangeRoutesDataTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :route_data, :text
    change_column :routes, :image_url, :text
  end
end
