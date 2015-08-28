# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Master.destroy_all
Post.destroy_all
Photo.delete_all
Album.delete_all

Master.create(email: 'master@gordonian.com', password: 'mastergordon!7149')
Post.create(title: 'Even The smallest person can change the course of the future',
	subtitle: 'by Galadriel - Lady of Lothlórien',
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.")

(1..10).each do |i|
	album = Album.create(name: "album_#{i}")
	album.photos << Photo.create(name: 'photo_1', resource: File.open('app/assets/images/test.jpg', 'rb'))
	album.photos << Photo.create(name: 'photo_2', resource: File.open('app/assets/images/1.jpg', 'rb'))
	album.photos << Photo.create(name: 'photo_3', resource: File.open('app/assets/images/2.jpg', 'rb'))
	album.photos << Photo.create(name: 'photo_4', resource: File.open('app/assets/images/3.png', 'rb'))
	album.photos << Photo.create(name: 'photo_5', resource: File.open('app/assets/images/4.png', 'rb'))
end




