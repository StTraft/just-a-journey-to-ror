class MasterController < ApplicationController
	before_filter :authenticate_user!

	def edit
		@post = Post.find_by(params[:id])
	end

	private
	def get_params
		params.require(:post).permit([:title, :content])
	end
end
