// there are two types of scope local and global

var nameg = "Global scope";
function myFunc(){
    var name = "local Scope";
    //only run inner this function
    console.log(nameg)  
    console.log(name)
   
    
}
myFunc();
console.log(nameg);
