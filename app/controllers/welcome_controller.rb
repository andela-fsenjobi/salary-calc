class WelcomeController < ApplicationController
  def index
    @states = State.all
  end
end
