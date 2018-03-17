# require all your files and gems in one go

require 'bundler/setup'
Bundler.require

# set env var constants
SESSION_SECRET = ENV["SESSION_SECRET"]

# sinatra config
enable :sessions
set :session_secret, SESSION_SECRET
set :views, 'app/views'

# Redis config

require_all('app/')
