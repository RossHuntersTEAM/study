// Chapter# 1
// const btn=document.querySelector("button"),
//       overlay=document.querySelector(".overlay");

// Простой обработчик
// btn.onclick=function(){
//     alert("Click");
// };
// btn.onclick=function(){
//     alert("Click 2");
// };

// Удаление элемента
// btn.addEventListener("click", (e)=>{
//     console.log(e.target);
//     e.target.remove();
// });

// Удаление обработчика события
// let i=0;
// const deleteElement = (e)=>{
//     console.log(e);
//     i++;
//     if(i==2){
//         btn.removeEventListener("click", deleteElement);
//     };
// }

// btn.addEventListener("click", deleteElement);

// Всплытие событий
// const deleteElement = (e)=>{
//         console.log(e.currentTarget);
//         console.log(e.type);
//     }
    
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// Отмена стандартного поведения браузера
// const link=document.querySelector("a");

// link.addEventListener("click", (event)=>{
//     event.preventDefault();
//     console.log(event.target);
// });


// Chapter# 2
// Обработчик на множество элементов
// const btns=document.querySelectorAll("button");


// const deleteElement = (e)=>{
//             console.log(e.target);
//             console.log(e.type);
// };

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement)
// });


// Третия опция обработчика события
const btns=document.querySelectorAll("button");


const deleteElement = (e)=>{
            console.log(e.target);
            console.log(e.type);
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); //Cработает собитие на элементе 1 раз
});