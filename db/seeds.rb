# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Master.destroy_all
Post.destroy_all

Master.create(email: 'master@gordonian.com', password: 'mastergordon!7149')
Post.create(title: 'This is the title', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum et diam sed tincidunt. Duis volutpat sit amet est eget mollis. Aenean lobortis et metus id pharetra. Suspendisse quis odio laoreet, tincidunt odio eget, tincidunt nibh.")
