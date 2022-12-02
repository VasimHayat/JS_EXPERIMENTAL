// function onClickAction(){
//     alert("hi from app.js")
// }

// var y = null;
// var z = undefined;

// console.log(y+z)


// function* generator(i) {

//     yield i;
  
//     yield i + 'b';
  
//   }

//   const gen = generator('a');

// console.log(gen.next().value);

// console.log(gen.next().value);

// console.log(gen.next().value);

let sts ="a";

setTimeout(() => {
  sts = "b";
  console.log(sts);
})

console.log(sts)