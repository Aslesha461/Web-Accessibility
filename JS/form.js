function check(){
  var name=document.forms["myForm"]["name"].value;
  var email=document.forms["myForm"]["email"].value;
  var message=document.forms["myForm"]["message"].value;
  if((name&&email&&message)!=null){
  alert("Thanks for contacting");
  }
  return true;
}
