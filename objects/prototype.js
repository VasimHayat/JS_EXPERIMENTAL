let obj1 = {
    x:10
}

let proto = {
    y:20
}

console.log(Object.getPrototypeOf(obj1));
console.log(obj1.__proto__);

Object.setPrototypeOf(obj1, proto);
console.log(obj1.__proto__);