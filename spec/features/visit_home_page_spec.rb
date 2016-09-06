require "rails_helper"

RSpec.describe WelcomeController, type: :feature do
  it "navigates to the welcome page" do
    visit root_path
    expect(page).to have_content "Job Title"
  end

  it "auto suggests job title based on form input" do
    visit root_path

    fill_in "job-title", with: "pr"

    # expect(page).to have_content "Professors"
  end
end
