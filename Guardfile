# A sample Guardfile
# More info at https://github.com/guard/guard#readme

#guard 'livereload', :apply_js_live => true, :appy_css_live => true, :host => 'localhost', :port => '80', :override_url => '/PrototipArt/' do
#  watch(%r{.+\.(html|htm|js)}) 
#  watch(%r{app/view/.+\.js}) 
#  watch(%r{app/controller/.+\.js}) 
#  watch(%r{resoruces/css/.+\.css}) 
#  watch(%r{resoruces/img/.+\.(png|img|gif|JPG|jpg)}) 
#end

#guard :shell do
#	watch('.*\.js') { `./build.sh` }
#end

guard :copy, :verbose      => true, :from => 'resources', :to => 'servidor/public/resources' do
  watch(%r{.+})
end

guard :copy, :verbose      => true, :from => 'app', :to => 'servidor/public/app' do
  watch(%r{.+})
end

# aquest no hi ha manera que funcioni
guard :copy, :verbose      => true, :from => '/home/jmsol/SenchaArchitect/PrototipArt', :to => 'servidor/public' do
  watch(%r{^app.+})
end

