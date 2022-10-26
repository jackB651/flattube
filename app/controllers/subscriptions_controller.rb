class SubscriptionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    skip_before_action :authorize, only: [:index, :show]
   
    def index
        render json: Subscription.all, status: :ok
    end

    def show
        render json: Subscription.find(params[:id]), status: :ok
    end

    def create 
        sub = Subscription.create!(sparams)
        render json: sub, status: 202
    end

    def update
        sub = Subscription.find(params[:id])
        sub.update!(cparams)
        render json: sub, status: 202
    end

    def destroy
        Subscription.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def sparams
        params.permit(:channel_id, :user_id)
    end

   
end
