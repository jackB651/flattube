class LikeSerializer < ActiveModel::Serializer
  attributes :id 
  has_one :video
  has_one :user
end
