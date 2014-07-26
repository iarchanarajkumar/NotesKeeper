

var notesStr = '{"Notes":[]}';
var titletxt=document.getElementById("noteTitle");
var detailtxt=document.getElementById("noteDesc");
//var successLbl=document.getElementById("successLbl");
//var displayNotes=document.getElementById("display");

function clearMsg(){
successLbl.value = '';
}

function submit(){
add();
display();
}

function add(){
var obj = JSON.parse(notesStr) ;
var a=titletxt.value;
var b=detailtxt.value;
obj['Notes'].push({"title":a,"body":b});
notesStr = JSON.stringify(obj);
console.log("hi");
//successLbl.innerHTML="\u2713 Object Added ";
titletxt.value="";
detailtxt.value="";

}

function display(){
var displayBox="";
var jsonData = JSON.parse(notesStr);
for (var i = 0; i < jsonData.Notes.length; i++) {
    var note = jsonData.Notes[i];
    console.log(note.body);
displayBox+=note.body+ " "  ;
}
displayBox=displayNotes.add('div');
displayBox.innerHTML=displayNotes.value;
}


