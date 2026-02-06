// Fetch form these url, associate each username with a key todo of his id

// const users = "https://jsonplaceholder.typicode.com/users";
// const todos = "https://jsonplaceholder.typicode.com/todos";

// async function fetchUsersWithTodos(url1, url2){
//     try{
//         const usersResponse = await fetch(url1);
//         const todosResponse = await fetch(url2);
//         const users = await usersResponse.json();
//         const todos = await todosResponse.json();
        
//         const object = users.map(user=>{
//             return {
//                 ...user,
//                 todos: todos.filter(todo=> todo.userId === user.id)
//             }
//         })
//         console.log(object);
//     }catch(error){
//         console.log("An error occured: ",error) 
//     }
    
// }
// fetchUsersWithTodos(users, todos);
