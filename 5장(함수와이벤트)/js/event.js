
        //---------------------제이쿼리 사용함
       
        //상세설명을 여는 함수
        function showDetail(){
            $("#desc").css("display","block");
            $("#open").css("display","none");
        };

        
        //상세설명을 닫는 함수
        function hideDetail(){
            $("#desc").css("display","none");
            $("#open").css("display","block");
        }; 


        //-------------------제이쿼리 사용안함

        /* function showDetail(){
            document.querySelector("#desc").style.display = "block";
            document.querySelector("#open").style.display = "none"
        }

        function hideDetail(){
            document.querySelector("#desc").style.display = "none";
            document.querySelector("#open").style.display = "block"
        }
 */