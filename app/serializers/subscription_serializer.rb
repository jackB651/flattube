class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :channel
  has_one :user
end
