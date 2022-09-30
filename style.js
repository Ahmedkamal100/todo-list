let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");

let noTasksMsg = document.querySelector(".no-tasks-message");

// Focus On Input Field
window.onload = function () {
    theInput.focus();
};

// Adding The Task
theAddButton.onclick = function () {

    // If Input is Empty
    if (theInput.value === '') {

        errorMessage.innerText = 'Please Enter Your Task';
    

    } else {

        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(noTasksMsg )) {

            // Remove No Tasks Message
            noTasksMsg.remove();
            

        }

        // Create Main Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");

        // Create The Main Span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class To Main Span
        mainSpan.className = 'task-box';

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);

        // Empty The Input
        theInput.value = '';

        // Focus On Field
        theInput.focus();

    
    }
};

// delet task 
document.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove();
    }

    if (e.target.classList.contains('task-box')) {

        // Toggle Class 'finished'
        e.target.classList.toggle("finished");

    }

  
})

