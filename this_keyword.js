let user = {
    name: "Siddhesh1",
    age: 24,
    //Regular function
    getDetails(){
      console.log(this.name);
    }
  }
  user.getDetails();

  let user2 = {
    name: "Siddhesh2",
    age: 24,
    childObject: {
        newName: "Bhosale",
        //regular function
        getDetails(){ //this keyword only point to its immediate parent
            console.log("first name: "+this.name+" second name: "+ this.newName);
          }
    }
  }
  user2.childObject.getDetails();

var name1 = "yash"; 
  let user3 = {
    name: "Siddhesh3",
    age: 24,
    //regular function
    getName(){//note: regular fun points to its parent (parent of this is user3)
        console.log(this.name);
    },
    //arrow function
    getDetails: () => { //note : in arrow function this keyword point to its parents parent (parent of this is user3->parents[window])
      console.log(this.name1);
    },
    //regular with arrow function
    getDetails2() { //if you want to get object(user3) name then use below it follows parents parent
        const nestedArrow = () => console.log(this.name);
        nestedArrow();
    }
  }
  user3.getName();
  user3.getDetails();
  user3.getDetails2();

//this keyword in class and constructor
  class users{
    constructor(n){
      this.name = n;
    }

    get(){
      console.log(this.name);
    }
  }

  const User = new users("Sidd");
User.get();

//Q1

const hello = {
  firstName: "SIDDHESH",
  getName(){
    const firstNmae = "Siddhesh Bhosale!";
    console.log(this.firstName);
  }
}
hello.getName();

//Q2

// function makeUser(){
//   return{
//     name: "SIDD",
//     ref: this,
//   };
// }

// let userr = makeUser();
// console.log(userr.ref.name); //it will print nothing it will run but no output because 'this' is pointing to window

//let fix this above code
function makeUser(){
  return{
    name: "SIDD",
    ref(){
      return  this;
    }
  };
}
console.log(makeUser().ref().name);

//Q3
const a = {
  name: "Yash",
  getIt(){
     console.log(this.name);
  },
}

setTimeout(a.getIt,1000); //it will log nothing because getIt is treated as call back function not a method so it will not have link to a it will point to window and window dont have name

//to fix this above code use function

setTimeout(function (){
   a.getIt();
}, 1000);

//Q4

const b = {
  name: "JavaScript",
  get(){
    return `regularFunction Hello ${this.name}!`; //point to b
  },
  get2: () =>{
    return `arrowFunction Hello ${this.name}!`; //point to window(global)
  }
}

console.log(b.get());
console.log(b.get2());

//Q5

// let calculater = {
//   read(){
//     this.a = +prompt("Enter the first number",0); //here 0 is default number for a '+' is for to convert it to number
//     this.b = +prompt("Enter the second number",0);  //here 0 is default number for b '+' is for to convert it to number
//   },
//   sum(){
//     return this.a+this.b;
//   },
//   mul(){
//     return this.a*this.b;
//   }
// }

// calculater.read();
// console.log(calculater.sum());
// console.log(calculater.mul());

//Q6
var length = 5;
function callback(){
  console.log(this.length);
}

const c = {
  length: 6,
  method(fn){
    fn();
  },
};

c.method(callback); //5

//Advance senior developer Q
// var length = 5;
// function callback(){
//   console.log(this.length);
// }

// const c = {
//   length: 6,
//   method(fn){ //[callback, 2, 3] its length is 3 
//     arguments[0](); //as callback parent is argument array is will print its length 3 if we change length name it will give undefined
//   },
// };

// c.method(callback, 2, 3);

//Q7
const calc = {
   initial: 0,
   add(num){
      this.initial += num;
      return this;
   },
   multiply(num2){
      this.initial *= num2;
      return this;
   },
   sub(num3){
      this.initial -= num3;
      return this;
   },
};

const result = calc.add(10).multiply(5).sub(30).add(10);
console.log("Result:"+result.initial);
