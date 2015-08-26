class AddResourceColumnsToPhotos < ActiveRecord::Migration
  def self.up
  	change_table :photos do |t|
  		t.attachment :resource
  	end
  end

  def self.down
  	remove_attachment :photos, :resource
  end
end
