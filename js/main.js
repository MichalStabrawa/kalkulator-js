//function buttonCalc(){
 //   var btnValue=parseInt(document.getElementById(id));
//}

//liczna 1
function wynik(){
    
    var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn1').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn1').addEventListener('click',wynik);


//liczba 2
function wynik2(){
    
      var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn2').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn2').addEventListener('click',wynik2);


//liczna 3
function wynik3(){
    
    var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn3').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn3').addEventListener('click',wynik3);



//liczna 4
function wynik4(){
    
    var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn4').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn4').addEventListener('click',wynik4);





//liczna 5
function wynik5(){
    
    var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn5').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn5').addEventListener('click',wynik5);


//liczna 6
function wynik6(){
    
    var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn6').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn6').addEventListener('click',wynik6);



//liczna 7
function wynik7(){
    
    var inputText=parseInt(document.getElementById('wynik').value);
   
    
    var button1=parseInt(document.getElementById('btn7').value);
    var a=inputText*10 + button1;
    document.getElementById('wynik').value=a;
    
    
}

document.getElementById('btn7').addEventListener('click',wynik7);


// ++++++++++++++++++++++++++++++++++++++++++++++++
function dodaj1(){
     
  
    
var a=document.getElementById('wynik').value;
   var b=document.getElementById('ekran').value;
    
    
    
    
      document.getElementById('wynik').value=0;
    
    document.getElementById('ekran').value=
    parseInt(b)+parseInt(a);
    
    
}
document.getElementById('btnAdd').addEventListener('click',dodaj1)


//----------------- ---"minus"
function odejmij1(){
     
  
    
var a=document.getElementById('wynik').value;
   var b=document.getElementById('ekran').value;
    
    
    
    
      document.getElementById('wynik').value=0;
   
    document.getElementById('ekran').value=
    parseInt(b)-parseInt(a);
    
    
}
document.getElementById('btnMin').addEventListener('click',odejmij1)


//mnozenie
function mnoz1(){
    var a=parseInt(document.getElementById('wynik').value);
    

    var b=document.getElementById('ekran').value=a;
 
    
    
    
    var d=document.getElementById('wynik').value="0";
    
   var c=document.getElementById('wynik').value;
    
   

 
    
   
    
   
    
}
document.getElementById('btnMulti').addEventListener('click',mnoz1);
//--------------- C---------------------------------CLEAR------------------------------------------------------------------------------------------------------------------------------------------------------
function clear1(){
document.getElementById('wynik').value=0;
    document.getElementById('ekran').value=null;
   
    
}
document.getElementById('btnClear').addEventListener('click',clear1);



/*-----------------------EKRAN1----------------------------------*/

function ekran1(){
       var inputText=document.getElementById('wynik').value;
   var b= document.getElementById('ekran').value=inputText;
    
}

document.getElementById('btnSum').addEventListener('click',ekran1);








//////////////wyciaganie wartosci i id 
///////////////////////////////////////////////////////////////
var but1Ele=document.getElementById('but1');
var but2Ele=document.getElementById('but2');
var but3Ele=document.getElementById('but3');



function przelicz(aaaa){
    
    var elemenId=aaaa.target.id;
    var elemenVal=aaaa.target.value;
    document.getElementById('show').value=elemenVal;
}

but1Ele.addEventListener('click',przelicz);
but2Ele.addEventListener('click',przelicz);
but3Ele.addEventListener('click',przelicz);
/////////////////////////////////////////////////////////////////////////////////////////////////////

function tab(){
    
    var osoby=['Michal','Anka','Zuza','Bunia','era'];


var x=0;

while(x<osoby.length){
    console.log(x+":"+osoby[x]);
    x++;
};
    
  
    
    
}

tab();




