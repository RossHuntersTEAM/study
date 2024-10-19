// const box=document.getElementById("box");
// console.log(box);

// const btns=document.getElementsByTagName('button')[1];
// console.log(btns);

// const circles=document.getElementsByClassName('circle');
// console.log(circles);

// const hearts=document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });

// // const oneHeart=document.querySelector('.heart');
// const oneHeart=document.querySelector('div');
// console.log(oneHeart);

const box=document.getElementById("box"),
      btns=document.getElementsByTagName('button'),
      circles=document.getElementsByClassName('circle'),
      hearts=document.querySelectorAll('.heart'),
      oneHeart=document.querySelector('.heart'),
      wrapper=document.querySelector('.wrapper');

// box.style.backgroundColor="#fce38a";
// box.style.width="700px";

box.style.cssText=('background-color:blue; width:1000px');

btns[1].style.borderRadius='100%';

const div=document.createElement('div');
div.classList.add('black');
// document.body.append(div);

// wrapper.append(div);
wrapper.prepend(div);

// hearts[0].before(div);
hearts[0].after(div);