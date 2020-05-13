// using in object for in loop
var billGates = {
    shirt:true,
    shirtColor: "offWhite",
    smile:true,
    jacket: true,
    jacketColor: "Gray",
    sunGlass:true
}
for(let props in billGates){
    console.log(props, billGates[props]);
}