
    let array1 = new Array();
    let age=[];
    function ins(){
        let n = document.getElementById("name").value
        let a = document.getElementById("age").value
        array1.push(n)
        age.push(a)
        
    }
    function del(){
        for(let i=0;i<=array1.length;i++){
            if(array1[i]==n){
                array1.splice(i,1)
                age.splice(i,1)
                break
            }
            else{
                continue
            }
        }
    }

    
    function view(){
        let table = `
        <table border="1">
          <tr><th>Name</th><th>Age</th></tr>`;
        for(let i=0;i<=array1.length;i++){
            
            table += `<tr><td>${array1[i]}</td><td>${age[i]}</td></tr>`;
    }
    table += '</table>';
    document.getElementById("res-table").innerHTML=""+table;
    }
