'use strict'

const addBtn = document.querySelector("#add"),
      input = document.querySelectorAll("input");

addBtn.addEventListener('click', (e) => {
    let start = Date.now();
    let itemTodo = document.createElement('div');
    itemTodo.setAttribute('id',start)
    itemTodo.className =  "todos__item";
    itemTodo.innerHTML = `<p class="todos__item_text">Todo</p> <input type="text"><button type="subbmit">Add todo</button>`;

    document.querySelector('.todos').append(itemTodo);


    input.forEach(el => {
        console.log(el;
        el.addEventListener('input', function(e) {
            console.log(e.target.value);
        });
    });
});



