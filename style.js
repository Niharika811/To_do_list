let todolist = [];
    
    function RenderTodolist(){
        let todolisthtml = '';
        for(let i = 0; i<todolist.length;i++){
            const todoobject = todolist[i];
            const {name,date} = todoobject;
            const a = `
            <div>${name}</div>
            <div>${date}</div>
            <button onclick="
            todolist.splice(${i},1);
            RenderTodolist();
            "class="delete-button">Delete</button>`
            todolisthtml+=a;

        }
        document.querySelector(".js-todo-list").innerHTML= todolisthtml;
    }


    function  addTodo(){
        const inputElement = document.querySelector(".js-name-input");
        const name = inputElement.value;

        const dateinputElement = document.querySelector(".js-date-input");
        const date = dateinputElement.value;

        todolist.push({
            name,
            date
        })

        inputElement.value = '';
        RenderTodolist();
    }