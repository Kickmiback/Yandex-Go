var index = 0;
var links = new Array (
       "img/man1.png", 
       "img/party1.png", 
       "img/woman1.png",
       "img/bag1.png"
); 

function slide(v) {
 var element = document.getElementById("imgs");
 index += 1 * v;

 if(index > links.length - 1) index = 0;
 else if(index < 0) index = links.length - 1;

 
//  if(index > links.length - 1) index = 4;
//  else if(index < 1) index = links.length - 4;



 element.src = links[index];
}

