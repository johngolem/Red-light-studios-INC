function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    /*document.body.style.backgroundImage = "url('img_tree.png')";*/
}
let x = function (callback){
    console.log("do something");
    callback();
}

let y = function (){
    console.log ("This is an anonymous function")
}

x(y);