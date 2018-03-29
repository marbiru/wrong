require './environment.rb'

# see :MethodOverride http://www.sinatrarb.com/configuration.html
use Rack::MethodOverride
run Sinatra::Application
