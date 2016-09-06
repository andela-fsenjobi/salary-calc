class JobTitleController < ApplicationController
  def search
    results = JobTitle.search(search_params)
    render json: results
  end

  private
    def search_params
      params.permit(:q)[:q]
    end
end
