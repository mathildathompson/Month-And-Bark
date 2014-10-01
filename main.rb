require 'sinatra'
require 'sinatra/reloader'
require 'pry-byebug' if development?

get '/' do 
  erb :home
end