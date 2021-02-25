const body = document.querySelector("body");

const IMG_number = 6;   //배경개수

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/landscape${imgNumber + 1}.jpg`;
    // +1을 해주는 이유는 Math.random()함수가 0부터 주기 때문에..

    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){   //랜덤숫자를 반환하는 함수
    const number = Math.floor(Math.random() * IMG_number);
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();