class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Comment.all, status: :ok
    end

    def show
        render json: Comment.find(params[:id]), status: :ok
    end

    def create 
        comment = Comment.create!(cparams)
        render json: comment, status: 202
    end

    def update
        comment = Comment.find(params[:id])
        comment.update!(cparams)
        render json: channel, status: 202
    end

    def destroy
        Comment.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def cparams
        params.permit(:statement, :user_id, :video_id)
    end

end
