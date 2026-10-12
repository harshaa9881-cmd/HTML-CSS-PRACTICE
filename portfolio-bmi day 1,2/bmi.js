function fun(){
    let h = document.getElementById("height").value
    let w = document.getElementById("weight").value

    h = h/100
    let Bmi = w/(h*h)
    
    document.getElementById("ans").innerHTML = "BMI is " + Bmi.toFixed(2);
}