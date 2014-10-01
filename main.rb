require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry-byebug' if development?

get '/' do 
  erb :home
end