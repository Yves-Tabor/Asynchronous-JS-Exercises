
//Get the fastest response from multiple Requests


//async function getFastPosts(...requests) {
//     try{
//         const response = await Promise.any([...requests]);
//         const data = await response.json();
//         console.log(data)
//     }catch(error){
//         console.log("An error occured: ", error)
//     }
// };
// getFastPosts(fetch("https://dummyjson.com/posts"),fetch("https://this-may-not-exist.com/posts"),fetch("https://jsonplaceholder.typicode.com/posts"))