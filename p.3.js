// for
// for in 
// for of

// a = [3,5,5,6,9,3];
// for( let i of a ){
//     console.log(i);
// }

// const sum = (a,b)=>{
//     return a+b;
// }

let marks = {
    raj : 50,
    nand : 2,
    ankit : 22
}

for(let i=0;i<3;i++){
    console.log(Object.keys(marks)[i]);
    console.log(Object.values(marks)[i]);
}