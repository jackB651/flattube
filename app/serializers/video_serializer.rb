class VideoSerializer < ActiveModel::Serializer
  attributes :id, :src, :title, :description, :likes, :dislikes, :number_of_views

  has_one :channel
  has_many :comments
end
