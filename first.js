let todolist =[{
  item:'buy milk',
  duedate:'4/10/2020'
}];
displayitems();
function addtodo(){
let inputelement=document.querySelector('#todoinput');
  let dateelement=document.querySelector('#todo-date');
 let todoitem = inputelement.value;
 let tododate= dateelement.value;
todolist.push({item: todoitem , duedate:tododate});
inputelement.value ='';
dateelement.value='';
displayitems();
}

function displayitems(){
  let containerelements =document.querySelector('.todo-container');

  let newhtml='';
  for(let i=0;i<todolist.length;i++){
    let {item,duedate}=todolist[i];
    newhtml+=` 
    <span>${item}</span>
    <span>${duedate}</span>
   <button class="delbtn" onclick="todolist.splice(${i},1);displayitems();">Delete</button>
  
    `
  }
    containerelements.innerHTML=newhtml; 
}
