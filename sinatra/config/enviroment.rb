

ENV["RACK_ENV"] ||= "development"

require 'bundler/setup'
Bundler.require(:default, ENV["RACK_ENV"])

#database configuration
configure do 
    set :database,{
        adapter: "sqlite3",
        database: "db/development.sqlite3"
    }
end

require_all "app"