class AlbumController < ApplicationController
	before_action :authenticate_user!, only: [:edit, :update, :new, :create, :destroy]

	def index
		@albums = Album.all
	end

	def show
		@album = Album.find(params[:id])
		@photos = @album.photos
	end

	def edit
	end

	def update
	end

	def create
	end

	def destroy
	end
end
