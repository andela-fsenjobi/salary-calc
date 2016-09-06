require 'rails_helper'

RSpec.describe JobTitle, type: :model do
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:salaries) }

  it { is_expected.to validate_presence_of(:name) }
end
