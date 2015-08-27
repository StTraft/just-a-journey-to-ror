class AlbumController < ApplicationController
	def index
		@albums = Album.all
	end

	def show
		@album = Album.find_by(params[:name])
	end
end
