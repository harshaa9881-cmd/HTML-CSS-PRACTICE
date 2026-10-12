function fun(){
    let m = new Map([["Apple",100],["Orange",100],["Pinapple",100],["Guava",100],["Grapes",100],["Kivi",100],["Papaya",100]])
    let A = document.getElementById("apple").value
    let O = document.getElementById("orange").value
    let Pi = document.getElementById("pinapple").value
    let G = document.getElementById("guava").value
    let Gr = document.getElementById("grapes").value
    let K = document.getElementById("kivi").value
    let P = document.getElementById("papaya").value
    let result= (A*(m.get("Apple"))) + (O*(m.get("Orange")))+ (Pi*(m.get("Pinapple")))+ (G*(m.get("Guava")))+ (Gr*(m.get("Grapes")))+ (K*(m.get("Kivi")))+(P*(m.get("Papaya")))
    document.getElementById("res").innerHTML = "Amount : " +result;
}