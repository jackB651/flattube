class User < ApplicationRecord
    has_secure_password
    has_many :subscriptions
    has_many :comments
    has_one :channel
    # has_many :likes
    # has_many :channels, through: :subscriptions

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }
end
