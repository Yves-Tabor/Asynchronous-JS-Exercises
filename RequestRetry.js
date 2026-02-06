// Write a function that retry a request after a number of time (count)


// async function retries(url, count){
//     for(let i=0; i<count; i++){
//         try{
//             const resp = await fetch(url);
//             if(!resp.ok){
//                 throw new Error("An error occured !!");
//             }else{
//                 console.log("Success !: ", resp.json());
//                 break;
//             }
//         }catch{
//             await new Promise((resolve) => setTimeout(resolve, 500 * Math.pow(2, i)));
//             if(i === count - 1){
//                 console.log(`Failed after ${count} retries`);
//             }
//             console.log(`Attempt ${i+1} failed`);
//         }
//     }
// }
// retries("https://jsonplacehmolder.typicode.com/users", 5);