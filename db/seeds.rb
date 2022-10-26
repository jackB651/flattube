User.destroy_all
Video.destroy_all
Channel.destroy_all
Comment.destroy_all
Subscription.destroy_all
# Like.destroy_all

puts "seeding Users"

u1 = User.create(username: "Jack", password: "passwerd")
u2 = User.create(username: "Lewis", password: "123454678")
u3 = User.create(username: "Tony", password: "MMTMTBvg12")
u4 = User.create(username: "Boris", password: "pdk438**%GBC:?><C")
u5 = User.create(username: "Suzan", password: "Boyle140123")

puts "seeding Channels"

ch1= Channel.create(title: "ChewzIt", user_id: u1.id, number_of_subscribers: 0)
ch2= Channel.create(title: "FlatiPie", user_id: u2.id, number_of_subscribers: 0)
ch3= Channel.create(title: "HBomberGuy", user_id: u3.id, number_of_subscribers: 0)
ch4= Channel.create(title: "Foldable Human", user_id: u4.id, number_of_subscribers: 0)
ch5= Channel.create(title: "Brooke Jones", user_id: u5.id, number_of_subscribers: 0)

puts "seeding Videos"

v1 = Video.create(src: "https://www.youtube.com/embed/J7dUhGYlxBA",title: "Sinatra for Beginners",description: "Walkthrough for sinatra server setup",likes: 0,dislikes: 0,channel_id: ch1.id,number_of_views: 0)
v2 = Video.create(src: "https://www.youtube.com/embed/QrEUDtNuvXA",title: "Fetch Requests and You",description: "How to fetch your data Today!",likes: 0,dislikes: 0,channel_id: ch2.id,number_of_views: 0)
v3 = Video.create(src: "https://www.youtube.com/embed/HgDiwqsi1y4&t=2321s",title: "Fetch requests 2: Post Boogaloo",description: "How to post data to your api",likes: 0,dislikes: 0,channel_id: ch3.id,number_of_views: 0)
v4 = Video.create(src: "https://www.youtube.com/embed/HKcm89E-fZA&t=1665s",title: "Auth pt. 1",description: "Setting up sessions and cookies",likes: 0,dislikes: 0,channel_id: ch4.id,number_of_views: 0)
v5 = Video.create(src: "https://www.youtube.com/embed/JvNGqHknRv4",title: "Auth pt. 2",description: "setting up login and logout",likes: 0,dislikes: 0,channel_id: ch1.id,number_of_views: 0)
v6 = Video.create(src: "https://www.youtube.com/embed/C_bjyguOLaQ",title: "Event Listeners",description: "Events and their listeners",likes: 0,dislikes: 0,channel_id: ch2.id,number_of_views: 0) 
v7 = Video.create(src: "https://www.youtube.com/embed/mZfQZQiMtl8",title: "Components and Props",description: "React Components and Props",likes: 0,dislikes: 0,channel_id: ch3.id,number_of_views: 0)
v8 = Video.create(src: "https://www.youtube.com/embed/67VEjxC_VNQ",title: "Github",description: "How to do the Github, for you",likes: 0,dislikes: 0,channel_id: ch4.id, number_of_views: 0)

puts "seeding Comments"

co1 = Comment.create(likes: 0,dislikes: 0,statement: "Pretty neat!", user_id: u2.id,video_id: v1.id)
co2 = Comment.create(likes: 0,dislikes: 0,statement: "Not enough cowbell", user_id: u1.id,video_id: v3.id)
co3 = Comment.create(likes: 0,dislikes: 0,statement: "911 was an inside job", user_id: u3.id,video_id: v6.id)
co4 = Comment.create(likes: 0,dislikes: 0,statement: "Very nice", user_id: u3.id, video_id: v8.id)
co5 = Comment.create(likes: 0,dislikes: 0,statement: "Too good", user_id: u1.id, video_id: v5.id)
co6 = Comment.create(likes: 0,dislikes: 0,statement: "My fav", user_id: u4.id, video_id: v2.id)

puts "seeding Subscriptions"

s1 = Subscription.create(channel_id: ch1.id,user_id: u1.id)
s2 = Subscription.create(channel_id: ch2.id,user_id: u2.id)
s3 = Subscription.create(channel_id: ch3.id,user_id: u3.id)
s4 = Subscription.create(channel_id: ch4.id,user_id: u4.id)
s5 = Subscription.create(channel_id: ch1.id,user_id: u2.id)

puts "seeding Likes"

# l1 = Like.create(user_id: u1.id,video_id: v1.id,like?: true,dislike?: nil)
# l2 = Like.create(user_id: u2.id,video_id: v3.id,like?: true,dislike?: nil)
# l3 = Like.create(user_id: u1.id,video_id: v2.id,like?: nil,dislike?: true)
# l4 = Like.create(user_id: u3.id,video_id: v3.id,like?: true,dislike?: nil)
# l5 = Like.create(user_id: u4.id,video_id: v5.id,like?: nil,dislike?: true)

puts "done seeding"