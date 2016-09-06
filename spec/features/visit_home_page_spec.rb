require "rails_helper"

RSpec.describe WelcomeController, type: :feature do
  it "navigates to the welcome page" do
    visit root_path
    expect(page).to have_content "Job Title"
  end
end
