# == Schema Information
#
# Table name: workouts
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  route_id       :integer          not null
#  duration       :integer          not null
#  start_datetime :datetime         not null
#  notes          :text
#  activity       :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Workout < ApplicationRecord
 ################ Validations ########################
    validates :user_id, :route_id, :duration, :start_datetime, presence: true
    validates :activity, presence: true, inclusion: {in: ["Run","Bike Ride", "Walk", "Hike", "Other"]}

  ############### Associations #########################
    belongs_to :user 

    belongs_to :route 

    
end