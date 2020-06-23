class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.integer :creator_id, null:false
      t.float :distance, null:false
      t.string :route_metadata, null:false

      t.timestamps
    end
    add_index :routes, :name
  end
end
