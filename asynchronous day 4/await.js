async function func(){
    let res=await fetch('info.txt')
    let text=await res.text()
    return text
}
function display(text){
    console.log(text)
}
func().then(function(text) {
  display(text);
  document.getElementById("resp").innerHTML = " " + text;
});
