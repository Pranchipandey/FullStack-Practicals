 var i = 0;
    function buttonClick2() {
        document.getElementById('inc').value = ++i;
        document.getElementById('button2').style.backgroundColor="red";
    }
    function buttonClick1(){
           document.getElementById('inc').value = --i;
    }
    function mouseOver(){
         document.getElementById('button2').style.backgroundColor="red";
          document.getElementById('inc').style.color = "blue";
            document.getElementById('inc').style.fontFamily = "cursive";

         
    }
    function mouseLeave(){
         document.getElementById('button2').style.backgroundColor="green";
          document.getElementById('inc').style.color = "black";
            document.getElementById('inc').style.fontFamily = "timesNewRoman";
    
    }
     function mouseOver1(){
         
          document.getElementById('button1').style.backgroundColor="red";
          document.getElementById('inc').style.color = "blue";
            document.getElementById('inc').style.fontFamily = "cursive";
           
     }
      function mouseLeave1(){
         
          document.getElementById('button1').style.backgroundColor="green";
           
            document.getElementById('inc').style.color = "black";
            document.getElementById('inc').style.fontFamily = "timesNewRoman";
      }