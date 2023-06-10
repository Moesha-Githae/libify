

ENV['RACK_ENV'] ||= "production"

# Require in Gems
require 'bundler/setup'
Bundler.require(:default, ENV['RACK_ENV'])

# Database configurations
configure do
  db = URI.parse(ENV['DATABASE_URL'] || 'postgres://libify:GikvSmZBn3DeGAQGI8bhh1QJVLNzR2ev@dpg-ci220567avj2t326gufg-a.oregon-postgres.render.com/libify')
  
  set :database, {
    adapter: 'postgresql',
    host: db.host,
    port: db.port,
    username: db.user,
    password: db.password,
    database: db.path[1..-1]
  }
end

# Require all files in the 'app' directory
require_all 'app'