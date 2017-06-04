// Map and WeakMap

let myMap = new Map();
myMap.set("name","Ajay");
myMap.set("age",10);

console.log(myMap.get("name") + " - " + myMap.size);

for(let key of myMap.keys()) console.log("Key = "+key);

for(let value of myMap.values()) console.log("Value = "+value);

for(let [k,v] of myMap.entries()) console.log("Key,Value = "+k+","+v);

// Weak map keys can be object or functions - No entries method
