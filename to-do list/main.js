const submit=document.getElementById('addbtn');
const deleteAll=document.getElementById('deletebtns');
const taskListElement=document.getElementById('task-list');

let taskList=[];

function renderTastList() {
    taskListElement.innerHTML='';
    taskList.forEach((task,index)=>{
        const listitem=document.createElement('li')
        listitem.innerHTML=`${task.task} - ${task.status} <button id="deletebtn" onclick="deleteTask(${index})">Delete</button>`;
        taskListElement.appendChild(listitem);
    });

    
}

submit.addEventListener('click',()=>{
    const taskInput=document.getElementById('todoinput');
    const taskStatus=document.getElementById('taskstatus');

    console.log(taskInput.value);
    console.log(taskStatus.value);

    taskList.unshift({task:taskInput.value,status:taskStatus.value});
    renderTastList();
    taskInput.value='';
    taskStatus.value='Pending';

})
deleteAll.addEventListener('click',()=>{
   const userconfirm= confirm('Do you want to Delete all Task !!!')
   if (userconfirm) {
    taskList=[];
    renderTastList();
   }
    
})

window.deleteTask = (index) => {
    const task = taskList[index];
     const userconfirm=confirm(`Do you want to Delete  "${task.task}" task ?`);
    if (userconfirm) {
        taskList.splice(index, 1);
        renderTastList();
    }
   
};





