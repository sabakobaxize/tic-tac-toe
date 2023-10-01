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
  var player = 2;
  function funct1(){
    if(player == 1){
        player = 2
        print1.innerHTML = "მოთამაშე პირველის ჯერია"
    }
    else if( player == 2){
        player = 1
        print1.innerHTML = "მოთამაშე მეორის ჯერია"

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