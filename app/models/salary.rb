class Salary < ApplicationRecord
  has_one :title
  has_one :state

  validates :salary, :title_id, :state_id, presence: true

  def self.state_average(state_id, title_id)
    Salary.where(state_id: state_id, title_id: title_id).average(:salary)
  end

  def self.national_average(title_id)
    Salary.where(title_id: title_id).average(:salary)
  end
end
