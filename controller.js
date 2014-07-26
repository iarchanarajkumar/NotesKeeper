

var notesStr = '{"Notes":[]}';
var titletxt=document.getElementById("noteTitle");
var detailtxt=document.getElementById("noteDesc");
var successLbl=document.getElementById("successLbl");
var displayNotes=document.getElementById("displayPanel");

function clearMsg(){
successLbl.style.display = "none";

}

function addNdisplay(){
add();
//display();
}

function add(){
//var obj = JSON.parse(notesStr) ;
var a=titletxt.value;
var b=detailtxt.value;
var noteDiv, noteBody, noteTitle;
displayNotes.style.display="block";
	noteDiv=document.createElement('div');
	//noteDiv.innerHTML=note.body;
	noteDiv.className="noteDisplayDiv";
	
	noteTitle=document.createElement('div');
	noteTitle.innerHTML=a;
	noteTitle.className="noteTitleDisplayDiv";
	noteDiv.appendChild(noteTitle);
	
	
	noteBody=document.createElement('div');
	noteBody.innerHTML=b;
	noteBody.className="noteBodyDisplayDiv";
	noteDiv.appendChild(noteBody);
	
	removeBtn=document.createElement('button');
	removeBtn.innerHTML='&#215;';
	removeBtn.className="removeBtnClass";
	removeBtn.onclick=function(){
	displayNotes.removeChild(noteDiv);}
	noteDiv.appendChild(removeBtn);
	
	
	
	displayNotes.appendChild(noteDiv);

//obj['Notes'].push({"title":a,"body":b});
//notesStr = JSON.stringify(obj);
successLbl.style.display = "block";

titletxt.value="";
detailtxt.value="";

}

function display(){


var jsonData = JSON.parse(notesStr);
    var note = jsonData.Notes[--jsonData.Notes.length];
	console.log(note);
	
}


