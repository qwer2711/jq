function newRegister() {

    var userName = document.querySelector("#userName");
    var newP = document.createElement("p"); //새로운 p요소 만들기(틀만들기)
    var text = document.createTextNode(userName.value); //새로운 텍스트노드를 만드는 것 (내용만들기)
    newP.appendChild(text); //p노드가 상위요소가 되고 text라는 하위요소를 연결한다.

    var nameList = document.querySelector("#nameList");
    nameList.appendChild(newP);//p노드가 #nameList의 하위 요소가 된다.
    userName.value = ""; //input 텍스트 필드 지우기
}