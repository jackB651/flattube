class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid

    private

    # def current_user
    #   user = User.find(session[:user_id])
    # end

    def authorize 
      @current_user ||=User.find_by(id: session[:user_id])
      render json: {errors: "Not Authorized"}, status: :unauthorized unless @current_user
    end

    def not_found
      render json: {error: "Record not found"}, status: 404
    end

    def not_valid(error)
      render json: {error: error.message}, status: 422
    end
end

# #def hello_world
# session[:count] = (session[:count] || 0) + 1
# render json: { count: session[:count] }
# end