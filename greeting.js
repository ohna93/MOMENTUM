const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting  = document.querySelector(".js-greetings")

const USER_LS = "currentUser"
const SHOWING_CN = "showing" //form과 greeting 기본적으로 display:none 으로 해놓고,
//필요할 때만 보이게 하기위해서 추가하는 클래스

//마지막으로 이름을 저장하기 위한 함수를 만들어 보자
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    //submit하면 페이지를 새로고침하는 default이벤트를 막고싶음.
    event.preventDefault(); //즉, 기본동작을 막음.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text} !`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //유저가 없을 때
        askForName();
    }else{
        //유저가 있을 때
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();