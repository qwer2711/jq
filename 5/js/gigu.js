
        //전역변수로 선언
        var $gigu = null;

        $(document).ready(function(){

            initialize();
            event_gigu();
            
        });

        //전역변수를 초기화
        function initialize(){
            //지구본 찾기 (전역변수 함수안에서 수정)
            $gigu = $("#gigu");

        }

        //이벤트와 관련된 내용을 함수로 등록
        function event_gigu(){
            
            //버튼에 이벤트 등록
            $("#btnStart").click(function(){
                //지구본 움직이기
                //지구본 위치값 구하기

                var x = parseInt($("#txtX").val());
                var y = parseInt($("#txtY").val());
                moveGigu(x,y);


            });
        }

        //지구본의 움직이는 기능을 구현해놓은 함수
        function moveGigu(x,y){
            
            if((x >= 0 && x <= 520) && (y >= 0 && y <= 420)){
                    $gigu.css({left : x , top : y});
                }
                else{
                    alert("입력된 값 범위를 벗어났습니다.")
                }
        }
