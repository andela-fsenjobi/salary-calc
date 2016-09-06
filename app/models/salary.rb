class Salary < ApplicationRecord
  has_one :title
  has_one :state

  validates :salary, :title_id, :state_id, presence: true

end
