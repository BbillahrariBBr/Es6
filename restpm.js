// rest parm like as (...) give multiple parama as u want

function Calculation(a,b,...numbers){

    let sum = 0;
    for(let i of numbers){
        sum = sum+i;
    }
    console.log(a+b+sum);
}
Calculation(10,20,5,6);