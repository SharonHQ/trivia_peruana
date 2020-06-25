let right=0;
let wrong=0;
document.getElementById('question1').style.display='block';
//Esta función muestra la pregunta 2
function question2(a){
    if (a==='right') {
      right++;
    }else{
      wrong++;
    }
    document.getElementById('question2').style.display='block';
    document.getElementById('question1').style.display='none';
}
//Esta función muestra la pregunta 3
function question3(b){
  if (b==='right') {
    right++;
  }else {
    wrong++;
  }
    document.getElementById('question2').style.display='none';
    document.getElementById('question3').style.display='block';
}
//Esta función muestra los resultados
function seeResult(c){
  if (c==='right') {
    right++;
  }else {
    wrong++;
  }
  if (right<=wrong) {
    document.getElementById('text').innerHTML=("Sigue practicando :)");
  }else {
    document.getElementById('text').innerHTML=("Eres muy buen@ en esta trivia");
  }
    document.getElementById('result').style.display='block';
    document.getElementById('question3').style.display='none';
    document.getElementById('right').innerHTML=right;
    document.getElementById('wrong').innerHTML=wrong;
}
