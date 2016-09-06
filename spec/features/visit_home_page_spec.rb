require 'rails_helper'

RSpec.describe WelcomeController, type: :feature, js: true do

  feature "navigate to the homepage" do
    it 'navigates to the welcome page' do
      visit root_path
      expect(page).to have_content 'Job Title'
    end
  end

  feature "view salary" do
    it 'shows error when no job title is provided' do
      visit root_path

      click_button 'View Salary'

      expect(page).to have_content "Please fill in a Job Title"
    end

    it 'auto suggests job title based on form input' do
      visit root_path

      fill_in 'job-title', with: 'pr'
      wait_for_ajax

      expect(page).to have_content "Professors"
    end

    it 'auto suggests job title based on form input' do
      visit root_path

      fill_in 'job-title', with: 'pr'
      click_link "Professors"
      click_button "View Salary"

      expect(page).to have_content "National Average salary"
    end
  end
end
