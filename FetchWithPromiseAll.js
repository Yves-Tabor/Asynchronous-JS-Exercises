// const users = "https://jsonplaceholder.typicode.com/users";
// const todos = "https://jsonplaceholder.typicode.com/todos";

// async function fetchUserTodos(url1,url2){
//     const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]).then(response=> response);

// const [usersRes, postRes] = await Promise.all([
//     res1.json(),
//     res2.json()
//     ])
// const userWithTodos = usersRes.map((user)=>({
//     ...user,
//     todos: postRes.filter((todo) => todo.userId === user.id)
    
// })
// )
// console.log("userWithTodos: ", userWithTodos);
// }
// fetchUserTodos(users, todos); 