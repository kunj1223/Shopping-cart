let num=1;
let k=0;


function hello() {
     var x=document.getElementById("item").value;
     var y=document.getElementById("price").value;
     k=k+parseInt(y); 
     document.getElementById("column").innerHTML+= num + "<br>";
     document.getElementById("thing").innerHTML+= x + "<br>";
     document.getElementById("money").innerHTML+=y + "<br>";
     document.getElementById("inctax").innerHTML= ((k*.13)+k);

     num++;
}



