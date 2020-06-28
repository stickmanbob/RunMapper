# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  creator_id  :integer          not null
#  distance    :float            not null
#  route_data  :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :text
#  activity    :string           not null
#
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
