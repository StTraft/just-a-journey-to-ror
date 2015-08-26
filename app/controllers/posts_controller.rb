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
		@post = Post.first
		@post.assign_attributes title: params[:post][:title] 
		@post.assign_attributes content: params[:post][:content]
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
