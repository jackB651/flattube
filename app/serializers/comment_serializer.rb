class CommentSerializer < ActiveModel::Serializer
  attributes :id, :statement
  has_one :user
  has_one :video
end
