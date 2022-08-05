'use strict'

const addBtn = document.querySelector("#add"),
      todos = document.querySelector(".todos"),
      input = document.querySelector(".todos__item");

todos.addEventListener('click',function (e) {
    if (e.target.classList.contains('inp')) {
        e.target.addEventListener('input', function(e) {
            console.log(e.target.value);
        })
    }
});

function createNewTodo() {
    let start = Date.now();
    let itemTodo = document.createElement('div');
    itemTodo.className =  "todos__item";
    itemTodo.innerHTML = `<p class="todos__item_text">Todo</p> <input id="${start}" class="inp" type="text"><button type="subbmit">Add todo</button>`;

    document.querySelector('.todos').append(itemTodo);
}

addBtn.addEventListener('click', createNewTodo);


function checkId(item) {
    // item.forEach(el => {
    //     console.log(el);
    //     // el.addEventListener('input', function(e) {
    //     //     console.log(e.target.value);
    //     // });
    // });
}

// input.forEach(el => {
//     console.log(el);
//     el.addEventListener('input', function(e) {
//         console.log(e.target.value);
//     });
// });