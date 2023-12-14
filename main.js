console.log("main.js");
function openai(){
 document.getElementById("drop").style.display="block";
  document.getElementById("plus").style.display="none";
    document.getElementById("plusp").style.display="block";

}
function openaip(){
 document.getElementById("drop").style.display="none";
  document.getElementById("plus").style.display="block";
    document.getElementById("plusp").style.display="none";

}


function site(){
  var site =document.getElementById("site").value;
  window.location.href= site;
}