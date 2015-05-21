var theDiv = document.getElementById("thatDiv");

var eventButton = document.getElementById("todoButton");
var inputBox = document.getElementById("textboxInput");

inputBox.focus()

eventButton.addEventListener("click", addToList);

function addToList() {
	var inputText = inputBox.value; 

	if(inputText === "") {
		alert("No input");
	}
	else {
		var bar = document.createTextNode("|");
		var textChanged = false;
		var compareText = inputText;

		var editButton = document.createElement("input");
		editButton.type = "button";
		editButton.value = "edit";

		var deleteButton = document.createElement("input");
		deleteButton.type = "button";
		deleteButton.value = "edit";

		//--- DNG
		checkBoxElement = document.createElement("input");

		var liElement = document.createElement("li");

		var listBox = document.createElement("input");
        listBox.value = inputText;
		listBox.className ="taskReadOnly";

		checkBoxElement.type = "checkbox";
        checkBoxElement.addEventListener("click", function(){
			crossedOut(listBox, checkBoxElement);
		});

        editButton.className ="buttonStyle";
        deleteButton.className ="buttonStyle";
        textDiv.className = "taskTextDiv";
        buttonDiv.className = "taskButtonDiv";

        /*
			insert all the elements in the line:
			[checkbox] [input text] [edit button] [symbol] [delete button] [br]
		*/
        theDiv.appendChild(liElement);
		liElement.appendChild(textDiv);
		textDiv.appendChild(checkBoxElement);
		textDiv.appendChild(listBox);
		liElement.appendChild(buttonDiv);
		buttonDiv.appendChild(editButton);
		buttonDiv.appendChild(bar);
		buttonDiv.appendChild(deleteButton);

		inputBoxElement.value= "";

		deleteButton.addEventListener("click", function(){
			removeTask(element, liElement);
		});

		editButton.addEventListener("click", function(){
			changeDisplays(listBox, editButton, checkBoxElement, textChanged, compareText);
		});

		/*
		var inputList = document.createElement("li");
		theDiv.appendChild(inputList);

		var listEntryCB = document.createElement("input");
		listEntryCB.type = "checkbox";
		inputList.appendChild(listEntryCB);

		var inText = document.createTextNode(inputText);
		inputList.appendChild(inText);
		*/
	}
	inputBox.focus();
}

function removeTask(taskElement, taskLi){
	taskElement.removeChild(taskLi);
	inputBoxElement.focus();
	inputBoxElement.value= "";
}