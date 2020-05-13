//create a object
var billGates = {
    shirt:true,
    shirtColor: "offWhite",
    smile:true,
    jacket: true,
    jacketColor: "Gray",
    sunGlass:true
}

console.log(billGates['shirtColor'])
var bPro = {
    shirt:{
        color: "OffWhite",
        quality: "good",
        price: "200 usd"
    },
    jacket:{
        color: "Gray",
        quality:"Good",
        price: "100"

    }
}

console.log(bPro['jacket']['quality']);