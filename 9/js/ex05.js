//요소선택 두가지 버전
//getElementId() : id선택자가 있는 웹 요소에 접근할때 사용
//getElementId() : DOM노드 중에서 요소 노드까지만 접근 가능

//querySelctor() : 노드 요소뿐만 아니라 텍스트 노트와 속성 노드까지 접근가능

var pic = document.querySelector("#pic");
//var pic1 = document.getElementById("pic");

//id선택자인 pic에게 마우스가 올라가면 changePic()를 호출하고
//false는 버블링을 선택하지 않겠다는 의미
//버블링이란 이벤트가 하위 요소에서 발생하면 상위요소까지
//전파되는 상태를 버블링이라고 한다.
pic.addEventListener("mouseover",changePic,false);
pic.addEventListener("mouseout",originPic,false);

function changePic(){
    pic.src = "images/boy.png"
    //pic1.src = "images/boy.png"
}

function originPic(){
    pic.src = "images/girl.png"
    //pic1.src = "images/girl.png"
}

