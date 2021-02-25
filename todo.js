const toDoForm  = document.querySelector(".js-toDoForm");
const toDoInput  = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const padding = "padding";

const TODOS_LS = "toDos";   //localStorage의 key값

let toDos = []; //li를 생성했을 때 이 배열에 추가되도록
//빈 배열을 하나 만들어줌

function deleteToDo(event){ 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);//여기까지하면 버튼을 눌렀을 때 HTML상에서 사라짐.
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //이런 조건의 새 배열을 반환
    });
    toDos = cleanToDos; //헌 배열을 새 배열로 바꿔줌!
    saveToDos();//이제 localStorage에서도 바뀐 새 배열이 저장됨.
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))//localStorage에 배열로 저장.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    span.classList.add(padding);
    li.appendChild(delBtn);     //delBtn과 span을 li안에 넣는다
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);   //li 를 ul에 넣는다
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj); //배열에 넣기
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //내용이 있을 때
        const parsedToDos = JSON.parse(loadedToDos);  //가져온 내용을 Object로 변환.
        //그러므로 parsedToDos는 배열
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
    //toDoForm창은 항상 보여질 것이기 때문에 else구문은 필요없음.
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();