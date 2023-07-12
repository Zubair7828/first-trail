function AppMessages(){
    var val=document.getElementById("val");
    var p=document.createElement("p");
    var textnode=document.createTextNode(val.value);
    p.appendChild(textnode);
    var messages=document.getElementById("messages");
    messages.appendChild(p);
    val.value = "";

}