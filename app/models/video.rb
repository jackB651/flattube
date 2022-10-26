class Video < ApplicationRecord
    belongs_to :channel
    has_many :comments
    # has_many :likes
    validates :src, presence: true
    validates :title, presence: true
    validates :description, presence: true
end
