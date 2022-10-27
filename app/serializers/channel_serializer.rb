class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :title, :owner
  has_many :videos
  has_many :subscriptions

  def owner 
    object.user.username
  end
end
