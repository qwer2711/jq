//요소추가하기

function newRegister() {

    var userName = document.querySelector("#userName");
    var newP = document.createElement("p"); //새로운 p요소 만들기(틀만들기)
    var newText = document.createTextNode(userName.value); //새로운 텍스트노드를 만드는 것 (내용만들기)
    newP.appendChild(newText); //p노드가 상위요소가 되고 text라는 하위요소를 연결한다.

    var delBtn = document.createElement("span"); //새로운 버튼추가
    var delText = document.createTextNode("X"); //새로운 텍스트 노드 추가
    delBtn.setAttribute("class","del"); //버튼에 class 속성 추가
    delBtn.appendChild(delText); //텍스트 노드가 버튼의 자식 요소와 연결됨
    newP.appendChild(delBtn); //delBtn을 p의 하위 요소로 만들기


    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP,nameList.childNodes[0]); //p요소를 #nameList 맨앞에 추가
    //nameList.appendChild(newP);//p노드가 #nameList의 하위 요소가 된다.
    userName.value = ""; //input 텍스트 필드 지우기



    //요소삭제하기
    var removeBtns = document.querySelectorAll(".del"); //span.del

    //for를 사용하는 이유는 모든 removeBtns을 전쟁터에 내보내기 위해서 준비시키는것
    for (var i = 0; i < removeBtns.length; i++){
        //removeBtns 병사들의 각각 버튼에 이벤트를 등록
        removeBtns[i].addEventListener("click",function(){
            //#nameList 찾아오기 span < p < #nameList
            
            //만일 병사가 클릭되면 그 병사의 부모의 부모 #nameList에 자식이 있으면
            //그 병사의 부모부모를 찾아서 그 자식 p태그를 삭제한다.
            if(this.parentNode.parentNode){
                //this.parentNode.parentNode = #nameList
                //this.parentNode = p
                //this = span
                
                this.parentNode.parentNode.removeChild(this.parentNode);//p태그를 삭제함
            }
        });
    }
}