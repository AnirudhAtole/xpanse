var sub = document.getElementById("my-form");
var user_list = document.getElementById("expenses-list");

sub.addEventListener('submit',store_details);


function showuser(){
    for(var i=0;i<localStorage.length; i++) {
        var key = localStorage.key( i );
        var my_obj = JSON.parse( localStorage.getItem( key ) );
        
         //creating user list
    let user = document.createElement('li');
    //creating tet node of li
    user.appendChild(document.createTextNode(`expenses:- ${my_obj.expenses}  desc- ${my_obj.desc}  category:- ${my_obj.category}`));

    //creating a delete button
    var del_butt = document.createElement('button');
    del_butt.appendChild(document.createTextNode("delete"));
    del_butt.className = 'btn btn-danger';

    var edit_butt = document.createElement('button');
    edit_butt.appendChild(document.createTextNode("edit"));
    edit_butt.className = 'btn btn-primary';


    user.appendChild(del_butt);
    user.appendChild(edit_butt);

    //appending to the list
    user_list.appendChild(user);
    del_butt.onclick = () =>{
        localStorage.removeItem(my_obj.desc);
        user_list.removeChild(user);
    }

    edit_butt.onclick =() =>{
        document.getElementById("expense-amount").value = my_obj.expenses;
        document.getElementById("desc").value = my_obj.desc;
        document.getElementById("category").value = my_obj.category;
        localStorage.removeItem(my_obj.desc);
        user_list.removeChild(user);
    }
      }
}
showuser();


function store_details(e)
{
    e.preventDefault();

    let my_obj = {
        "expenses" : document.getElementById("expense-amount").value,
        "desc" : document.getElementById("desc").value,
        "category" : document.getElementById("category").value
    };

    let my_obj_serialized = JSON.stringify(my_obj);

    //creating user list
    let user = document.createElement('li');
    //creating tet node of li
    user.appendChild(document.createTextNode(`expenses:- ${my_obj.expenses}  desc- ${my_obj.desc}  category:- ${my_obj.category}`));

    //creating a delete button
    var del_butt = document.createElement('button');
    del_butt.appendChild(document.createTextNode("delete"));
    del_butt.className = 'btn btn-danger';

    var edit_butt = document.createElement('button');
    edit_butt.appendChild(document.createTextNode("edit"));
    edit_butt.className = 'btn btn-primary';


    user.appendChild(del_butt);
    user.appendChild(edit_butt);

    //appending to the list
    user_list.appendChild(user);
    del_butt.onclick = () =>{
        localStorage.removeItem(my_obj.desc);
        user_list.removeChild(user);
    }

    edit_butt.onclick =() =>{
        document.getElementById("expense-amount").value = my_obj.expenses;
        document.getElementById("desc").value = my_obj.desc;
        document.getElementById("category").value = my_obj.category;
        localStorage.removeItem(my_obj.desc);
        user_list.removeChild(user);
    }

    localStorage.setItem(my_obj.desc,my_obj_serialized);
}


