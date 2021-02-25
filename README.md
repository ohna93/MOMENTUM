# [momentum]

## <a target="_blank" href="https://ohna93.github.io/MOMENTUM">▶momentum page 바로가기</a>

1️⃣ 시계&emsp;[▼ clock.js 파일](clock.js)
> -  시간 가져오는 함수를 따로 만들어주고, 그함수를 init()함수에서 부르기.  
> -  `setInterval(함수이름,1000)`로 1초마다 시간이 바뀌도록 해줌.  
> -  시간이 표시되는 곳에서 숫자를 두자리수로 맞춰주기 위해 조건문을 사용하여 10미만의 숫자이면 앞자리에 0을 붙여주도록 삼항연산자를 사용함  
 
2️⃣ 이름을 입력받아 나타내기&emsp;[▼ greeting.js 파일](greeting.js)
> - init()함수에서 loadName(); 을 부른다.  
> - loadName()에서 이름이 있을 때와 없을 때를 판단하여 코드를 짬.  
> - 결론적으로는 paintGreeting() 함수에 도달 하도록 완성.  
> - 이름이 있는것은 컴퓨터에 저장되었다는 뜻 : 그러기위해 이름을 input(submit)하는 함수에서 localStorage를 사용.  

3️⃣ TO DO LIST&emsp;[▼ todo.js 파일](todo.js)
> - 마찬가지로 toDos에 내용이 있으면 localStorage에서 가져와서 보여주고 , 없으면 form에 작성하고 submit.  
> - TO DO LIST 에서는 submit하면 createElement를 이용하여 li를 만들어주고, li가 ul의 자식노드로 추가됨.  
> - li안에는 삭제버튼 & submit한 내용 → 이제 이걸 localStorage에 저장하고 → 삭제버튼을 누르면 누른버튼의 li 전체가 보여지지 않도록 또, > localStorage에서도 삭제되도록 짜보자  : li가 여러개니까 li를 array로 만들어 줘야 함 → 빈 배열을 하나 만들어두고 element를 생성해서 > 배열에 push해줌  
> - 이렇게 만든 배열을 localStorage에 저장. → 새로고침해도 todo목록이 저장되어있어서 보여짐.  
> - 단, localStorage에는 자바스크립트의 data를 저장할 수 가 없다 오직 Stirng만 저장가능 : JSON.stringify()사용  
> - JSON.stringify()는 자바스크립트의 Object를 String으로 바꿔준다  
> - ★JSON = JavaScript Object Notation : 데이터를 전달할 때 자바스크립트가 그걸 다룰 수 있도록 Object로 바꿔주는 기능★  
> - 버튼누르면 하나씩 삭제되도록해보자  
> - 해야할 두가지는 localStorage에서도 삭제되고 HTML상에서도 삭제  
> - array.filter(function())함수는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만듬    

4️⃣ 랜덤 배경 이미지&emsp;[▼ bg.js 파일](bg.js)
> - 다운받은사진들은 MOMENTUM0105파일에 images파일을 만들어서 그 안에 넣어둠  
> - 자바스크립트에서 랜덤번호 생성하는 방법  
> - Math,random() : 1~6사이의 숫자를 랜덤으로 원한다고 하면, `Math.random()*6`  
> - 소수점을 떼어내고 정수만 원한다고 하면, `Math.floor()`    

5️⃣ 위치와 날씨&emsp;[▼ weather.js 파일](weather.js)
> - HTML에선 날씨정보가 들어갈 틀 만들어줌.  
> - 유저의 Location좌표정보를 읽어서 그 정보를 저장하고,  만약 이미 저장한값이 없다면 요청하고 저장값이 있다면 아무것도 안함.  
> - 위도와 경도 읽어오기  
> - 날씨를 불러오는 함수를 만들어서, 위도경도를 읽어오는걸 성공했을 시에 이 함수를 불러옴.  
> - Weather API 사이트에 회원가입하고 API key 복사  
> - 날씨정보 By geographic coordinates 의 API call을 복사  
> 
> - Javascript는 웹사이트로 Request를 보내고 응답을 통해서 데이터를 얻어올 수 있는데, 가져온 데이터를 Refresh 없이도 나의 웹사이트에   적용시킬 수 있기 때문에 새로고침하지 않아도 실시간으로 데이터가 오는것을 확인할 수 있다. 왜냐하면 Javascript가 보이지 않는 곳에서   계속 데이터를 가져오고 있기 때문.즉, 새로고침없이 데이터를 가져올 것이다  
> 
> - 데이터를 얻는 방법은 fetch( 가져올 데이터 ) : 가져올 format같은건 여기 URL에 &로 이어서 붙임.  
> - network패널은 우리가 request한 내용을 보여주는거  


![바닐라JS로 크롬앱 만들기](screenshot.png)
![바닐라JS로 크롬앱 만들기](screenshot2.png)
