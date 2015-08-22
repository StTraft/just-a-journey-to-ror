class PostsController < ApplicationController
	def index
		@post = Post.first
	end

	def show

	end

	def edit
		@post = Post.first
	end

		
	def update
		@post = Post.find_by(params[:id])
		@post.assign_attributes title: params[:title] 
		@post.assign_attributes content: params[:content]
		@post.save
	end

	def new
	end

	def create
	end

	def destroy
	end

	private
		def get_param
			params.require(:post).permit([:title, :content])
		end
end
