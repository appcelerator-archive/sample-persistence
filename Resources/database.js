var win = Titanium.UI.currentWindow;
var currentNote = '';
var db = Titanium.Database.open('todos');
db.execute('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT)');

//create data entry view
var entryView = Ti.UI.createView({
  backgroundColor:'#0060AA',
  width:'100%',
  height:50,
  top:0
});

var controlsView = Ti.UI.createView({
  width:270,
  height:'auto'
});

var saveButton = Titanium.UI.createButton({
	title:'Save',
	width:60,
	height:35,
	right:0,
	enabled:false
});
controlsView.add(saveButton);

var tf1 = Titanium.UI.createTextField({
	width:200,
	height:35,
	left:0,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false,
	hintText:'Enter a note...'
});
tf1.addEventListener('return', function() {
	tf1.blur();
});
tf1.addEventListener("change", function(e) {
  currentNote = e.value;
  if (currentNote == '') {
    saveButton.enabled = false;
  }
  else {
    saveButton.enabled = true;
  }
});
controlsView.add(tf1);

entryView.add(controlsView);
win.add(entryView);

//This is the array we'll use to back the table view
var data = [];

//Get data for tableview
var rows = db.execute('SELECT * FROM todos');
while (rows.isValidRow()) {
  data.push({
    title: rows.fieldByName('todo'),
    id: rows.fieldByName('id')
  });
	rows.next();
}
rows.close();
db.close();

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	editable:true,
	top:50
});

// create table view event listener
tableview.addEventListener('click', function(e) {
	Titanium.UI.createAlertDialog({
	  title:'DB Test', 
	  message:'Now would be a perfect time to update the record at index ' + e.rowData.id 
	}).show();
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);

//Add event listener for save button
saveButton.addEventListener("click", function(e) {
  if (saveButton.enabled) {
	var db = Titanium.Database.open('todos');
    db.execute('INSERT INTO todos (todo) VALUES(?)',currentNote);
    var last = db.lastInsertRowId; // careful, it's not lastInsertRowID!
    tableview.appendRow({
      title:currentNote,
      id:last
    });
    currentNote = '';
    tf1.value = '';
    tf1.blur();
    saveButton.enabled = false;
    db.close();
  }
});

if(Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
	//
	//	iOS only feature: editable table
	//  create edit/cancel buttons for nav bar
	//
	var editButton = Titanium.UI.createButton({
		title:'Edit'
	});
	var cancelButton = Titanium.UI.createButton({
		title:'Cancel',
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	
	editButton.addEventListener('click', function() {
		win.setRightNavButton(cancelButton);
		tableview.editing = true;
	});
	cancelButton.addEventListener('click', function() {
		win.setRightNavButton(editButton);
		tableview.editing = false;
	});

	// add delete event listener
	tableview.addEventListener('delete',function(e) {
		var db = Titanium.Database.open('todos');
		db.execute("DELETE FROM todos WHERE id = ?", e.rowData.id);
		db.close();
	});
	
	win.setRightNavButton(editButton);	
}
