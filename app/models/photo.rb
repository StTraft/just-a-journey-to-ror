class Photo < ActiveRecord::Base
	belongs_to :album
	has_attached_file :resource, styles: { medium: '300x300>', thumb: '100x100>' },
		storage: :dropbox,
		dropbox_credentials: Rails.root.join("config/dropbox.yml"),
		dropbox_options: {environment: ENV["RACK_ENV"]}

  validates_attachment_content_type :resource, content_type: /\Aimage\/.*\Z/
end
