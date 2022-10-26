class CommentSerializer < ActiveModel::Serializer
  attributes :id, :likes, :dislikes, :statement
  has_one :user
  has_one :video
end
