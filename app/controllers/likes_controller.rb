class LikesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Like.all, status: :ok
    end

    def show
        like = Like.find(params[:id])
        render json: like, status: :ok
    end

    def create 
        like = Like.create!(lparams)
        render json: like, status: 202
    end

    def update
        like = Like.find(params[:id])
        like.update!(lparams)
        render json: like, status: 202
    end

    def destroy
        Like.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def lparams
        params.permit(:user_id, :video_id)
    end

end