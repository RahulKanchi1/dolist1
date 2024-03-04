const textin = document.getElementById('inputer');
const list = document.getElementById('Task');

function createtask() {
    if (textin.value.trim() === '') {
        alert("Enter some task");
    } else {
        let li = document.createElement('li');
        li.textContent = textin.value;

        // Create a close button span
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        span.classList.add("close");
        
        // Append the close button to the task item
        li.appendChild(span);

        list.appendChild(li);
    }
    textin.value = "";
}

list.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('close')) {
        event.target.parentElement.remove();
        savedata(); // Save data when a task is removed
    } else if (event.target.tagName === "LI") { // Corrected tagName
        event.target.classList.toggle("checked");
        savedata(); // Save data when a task is checked/unchecked
    }
}, false);

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}
