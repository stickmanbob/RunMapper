class StaticPagesController < ApplicationController
    #### Sole purpose of this controller is to render the root view####
    
    def root 
        render :root 
    end
end
