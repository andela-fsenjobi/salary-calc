class JobTitle < ApplicationRecord
  has_many :salaries
  validates :name, presence: true

  def self.search(search_query)
    JobTitle.where('name LIKE ?', "%#{search_query}%") unless search_query.blank?
  end
end
