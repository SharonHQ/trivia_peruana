function saveName(){
localStorage.clear();
const name=document.getElementById('name').value;
if(name==''){
    alert("ingresa tu nombre");
}else{
localStorage.setItem('name', name);
window.location="category.html";
return false;
}
}
