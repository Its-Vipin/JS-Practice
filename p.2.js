//NNSSBBU
// Primitive DataTypes

let a = 5;
let b = null;
let c = "hello";
let d = Symbol("Imm a symbol");
let e = BigInt(555) + BigInt(55);
let f = true;
let g = undefined; // or let g;
console.log(a,b,c,d,e,f,g);

// Non-primitive - objects

const item = {
    "a": true,
    "b": 5
};
console.log(item["a"]);
console.log(item.a);