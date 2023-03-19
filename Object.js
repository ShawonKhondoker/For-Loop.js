var name1 ='Shawon k';
var name ='Shawon k';
var name ='Shawon k';

console.log(name1);

let Shawon ={
    name:"Shawon",
    age:24,
    address:"barishal",
    fakibaz : "royes"

}
Shawon.fakibaz ="aktu to valo hoo"
console.log(Shawon);

let computer ={
    mouse : 5,
    keyboard: 10,
    monitor: 3,
    desk : 1,
    pc_box : 1
};

//  object.keys

const propertyNam =Object.keys(computer);
console.log(propertyNam);



  //   Get values

const monitorqulity = computer.monitor;
console.log(monitorqulity);

const monitorqulity2 = computer["keyboard"];
console.log(monitorqulity2);

const propertyName = "desk";
const propertyValu = computer[propertyName];
console.log(propertyValu);

console.log(computer.monitor);


   //  set value
computer.monitor = 5;
console.log(computer);

computer["monitor"] = 7;
console.log(computer);

const propertyName1 ="pc_box";
computer[propertyName1] = 5;
console.log(computer);



