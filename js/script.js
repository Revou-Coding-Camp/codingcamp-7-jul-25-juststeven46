function addTask(){
const task = document.getElementById("taskInput").value;
const date = document.getElementById("dateInput").value;
if (task == "") { 
    alert("Please add a to-do");
    return;
  }
  if (date == "") {
    alert("Please enter a date");
    return;
  }
  const tbody = document.getElementById("tbody");
  const row = document.getElementById("task_row");
  if (row.textContent == "No task found"){
      const tr = row.parentElement;
      tr.remove(); 
  }
  const tablerow = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent=date;
  const td2 = document.createElement("td");
  td2.textContent=task;
  const td3 = document.createElement("td");
  const selectStatus = document.createElement("select");
  selectStatus.innerHTML = `
    <option value="completed">completed</option>
    <option value="delayed">delayed</option>
    <option value="pending">pending</option>
  `;
  td3.appendChild(selectStatus);

  const td4 = document.createElement("td");
  const selectAction = document.createElement("select");
  selectAction.innerHTML = `
    <option value="Do it now">Do it now</option>
    <option value="Do a few parts">Do a few parts</option>
    <option value="Wait a few days">Wait a few days</option>
  `;
  td4.appendChild(selectAction);
  tablerow.appendChild(td1);
  tablerow.appendChild(td2);
  tablerow.appendChild(td3)
  tablerow.appendChild(td4)
  tbody.appendChild(tablerow);
  taskInput.value = "";
  dateInput.value = "";
}
getElementById("addButton").addEventListener("click", addTask);
    
  
// const input=document.querySelector("input")
// input.addEventListener("input", (e) => {
//     if (!e.target.checkValidity()) {
//         e.target.reportValidity();
//         "You must enter a text."
//     }
// })