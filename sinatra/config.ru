# runs application
require_relative "./config/enviroment.rb"

# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
    end
end
  
  #  Parse JSON from the request body into the params hash
  use Rack::JSONBodyParser
  

use ReviewController
use UserController
use BookController
use SessionController
run AppController
