class AddResourceColumnsToPhotos < ActiveRecord::Migration
  def up
  	add_attachment :photos, :resource
  end

  def down
  	remove_attachment :photos, :resource
  end
end
