User.destroy_all
Video.destroy_all
Channel.destroy_all
Comment.destroy_all
Subscription.destroy_all
Like.destroy_all
Dislike.destroy_all

puts "seeding Users"

u1 = User.create(username: "Jack", password: "passwerd")
u2 = User.create(username: "Lewis", password: "123454678")
u3 = User.create(username: "Tony", password: "MMTMTBvg12")
u4 = User.create(username: "Boris", password: "pdk438**%GBC:?><C")
u5 = User.create(username: "Suzan", password: "Boyle140123")

puts "seeding Channels"

ch1= Channel.create(title: "ChewzIt", user_id: u1.id)
ch2= Channel.create(title: "FlatiPie", user_id: u2.id)
ch3= Channel.create(title: "HBomberGuy", user_id: u3.id)
ch4= Channel.create(title: "Foldable Human", user_id: u4.id)
ch5= Channel.create(title: "Brooke Jones", user_id: u5.id)

puts "seeding Videos"

v1 = Video.create(src: "https://www.youtube.com/embed/J7dUhGYlxBA",title: "Sinatra for Beginners",description: "Walkthrough for sinatra server setup",channel_id: ch1.id)
v2 = Video.create(src: "https://www.youtube.com/embed/QrEUDtNuvXA",title: "Fetch Requests and You",description: "How to fetch your data Today!",channel_id: ch2.id)
v3 = Video.create(src: "https://www.youtube.com/embed/HgDiwqsi1y4&t=2321s",title: "Fetch requests 2: Post Boogaloo",description: "How to post data to your api",channel_id: ch3.id)
v4 = Video.create(src: "https://www.youtube.com/embed/HKcm89E-fZA&t=1665s",title: "Auth pt. 1",description: "Setting up sessions and cookies",channel_id: ch4.id)
v5 = Video.create(src: "https://www.youtube.com/embed/JvNGqHknRv4",title: "Auth pt. 2",description: "setting up login and logout",channel_id: ch1.id)
v6 = Video.create(src: "https://www.youtube.com/embed/C_bjyguOLaQ",title: "Event Listeners",description: "Events and their listeners",channel_id: ch2.id) 
v7 = Video.create(src: "https://www.youtube.com/embed/mZfQZQiMtl8",title: "Components and Props",description: "React Components and Props",channel_id: ch3.id)
v8 = Video.create(src: "https://www.youtube.com/embed/67VEjxC_VNQ",title: "Github",description: "How to do the Github, for you",channel_id: ch4.id)

puts "seeding Comments"

co1 = Comment.create(statement: "Pretty neat!", user_id: u2.id,video_id: v1.id)
co2 = Comment.create(statement: "Not enough cowbell", user_id: u1.id,video_id: v3.id)
co3 = Comment.create(statement: "911 was an inside job", user_id: u3.id,video_id: v6.id)
co4 = Comment.create(statement: "Very nice", user_id: u3.id, video_id: v8.id)
co5 = Comment.create(statement: "Too good", user_id: u1.id, video_id: v5.id)
co6 = Comment.create(statement: "My fav", user_id: u4.id, video_id: v2.id)

puts "seeding Subscriptions"

s1 = Subscription.create(channel_id: ch1.id,user_id: u1.id)
s2 = Subscription.create(channel_id: ch2.id,user_id: u2.id)
s3 = Subscription.create(channel_id: ch3.id,user_id: u3.id)
s4 = Subscription.create(channel_id: ch4.id,user_id: u4.id)
s5 = Subscription.create(channel_id: ch1.id,user_id: u2.id)

puts "seeding Likes"

l1 = Like.create(user_id: u1.id,video_id: v1.id)
l2 = Like.create(user_id: u2.id,video_id: v3.id)
l3 = Like.create(user_id: u1.id,video_id: v2.id)
l4 = Like.create(user_id: u3.id,video_id: v3.id)
l5 = Like.create(user_id: u4.id,video_id: v5.id)

puts "seeding Dislikes"

d1 = Like.create(user_id: u2.id,video_id: v2.id)
d2 = Like.create(user_id: u3.id,video_id: v4.id)
d3 = Like.create(user_id: u2.id,video_id: v3.id)
d4 = Like.create(user_id: u4.id,video_id: v4.id)
d5 = Like.create(user_id: u5.id,video_id: v6.id)

puts "done seeding"