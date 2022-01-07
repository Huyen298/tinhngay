function kiemtra() {
    let traloi = document.getElementById("answer").innerText;
    let result="";

    if (traloi== “ECMAScript”){
        result= "right";
    }
    else{
        result= "You don't know? ECMAScript!"
    }
    alert(result)
    
}