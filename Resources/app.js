var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var currentdate = new Date(); 
var timp = currentdate.getDay()+"-"+currentdate.getMonth() + "-" + currentdate.getFullYear() + ","+ currentdate.getHours() + ":" + currentdate.getMinutes();

var inputLayoutContainer = Titanium.UI.createView({
 
    width:'100%',
    height:'auto',
    layout:'vertical',
    backgroundColor:"#fbb087"
 
});

var textField1 = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : 10,
	left : 10,
	width : 250,
	height : 60
});

var textField2 = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : 10,
	left : 10,
	width : 250,
	height : 60
});
var textField3= Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : 10,
	left : 10,
	width : 250,
	height : 60
});
var textField4 = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : 10,
	left : 10,
	width : 250,
	height : 60
});


//folder
var storages = Ti.Filesystem.applicationDataDirectory;
if(Ti.Filesystem.isExternalStoragePresent()){
    storages = 'file:///sdcard/';                      
}
 
var folders = Ti.Filesystem.getFile(storages,'sAgenda');
if (!folders.exists()){
     folders.createDirectory();
}

folder = 'file:///sdcard/sAgenda/';



// get file if it exists
var file1 = Ti.Filesystem.getFile(folder, '1.txt');
// create file if it doesn't exist
if (file1 == null) {
	file1 = Ti.Filesystem.createFile(folder, '1.txt');
}

var file2 = Ti.Filesystem.getFile(folder, '2.txt');
// create file if it doesn't exist
if (file2 == null) {
	file2 = Ti.Filesystem.createFile(folder, '2.txt');
}

var file3 = Ti.Filesystem.getFile(folder, '3.txt');
// create file if it doesn't exist
if (file3 == null) {
	file3 = Ti.Filesystem.createFile(folder, '3.txt');
}

var file4 = Ti.Filesystem.getFile(folder, '4.txt');
// create file if it doesn't exist
if (file4 == null) {
	file4 = Ti.Filesystem.createFile(folder, '4.txt');
}

var Button1 = Titanium.UI.createButton({
	title : 'Export',
	width : '50%',
	height : 'auto'

});
Button1.addEventListener("click", function(eventObject) {
	alert("Successfully done");
	file1.write(timp + " : " +textField1.value + "\n", true);
});
//doi
var Button2 = Titanium.UI.createButton({
	title : 'Export',
	width : '50%',
	height : 'auto'

});
Button2.addEventListener("click", function(eventObject) {
	alert("Successfully done");
	file2.write(timp + " : " +textField2.value + "\n", true);
});
//trei
var Button3 = Titanium.UI.createButton({
	title : 'Export',
	width : '50%',
	height : 'auto'

});
Button3.addEventListener("click", function(eventObject) {
	alert("Successfully done");
	file3.write(timp + " : " +textField3.value + "\n", true);
});
//patru
var Button4 = Titanium.UI.createButton({
	title : 'Export',
	width : '50%',
	height : 'auto'

});
Button4.addEventListener("click", function(eventObject) {
	alert("Successfully done");
	file4.write(timp + " : " +textField4.value + "\n", true);
});

inputLayoutContainer.add(textField1);
inputLayoutContainer.add(Button1);
inputLayoutContainer.add(textField2);
inputLayoutContainer.add(Button2);
inputLayoutContainer.add(textField3);
inputLayoutContainer.add(Button3);
inputLayoutContainer.add(textField4);
inputLayoutContainer.add(Button4);
win.add(inputLayoutContainer);
win.open();

