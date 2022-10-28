class VideosController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Video.all, status: :ok
    end

    def show
        video = Video.find(params[:id])
        render json: video, status: :ok
    end

    def create 
        video = Video.create!(vparams)
        render json: video, status: 202
    end

    def update
        video = Video.find(params[:id])
        video.update!(vparams)
        render json: video, status: 202
    end

    def destroy
        Video.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def vparams
        params.permit(:src, :title, :description, :channel_id)
    end

end

