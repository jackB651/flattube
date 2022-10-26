class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :title, :number_of_subscribers, :owner
  has_many :videos

  def owner 
    object.user.username
  end
end
