class State < ApplicationRecord
  has_many :salaries
  validates :name, presence: true

end
