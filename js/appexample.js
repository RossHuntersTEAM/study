// const app = 51;
// switch(app) {
//     case 51: 
//         console.log("Of course");
        

//     case 51: 
//         console.log("Of course plea");
//         break;
    
//     default:
//         console.log("Deadpool error");
// }

// console.log(NaN || null && !3 && undefined || 5)


// Massiv
// const arr = [1,2,3,4,8];

// arr.pop();
// arr.push(10);
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//     console.log(`Массив ${arr[i]}`);
// }

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(k,w,b) {
//     console.log(`${w} : значение ${k} целиком ${b}`);
// });

// const str= prompt("", "");
// const products = str.split(": ");
// console.log(products.join("! "));


// const lepr = [13, 11, 10, 21, ];
// console.log(lepr.sort());



// Massiv 

// const GH=["aa", "cc", "bb"];
// GH.sort();
// console.log(GH);

// const FM=[21,3,41,2];
// FM.sort(CM);
// console.log(FM);

// function CM(a,b){
//   return a-b;  
// };

// const CH=[2, "as", 34, 11];
// for(let i=0; i<CH.length; i++){
//     console.log(CH[i]);
// }

// const JW=[324, "ASDASD", 1232, "2323"];
// for (value of JW){
//     console.log(value);
// };

// const KD=[293, "SAKD", 21, 12];

// KD.forEach(function(jk, ck, ar){
//     console.log(`${ck} значение ${jk} внутри ${ar}`);
// });

// let onlineHouse=prompt("Опишите симптом - ?");
// const arr=onlineHouse.split(" ");
// console.log(arr);


//Task Prototype
// const soldier={
//     health:100,
//     armor:240,
//     sayHello: function(){
//         console.log("HEllo bigWorls")
//     }
// };

// const John=Object.create(soldier);

// // const John={
// //     health:21
// // };


// // John.__proto__=soldier;

// // Object.setPrototypeOf(John, soldier);
// // console.log(John.armor);
// John.sayHello();


// // Function call in functions
// let vali=7;

// function createAdder(){
//     function addNumbers(a,b){
//         let r=a+b;
//         return r;
//     }
//     return addNumbers;
// }

// let adder=createAdder();
// let i =adder(vali, 14);
// console.log("example of function returing a function:", i);


// // Closure Замыкание
// function createCounter(){
//     let counter=0;
//     const MyFunction=function(){
//         counter=counter+1;
//         return counter;
//     }
//     return MyFunction;
// } 

// let incre=createCounter();
// const c1=incre();
// const c2=incre();
// const c3=incre();
// console.log(c1,c2,c3);




// Task41
// ex1
// let x=5; alert(x++);

// ex2
// console.log(typeof([]+false));
// 

// ex3
// let y=1; let x = y = 2; alert(x);

// ex4
// console.log([]+1+2);

// ex5
// alert("1"[0]);

// ex6
// console.log(2 && 1 && 0 && null && undefined);
// console.log(2 && 1 && null && 0 && undefined);

// ex7
// const a=1,
//       b=3;
// console.log(!!( a && b ));
// console.log((a && b));

// ex8
// alert( null || 2 && 3 || 4 );

// ex9
// const a=[1,2,3],
//       b=[1,2,3];

// console.log(a==b);

// ex10
// alert( +"Infinity" );

// ex11
// console.log("Ёжик" > "яблоко");

// ex12
console.log(0 || "" || 2 || undefined || true || falsе);



// Task Treasure
// let ub = 1;

// // while(ub<5) {
// //     console.log(ub);
// //     ub++;
// // }

// do {
//     console.log(ub);
//     ub++;
// }
// while (ub > 5);

// function MyCounter() {
//     let counter=0;

//     const MyFunction = function() {
//       counter=counter+1;
//       return counter;
//     }

//     return MyFunction();
// }

// const i=MyCounter();
// const c1=i();
// const c2=i();
// const c3=i();

// console.log(c1, c2, c3);

