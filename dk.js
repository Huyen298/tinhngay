function gui() {
    let answer = document.getElementById("answer").innerText;
    let result="";

    if (answer == “ECMAScript”){
        result= "right";
    }
    else{
        result= "You don't know? ECMAScript!"
    }
    alert(result)
    
}