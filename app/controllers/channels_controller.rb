class ChannelsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    def index
        render json: Channel.all, status: :ok
    end

    def show
        render json: Channel.find(params[:id]), status: :ok
    end

    def create 
        channel = Channel.create!(cparams)
        render json: channel, status: 202
    end

    def update
        channel = Channel.find(params[:id])
        channel.update!(cparams)
        render json: channel, status: 202
    end
    
    def destroy
        Channel.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def cparams
        params.permit(:title,:user_id)
    end

end
