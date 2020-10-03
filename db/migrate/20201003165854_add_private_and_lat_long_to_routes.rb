class AddPrivateAndLatLongToRoutes < ActiveRecord::Migration[5.2]
  def change

    change_table :routes do |t|
      
      t.boolean :private?, null:false
      t.decimal :lat, null:false, precision: 10, scale: 6
      t.decimal :lng, null:false, precision: 10, scale: 6

    end

  end
end
