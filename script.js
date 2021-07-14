function userClick(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
   

    if(isNaN(n1) || isNaN(n2)){
        alert("Please enter numbers");
    }else{
        const sum = n1 + n2;
        document.getElementById("sum").innerHTML = "Sum: " + sum;

    }
}







 