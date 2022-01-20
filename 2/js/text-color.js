
//heading이라는 변수 선언하고 h1태그를 저장하였다.
var heading = document.querySelector("#heading");
//h1태그를 클릭하면 글자색을 red로 설정한다.
heading.onclick = function(){
    heading.style.color = "red";
}