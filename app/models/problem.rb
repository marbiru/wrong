# == Schema Information
#
# Table name: problems
#
#  id         :integer          not null, primary key
#  question   :string
#  unit       :string
#  solution   :float
#  source     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Problem < ActiveRecord::Base
  has_many :responses
end
