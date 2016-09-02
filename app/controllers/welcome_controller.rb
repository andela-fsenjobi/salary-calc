class WelcomeController < ApplicationController
  def index
    @states = State.all
  end

  def calculate
    data = calculate_params
    title_id = JobTitle.find_by(name: data[:title])
    state_id = data[:state]
    state_name = State.find(state_id).name
    render json: {
      state_average: Salary.state_average(state_id, title_id),
      national_average: Salary.national_average(title_id),
      state_name: state_name,
      title_name_with_article: data[:title].singularize.indefinitize,
      singular_title: data[:title].singularize,
      plural_title: data[:title].pluralize,
    }
  end

  private

  def calculate_params
    params.permit(:state, :title)
  end
end
