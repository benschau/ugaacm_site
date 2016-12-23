class MainController < ApplicationController
    def home
    end
    def about 
    end
    def contact
        @contact = Contact.new 
    end
    def events
    end
    def gallery
    end
    def officers
    end
end
