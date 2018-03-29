# == Schema Information
#
# Table name: responses
#
#  id             :integer          not null, primary key
#  response_value :integer
#  problem_id     :integer
#

class Response < ActiveRecord::Base
  belongs_to :problem
end


