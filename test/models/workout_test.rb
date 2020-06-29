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
require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
