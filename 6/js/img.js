 
        $(document).ready(function(){
            init();
            initEvent();
        });

        var $images = null; //전역변수선언 초기화

        function init(){
            
            //배열로 이미지들을 받고 있다.
            $images = $("#container1 img");

        }

        function initEvent() {
            $("#btnStart").click(function(){
                showImage();
            });

        }

        function showImage(){

        //이미지 갯수구하기
        var length = $images.length;

        //이미지 나열하기
        for(var i=0; i<length; i++){
            //eq()를 이용하여 인덱스에 맞는 이미지를 저장하고 있다.
            var $img =$images.eq(i);
            
            //위치값 구하기
            var x = 100 + ((i % 3) * 200); //100,300,500반복
            var y = 100 + (parseInt(i/3) * 200); //계속100반복

            //이미지의 위치를 설정하는 부분
            $img.css({
                left : x,
                top : y
            });

        }

        }