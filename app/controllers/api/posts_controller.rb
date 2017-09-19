class Api::PostsController < ApplicationController

  def index
    render json: Post.all.to_json( only: [:id, :title], methods: :img_url)
  end

  def create
    attrs = params.permit(:title, :img)
    nupost = Post.new(attrs)
    if nupost.save
      render json: { id: nupost.id, img_url: nupost.img.url, title: nupost.title }
    else
      render json: { errors: nupost.errors.full_messages }, status: 422
    end
  end

  def destroy
    Post.find(params[:id]).destroy
  end
  
end
