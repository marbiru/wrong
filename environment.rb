require 'bundler/setup'

# load gems
Bundler.require

# sinatra config

enable :cross_origin
enable :sessions

set :session_secret, ENV["SESSION_SECRET"]
set :views, settings.root + '/app/views'

# pull in all app code, which is run by config.ru
require_all('app/')
