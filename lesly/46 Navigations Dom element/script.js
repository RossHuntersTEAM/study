// console.log(document.head);
// console.log(document.documentElement);
console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// Получение селектора id
// console.log(document.querySelector("#current").parentNode);
// console.log(document.querySelector("#current").parentElement);

// Получение с дата атрибутов
// console.log(document.querySelector("[data-current='3']").nextSibling);
// console.log(document.querySelector("[data-current='3']").previousElementSibling);

// Создание аналога для childNodes
for (let node of document.body.childNodes) {
    if(node.nodeName=="#text"){
        continue;
    };
    console.log(node);
};