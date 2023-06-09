class AppController < Sinatra::Base
    set :session =>true

    use Rack::Session::Cookie,
    expire_after: 36000

    get "/" do
        "<h1>Welcome to REST APIs CLASS</h1>"
    end

end