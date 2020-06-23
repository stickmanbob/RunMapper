# == Schema Information
#
# Table name: routes
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  description    :text             not null
#  creator_id     :integer          not null
#  distance       :float            not null
#  route_metadata :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Route < ApplicationRecord

 ################ Validations ########################

    validates :name, :description, :creator_id, :distance, :route_metadata, presence: true
    
  ############### Associations #########################
    
    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User 
    
end
