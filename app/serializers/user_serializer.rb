class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_one :channel
  has_many :subscriptions
  has_many :comments
end
