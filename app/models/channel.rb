class Channel < ApplicationRecord
has_many :subscriptions
belongs_to :user
# has_many :users, through: :subscriptions
has_many :videos
has_many :comments, through: :videos

validates :title, presence: true
end

