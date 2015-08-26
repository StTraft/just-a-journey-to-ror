class MasterController < ApplicationController
	before_filter :authenticate_user!

	def edit
		@post = Post.find_by(params[:id])
	end

	def update
		@post.assign_attributes title: params[:title] 
		@post.assign_attributes content: params[:content]
		@post.save
	end

	private
	def get_params
		params.require(:post).permit([:title, :content])
	end
end
