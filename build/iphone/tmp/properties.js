var win = Titanium.UI.currentWindow;

var foo = Titanium.App.Properties.getString("foo");

var fooField = Titanium.UI.createTextField({
	color:'#787878',
	value:foo,
	height:35,
	top:95,
	width:250,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false
});
fooField.addEventListener('return', function() {
	unField.blur();
});
fooField.addEventListener('change', function(e) {
	foo = e.value;
});

win.add(fooField);