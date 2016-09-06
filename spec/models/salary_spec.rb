require 'rails_helper'

RSpec.describe Salary, type: :model do
  it { is_expected.to respond_to(:title) }
  it { is_expected.to respond_to(:state) }
  it { is_expected.to respond_to(:salary) }

  it { is_expected.to validate_presence_of(:title_id) }
  it { is_expected.to validate_presence_of(:state_id) }
  it { is_expected.to validate_presence_of(:salary) }
end
