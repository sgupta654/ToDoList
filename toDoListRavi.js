
	//Creates an element of the "ADD" button and adds an event listener on the button.
	addButtonElement = document.getElementById("addButton");
	addButtonElement.addEventListener("click", addButtonFunc);
    

     //Creates an element of the main input box.
	 var inputBoxElement = document.getElementById("inputBox");

	 /*When the user presses and releases the enter key within the main input box,
	   the 'addButtonFunc()' will execute.  This serves the same purpose as the 
	   'ADD' button.
     */
	 inputBoxElement.onkeyup = function(event){
	 	if(event.which === 13){
    	    addButtonFunc();
    	}
    };
     
     //Gives to the main input box.
	 inputBoxElement.focus();	
    
	 var counter = 0;
 
 	//Function that will create and add new tasks to the list.
	function addButtonFunc(){ 
        
        	
		//get the input from the input box
	    var inputText= inputBoxElement.value;
		
		
		if(inputText=== "" ){
			alert("No input");
		}
		else{

		   //"element" will refer to the div with the id "sDiv"
           var element = document.getElementById("sDiv");
           var textChanged = false;
		   var compareText = inputText;

			
			//var inputSpan = document.createElement("span");
			//inputSpan.innerText = inputText;

			//a symbol to be placed in between "edit and "delete"
			var symb= document.createTextNode("|");

			var textDiv = document.createElement("span");
			var buttonDiv = document.createElement("span");

			//checkbox 
			var checkBoxElement = document.createElement("INPUT");
			
			//edit and delete 
			var editButton= document.createElement("input");
			var alternateEditButton= document.createElement("input");
			var deleteButton= document.createElement("input");
            
            //creates an "li"
			var liElement = document.createElement("li");
            

			var listBox = document.createElement("input");
            //listBox.className = "taskReadOnly";
            listBox.value = inputText;
			listBox.className ="taskReadOnly";
			
			
			
			//make checkBoxElement an input of type "checkbox"
			checkBoxElement.type = "checkbox";
            checkBoxElement.addEventListener("click", function(){

				crossedOut(listBox, checkBoxElement);
			} );

			/*set the type of input to button and the values
			  to "edit" and "delete".*/
			editButton.type = "button";
			editButton.value = "edit";

            alternateEditButton.type = "button";
            alternateEditButton.value = "edit2";
            alternateEditButton.style.display= "none";
			
			deleteButton.type = "button";
			deleteButton.value = "delete";
			
			editButton.className ="buttonStyle";
            alternateEditButton.className ="buttonStyle";
            deleteButton.className ="buttonStyle";
            textDiv.className = "taskTextDiv";
            buttonDiv.className = "taskButtonDiv";
			
			/*
			insert all the elements in the line:
			[checkbox] [input text] [edit button] [symbol] [delete button] [br]
			*/
			element.appendChild(liElement);
			liElement.appendChild(textDiv);
			textDiv.appendChild(checkBoxElement);
			textDiv.appendChild(listBox);
			//textDiv.appendChild(inputSpan);
			liElement.appendChild(buttonDiv);
			buttonDiv.appendChild(editButton);
			buttonDiv.appendChild(alternateEditButton);
			buttonDiv.appendChild(symb);
		    buttonDiv.appendChild(deleteButton);
            //myFunc(element);
            
            inputBoxElement.value= "";

			deleteButton.addEventListener("click", function(){

				removeTask(element, liElement);
			} );

			editButton.addEventListener("click", function(){

				changeDisplays(listBox, editButton, alternateEditButton, checkBoxElement, textChanged,compareText);

			})
            
		}
		inputBoxElement.focus();

		}
		
		
		function removeTask(taskElement, taskLi){
			//thn.style.display ="none";
			taskElement.removeChild(taskLi);
			inputBoxElement.focus();
			inputBoxElement.value= "";
	    }

	    function changeDisplays(taskBox, mainEditButton, altEditButton, CheckBx, txtChanged, compareTxt){
		    
	    	//inputTaskText.style.display = "none";
			taskBox.className = "taskTextDiv";
	    	//taskBox.style.display = "inline"
	    	mainEditButton.style.display = "none";
	    	altEditButton.style.display = "inline";
	    	taskBox.focus();
            
            taskBox.onkeyup = function(event){
			     
	 	      	 if(event.which== 13){
				    if(compareTxt != (taskBox.value))
						txtChanged = true;
    	      		editTask(taskBox, compareTxt, mainEditButton, altEditButton, CheckBx, txtChanged);
    		      }
   			};
	    	altEditButton.addEventListener("click", function(){
				   if(compareTxt != (taskBox.value))
						txtChanged = true;
	    			editTask(taskBox, compareTxt, mainEditButton, altEditButton, CheckBx, txtChanged);

	    	});


	    }

	    function editTask(taskBox2, cmprTxt, mainEditButton2, altEditButton2, CheckBx2, changedText){
             
             
			 if(changedText){
			 	
			    CheckBx2.checked = false;
			    taskBox2.className = "taskReadOnly";
			    changedText= false;
			    cmprTxt = taskBox2.value;

			 }
			 else{
				
				crossedOut(taskBox2, CheckBx2)
			}
			
			 /*
		    if(textChanged){
			   CheckBx2.checked = false;
			   taskBox2.className = "taskReadOnly";
			}
				
	    	if(!CheckBx2.checked){
				taskBox2.className = "taskReadOnly";
			}
			else 
				taskBox2.className = "checkedStyle";
			//inputTaskText2.innerText = taskBox2.value;
			
			//if()
            
			textChanged = false;*/
	    	//inputTaskText2.style.display = "inline";
	    	//taskBox2.style.display = "none"
	    	mainEditButton2.style.display = "inline";
	    	altEditButton2.style.display = "none";
			
			



	    }


	    function crossedOut(inputStyle, chkBox){
         if(chkBox.checked){
  		 	inputStyle.className ="checkedStyle";
  		 }
  		 else{
  		 	inputStyle.className = "taskReadOnly";
         }


	    }