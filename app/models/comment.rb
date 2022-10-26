class Comment < ApplicationRecord
     belongs_to :user
     belongs_to :video

     validates :statement, presence: true
end
