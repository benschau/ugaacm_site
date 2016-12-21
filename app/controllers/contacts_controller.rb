class ContactsController < ApplicationController
    def new
        @contact = Contact.new
    end

    def create
        @contact = Contact.new(params[:contact])
        @contact.request = request
        if @contact.deliver
            flash.now[:notice] = 'Thanks for the message!'
        else
            flash.now[:error] = 'ERROR: Message not sent.'
            render :new
        end
    end
end
