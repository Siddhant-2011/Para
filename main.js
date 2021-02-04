var student_para=[];
function submit(){
  for(var i=1;i<=4;i++){
 var para=document.getElementById("paraput"+i).value;
 student_para.push(para);


  }
document.getElementById("p1").innerHTML=student_para;




}

var student_para=[];
function submit2(){
  for(var i=1;i<=4;i++){
 var para=document.getElementById("paraput"+i).value;
 student_para.push(para);


  }

var uncomm=student_para.join(" ");
document.getElementById("p2").innerHTML=uncomm;


}

