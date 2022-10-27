class VideoSerializer < ActiveModel::Serializer
  attributes :id, :src, :title, :description

  has_one :channel
  has_many :comments
end
