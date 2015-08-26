# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Master.destroy_all
Post.destroy_all
#Photo.destroy_all
#Album.destroy_all

Master.create(email: 'master@gordonian.com', password: 'mastergordon!7149')
Post.create(title: 'Even The smallest person can change the course of the future',
	subtitle: 'by Galadriel - Lady of Lothlórien',
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.")
=begin

album = Album.create(name: 'test01')
photo = Photo.create(name: 'test01', resource: File.open('app/assets/images/test.jpg', 'rb'))

album.photos << photo
=end
