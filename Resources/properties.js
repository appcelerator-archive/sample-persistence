var win = Titanium.UI.currentWindow;
win.layout = 'vertical';

var fieldValue = Titanium.App.Properties.getString("fieldValue");

var tf1 = Titanium.UI.createTextField({
	value:fieldValue,
	width:250,
	height:40,
	top:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false
});
tf1.addEventListener('return', function() {
	// hide the keyboard
	tf1.blur();
});
tf1.addEventListener('change', function(e) {
	// save the text field's value 
	Titanium.App.Properties.setString("fieldValue",e.value);
});

win.add(tf1);