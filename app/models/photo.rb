class Photo < ActiveRecord::Base
	belongs_to :album
	has_attached_file :resource, PAPERCLIP_STORAGE_OPTS

  validates_attachment_content_type :resource, content_type: /\Aimage\/.*\Z/
end
