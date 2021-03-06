# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord


 ################ Ensure Session Token on Creation ##################
    after_initialize :ensure_session_token
 ########################## VALIDATIONS###############################

    validates :email, :fname, :lname, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    
    ## Validate @password length and allow nil, so will give length errors on 
    # user creation but not on retreival from database 
        validates :password, length:{minimum: 6}, allow_nil: true 
        
        attr_reader :password #Need this so validation will work
 

 ############################ Associations #############################
    has_many :routes, foreign_key: :creator_id
    has_many :workouts
    has_one_attached :profile_picture
 ############################# AUTH METHODS #############################
    
   def self.find_by_credentials(email, pass)
        user = User.find_by(email: email)

        if user and user.password=(pass)
            return user 
        else
            return nil
        end

    end

    def password=(pass)
        @password = pass 
        self.password_digest = BCrypt::Password.create(pass)
    end

    def is_password?(pass)
        BCrypt::Password.new(pw_digest).is_password?(pass)
        # create a new Bcrypt Password instance from the pw digest and call its 
        # own is_password? method to check. 
    end

    def make_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        #must reset session_token and save to db
        self.session_token = make_session_token
        self.save!
        #return session token so we can leverage this to set
        #session[:session_token] at the same time
        self.session_token
    end

    def ensure_session_token
        #to be called upon instantiation
        self.session_token ||= make_session_token
    end


end
