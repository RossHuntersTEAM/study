const btn=document.querySelector('button'),
      overplay=document.querySelector('.overplay'),
      link = document.querySelector('a'), 
      btns=document.querySelectorAll('button');
// Простые обработчики
// btn.onclick = function(){
//     alert("Click zu fassen");
// };
// btn.onclick = function(){
//     alert("Click zuruck");
// };

// Использование обработчика событий
// btn.addEventListener('click', (e)=>{
//     // alert("Are you ready");
//     console.log(e.target);
//     e.target.remove();
// });


// Удаление обработчика событий
// let i=0;
// const RemoveElem = function(e){
//         // alert("Are you ready");
//         console.log(e.target);
//         i++;
//         if(i==1){
//             btn.removeEventListener('click', RemoveElem);
//         };
//         console.log("yeap");
// };

// btn.addEventListener('click', RemoveElem);

// Всплытие обработчика события
// const RemoveElem = function(e){
//     // alert("Are you ready");
//     console.log(e.currentTarget);
//     console.log(e.type);
// };

// btn.addEventListener('click', RemoveElem);
// overplay.addEventListener('click', RemoveElem);


//Отмена исполнения действий обработчика бразуера
// link.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log(event.target);
// });


// На несколько обьектов обработчик
const RemoveElem = function(e){
            alert("Are you ready");
            console.log(e.target);
};

btns.forEach(btn=>{
    btn.addEventListener('click', RemoveElem, {once: true});
});