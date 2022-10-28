class DislikesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Dislike.all, status: :ok
    end

    def show
        dislike = Dislike.find(params[:id])
        render json: dislike, status: :ok
    end

    def create 
        dislike = Dislike.create!(lparams)
        render json: dislike, status: 202
    end

    def update
        dislike = Dislike.find(params[:id])
        dislike.update!(lparams)
        render json: dislike, status: 202
    end

    def destroy
        Dislike.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def lparams
        params.permit(:user_id, :video_id)
    end

end
