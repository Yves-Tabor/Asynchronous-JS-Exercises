//Old way: How to use setTimeout + AbortController

// async function aborting(){
//     const controller = new AbortController();
//     const signal = controller.signal;
//     const timeout = setTimeout(()=> controller.abort(), time);
    
//     try{
//         const response = await fetch(url, {signal});
//         const data = await response.json();
//         clearTimeout(timeout);
//         console.log("Data arrived : ", data);
//     }catch(err){
//         if(err.name === "AbortError") console.log("Request timeout !!");
//         else{
//             console.log("A different error occured !!", err);
//         }
//     }
// }

//New way(Node JS 18 and new browsers): How to use setTimeout + AbortController

// async function aborting(url, time){
//     try{
//         const response = await fetch(url, {signal: AbortSignal.timeout(time)});
//         const data = await response.json();
//         console.log("Data arrived : ", data);
//     }catch(err){
//         if(err.name === "TimeoutError") console.log("Request timeout !!")
//         else{
//             console.log("A new error occured !!");
//         }
//     }
// }

// aborting("https://jsonplaceholder.typicode.com/posts/1", 100);