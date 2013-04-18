# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload', :apply_js_live => true, :appy_css_live => true, :host => 'localhost', :port => '80', :override_url => '/PrototipArt/' do
  watch(%r{.+\.(html|htm|js)})
  watch(%r{app/view/.+\.js})
  watch(%r{app/controller/.+\.js})
  watch(%r{resoruces/css/.+\.css})
  watch(%r{resoruces/img/.+\.(png|img|gif|JPG|jpg)})
end
