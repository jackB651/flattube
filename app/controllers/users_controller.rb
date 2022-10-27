class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid

    skip_before_action :authorize, only: [:index, :create]
   
    def index
        render json: User.all, status: :ok
    end

    def show
       if @current_user
        render json: @current_user, status: :ok
       else
        render json: {error: "No session"}, status: :unauthorized
       end
    end

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :ok
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def not_found
        render json: {error: "User not found"}, status: 404
    end

    def not_valid(error)
        render json: {error: error.message}, status: 422
    end
end
