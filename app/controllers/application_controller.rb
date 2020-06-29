class ApplicationController < ActionController::Base
    
    ########ONLY FOR POSTMAN TESTING!!###########
    skip_before_action :verify_authenticity_token
    ##############################################

    helper_method :current_user, :logged_in?

    def current_user
        #current logged in user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        if !logged_in? 
            render json:["Must be logged in!"], status: 401 
            return 
        end
    end

    def logged_in? 
        !!current_user
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout_user(user)
        user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil 
    end

    def user_params
        # Helper method for extracting user params from http
        # Used in UsersController and elsewhere
        params.require(:user).permit(:email, :fname, :lname, :password)
    end
end
