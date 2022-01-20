//큰 이미지 변경

var bigPic = document.querySelector("#cup"); //큰이미지

var smallPic = document.querySelectorAll(".small"); //작은이미지 (배열 = 노드리스트)

for(var i=0; i < smallPic.length; i++){
    //작은 이미지 노드리스트를 클릭하면 changePic()가 호출 된다.
    smallPic[i].addEventListener("click",changePic);
}

function changePic(){
    //click이벤트가 발생한 대상(this)의 src 속성을 newPic에 저장
    var newPic = this.src;

    //newPic의 값을 큰 이미지의 src속성으로 대입이 되어서 큰 이미지로 나타남
    bigPic.setAttribute("src" , newPic);
    //또는 bigPic.src = newPic;
    
}

//상세설명 보기 / 닫기

var view = document.querySelector("#view");
var isOpen = false;

view.addEventListener("click",txtveiw);

function txtveiw() {
    //상세정보가 감추어져있다면 
    if(isOpen == false){
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세설명닫기"; //내용수정
        isOpen = true;
    }
    //감추어지지않았다면
    else {
        //상세정보 감추기
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세설명보기"; //내용수정
        isOpen = false;
    }
};