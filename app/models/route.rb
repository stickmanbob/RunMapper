# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  creator_id  :integer          not null
#  distance    :float            not null
#  route_data  :string           not null
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  
#

class Route < ApplicationRecord

 ################ Validations ########################

    validates :name, :creator_id, :distance, :image_url, :route_data, presence: true
    
  ############### Associations #########################
    
    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User 
    
end
