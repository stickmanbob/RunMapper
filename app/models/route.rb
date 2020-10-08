# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  creator_id  :integer
#  distance    :float            not null
#  route_data  :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :text
#  activity    :string           not null
#  private?    :boolean          not null
#  lat         :decimal(10, 6)   not null
#  lng         :decimal(10, 6)   not null
#  location    :string           not null
#

class Route < ApplicationRecord

 ################ Validations ########################

    validates :name, :distance, :image_url, :route_data, presence: true

    validates :activity, presence: true, inclusion: {in: ["Run","Bike Ride", "Walk", "Hike", "Other"]}
    
  ############### Associations #########################
    
    belongs_to :creator, optional: true,
        foreign_key: :creator_id,
        class_name: :User 
    
    has_many :logged_workouts,
        class_name: :Workout

  ## Geokit setup

  acts_as_mappable :default_units => :miles,
                   :default_formula => :sphere,
                   :distance_field_name => :dist_from,
                   :lat_column_name => :lat,
                   :lng_column_name => :lng
end
