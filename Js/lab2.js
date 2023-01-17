
slidIndex = 0;
fun1();



function fun1() {
    count = document.getElementsByClassName("slid");

    for (i = 0; i < count.length; i++) {
        count[i].style.opacity ="0";
    }
    slidIndex++;
    if (slidIndex > count.length) {
        slidIndex = 1;
    }
    count[slidIndex - 1].style.opacity ="1";
    setTimeout(fun1, 5000);
}

    $(document).ready(
        function () {
            $(".men-icon").click(
                function () {
                    $(".men-res").toggle(1000);
                }
            )
        }
    );

   /* function fun2() {
        
    
        boxCount = document.getElementsByClassName("box");
        
       for(i = 0; i < boxCount.length; i++){
            boxCount[i].style.width ="0";
       }
       slidIndex++;
       if(slidIndex > boxCount.length){
           slidIndex = 2;
       }
       boxCount[slidIndex - 1].style.width ="47%";
       boxCount[slidIndex - 2].style.width ="47%";
       
       
       setTimeout(fun2, 1000);
    }        
        
   fun2();
    
*/