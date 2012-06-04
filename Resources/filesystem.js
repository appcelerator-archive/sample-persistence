var win = Titanium.UI.currentWindow;
win.layout = 'vertical';

if(Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'test.json').exists()) {
	// if file exists in applicationDataDirectory, use it
	var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'test.json');
} else {
	// otherwise, open the 'stock' version from resourcesDirectory
	var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'test.json');
}

var resources = JSON.parse(f.read().text);

var tf1 = Titanium.UI.createTextField({
	value:resources.en_us.hello,
	width:250,
	height:40,
	top:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false
});
tf1.addEventListener('return', function() {
	tf1.blur();
});
tf1.addEventListener('change', function(e) {
	resources.en_us.hello = e.value;
});
win.add(tf1);

var tf2 = Titanium.UI.createTextField({
	value:resources.en_us.goodbye,
	width:250,
	height:40,
	top:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false
});
tf2.addEventListener('return', function() {
	tf2.blur();
});
tf2.addEventListener('change', function(e) {
  resources.en_us.goodbye = e.value;
});
win.add(tf2);

var b1 = Titanium.UI.createButton({
	title:'Save Resources',
	width:200,
	height:40,
	top:10
});
b1.addEventListener("click", function(e) {
	tf1.blur();
	tf2.blur();
	f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'test.json');
	f.write(JSON.stringify(resources));
});
win.add(b1);