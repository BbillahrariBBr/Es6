var myArr = ["A", "B", "C"];

//using array constryuctor
var myArrPro = new Array("D","E", "F","G");

console.log(myArr[1]);

for(let item of myArr){
    console.log(item);
}
for(let item of myArrPro){
    console.log(item);
}

console.log(myArrPro[3]);