var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;

  btn1 = document.getElementById('btn1');
  btn2 = document.getElementById('btn2');
  btn3 = document.getElementById('btn3');
  btn4 = document.getElementById('btn4');
  btn5 = document.getElementById('btn5');
  btn6 = document.getElementById('btn6');
  btn7 = document.getElementById('btn7');
  btn8 = document.getElementById('btn8');
  btn9 = document.getElementById('btn9');
var print1 = document.getElementById('print1');
  var player = 1;
  function funct1(){
    //checking wich player is playing
    if(player == 1){
        player = 2
        print1.innerHTML = "მოთამაშე პირველის ჯერია"
    }
    else if( player == 2){
        player = 1
        print1.innerHTML = "მოთამაშე მეორის ჯერია"

    }
    //checking if anyone is winnings
    if((bt1 == "X" && bt2 == "X" && bt3 == "X")||
    (bt1 == "O" && bt2 == "O" && bt3 == "O"))
     {
       btn1.style.color = "red";
       btn2.style.color = "red";
       btn3.style.color = "red";

       btn1.disabled = true
       btn2.disabled = true
       btn3.disabled = true
       btn4.disabled = true
       btn5.disabled = true
       btn6.disabled = true
       btn7.disabled = true
       btn8.disabled = true
       btn9.disabled = true
     }
     else if(( bt1 == "X" && bt4 == "X" && bt7 == "X")||
     (bt1 == "O" && bt4 == "O" && bt7 == "O"))
      {
        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";
 
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
      }
      else if(( bt1 == "X" && bt5 == "X" && bt9 == "X")||
      (bt1 == "O" && bt5 == "O" && bt9 == "O"))
       {
         btn1.style.color = "red";
         btn5.style.color = "red";
         btn9.style.color = "red";
  
         btn1.disabled = true
         btn2.disabled = true
         btn3.disabled = true
         btn4.disabled = true
         btn5.disabled = true
         btn6.disabled = true
         btn7.disabled = true
         btn8.disabled = true
         btn9.disabled = true
       }
       else if(( bt2 == "X" && bt5 == "X" && bt8 == "X")||
       (bt2 == "O" && bt5 == "O" && bt8 == "O"))
        {
          btn2.style.color = "red";
          btn5.style.color = "red";
          btn8.style.color = "red";
   
          btn1.disabled = true
          btn2.disabled = true
          btn3.disabled = true
          btn4.disabled = true
          btn5.disabled = true
          btn6.disabled = true
          btn7.disabled = true
          btn8.disabled = true
          btn9.disabled = true
        }
        else if(( bt3 == "X" && bt5 == "X" && bt7 == "X")||
       (bt3 == "O" && bt5 == "O" && bt7 == "O"))
        {
          btn3.style.color = "red";
          btn5.style.color = "red";
          btn7.style.color = "red";
   
          btn1.disabled = true
          btn2.disabled = true
          btn3.disabled = true
          btn4.disabled = true
          btn5.disabled = true
          btn6.disabled = true
          btn7.disabled = true
          btn8.disabled = true
          btn9.disabled = true
        }
        else if(( bt3 == "X" && bt6 == "X" && bt9 == "X")||
        (bt3 == "O" && bt6 == "O" && bt9 == "O"))
         {
           btn3.style.color = "red";
           btn6.style.color = "red";
           btn9.style.color = "red";
    
           btn1.disabled = true
           btn2.disabled = true
           btn3.disabled = true
           btn4.disabled = true
           btn5.disabled = true
           btn6.disabled = true
           btn7.disabled = true
           btn8.disabled = true
           btn9.disabled = true
         }
         else if(( bt4 == "X" && bt5 == "X" && bt6 == "X")||
         (bt4 == "O" && bt5 == "O" && bt6 == "O"))
          {
            btn4.style.color = "red";
            btn5.style.color = "red";
            btn6.style.color = "red";
     
            btn1.disabled = true
            btn2.disabled = true
            btn3.disabled = true
            btn4.disabled = true
            btn5.disabled = true
            btn6.disabled = true
            btn7.disabled = true
            btn8.disabled = true
            btn9.disabled = true
          }
          else if(( bt7 == "X" && bt8 == "X" && bt9 == "X")||
          (bt7 == "O" && bt8 == "O" && bt9 == "O"))
           {
             btn7.style.color = "red";
             btn8.style.color = "red";
             btn9.style.color = "red";
      
             btn1.disabled = true
             btn2.disabled = true
             btn3.disabled = true
             btn4.disabled = true
             btn5.disabled = true
             btn6.disabled = true
             btn7.disabled = true
             btn8.disabled = true
             btn9.disabled = true
           }
           //checking if its 
           else if( bt1 != '' && bt2 != '' &&
           bt3 != '' && bt4 != '' &&
           bt5 != '' && bt6 != '' &&
           bt7 != '' && bt8 != '' &&
           bt9 != ''  ){
            print1.innerHTML = "თქვენ ითამაშეთ ფრე"
           }
  }

  var bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9 = '';

   function bttn1(){
        if(player == 1){
            btn1.value = "X";
            btn1.disabled = true;
            bt1 = "X"
        }
        else if(player == 2){
            btn1.value = "O";
            btn1.disabled = true;
            bt1 = "O"
        }
   }
   
   function bttn2(){
    if(player == 1){
        btn2.value = "X";
        btn2.disabled = true;
        bt2 = "X"
    }
    else if(player == 2){
        btn2.value = "O";
        btn2.disabled = true;
        bt2 = "O"
    }
    
   }

   
   function bttn3(){
    if(player == 1){
        btn3.value = "X";
        btn3.disabled = true;
        bt3 = "X"
    }
    else if(player == 2){
        btn3.value = "O";
        btn3.disabled = true;
        bt3 = "O"
    }
    
   }
   
   function bttn4(){
    if(player == 1){
        btn4.value = "X";
        btn4.disabled = true;
        bt4 = "X"
    }
    else if(player == 2){
        btn4.value = "O";
        btn4.disabled = true;
        bt4 = "O"
    }
   }
   
   function bttn5(){
    if(player == 1){
        btn5.value = "X";
        btn5.disabled = true;
        bt5 = "X"
    }
    else if(player == 2){
        btn5.value = "O";
        btn5.disabled = true;
        bt5 = "O"
    }
   }
   
   function bttn6(){
    if(player == 1){
        btn6.value = "X";
        btn6.disabled = true;
        bt6 = "X"
    }
    else if(player == 2){
        btn6.value = "O";
        btn6.disabled = true;
        bt6 = "O"
    }
   }

   
   function bttn7(){
    if(player == 1){
        btn7.value = "X";
        btn7.disabled = true;
        bt7 = "X"
    }
    else if(player == 2){
        btn7.value = "O";
        btn7.disabled = true;
        bt7 = "O"
    }
   }
   
   function bttn8(){
    if(player == 1){
        btn8.value = "X";
        btn8.disabled = true;
        bt8 = "X"
    }
    else if(player == 2){
        btn8.value = "O";
        btn8.disabled = true;
        bt8 = "O"
    }
   }

   
   function bttn9(){
    if(player == 1){
        btn9.value = "X";
        btn9.disabled = true;
        bt9 = "X"
    }
    else if(player == 2){
        btn9.value = "O";
        btn9.disabled = true;
        bt9 = "O"
    }
   }