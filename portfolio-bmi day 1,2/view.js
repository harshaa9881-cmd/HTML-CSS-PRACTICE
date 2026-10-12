function view(){

let n = document.getElementById("myname").value
let a = document.getElementById("myage").value
let set1 = new Set()
set1.add(n)
set1.add(a)
document.getElementById("res").innerHTML= "view : " + set1;

}   