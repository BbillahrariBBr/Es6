// key value pairing
//create map
 var mymap = new Map();

 mymap.set("dist1", "Dhaka")
 mymap.set("dist2", "Barishal")
 mymap.set("dist3", "Ctg")
 mymap.set("dist4", "Raj")
 mymap.set("dist5", "Khu")

//  console.log(mymap.values());
//  console.log(mymap.keys());

//loop for value
//  for(let myVale  of mymap.values()){
//      console.log(myVale);
//  }

//  //loop for vkey
//  for(let myKey of mymap.keys()){
//     console.log(myKey);
// }

//delete key

// mymap.delete("dist1");
//  for(let myVale  of mymap.values()){
//      console.log(myVale);
//  }

//clear key

// mymap.clear();
//  for(let myVale  of mymap.values()){
//      console.log(myVale);
//  }


//get
console.log(mymap.get("dist3"));


//has

if(mymap.has("dist10")){
    console.log("yes");
}
else{
    console.log("No");
}