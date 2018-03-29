# Rakefile
require 'sinatra/activerecord/rake'
require './environment.rb'

desc "run pry console"
task :console do |t, args|
  ENV['RACK_ENV'] = 'development'

  exec "pry -r ./environment.rb"
end
