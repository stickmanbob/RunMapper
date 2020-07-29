class AllowNullRouteCreatorId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :routes, :creator_id, true
  end
end
