    // Create a counter function that counts from 1 to 5, with a
    // 1-second delay between each number. The function should return
    // a promise that resolves with an array of all the numbers when
    // counting is complete. This tests your ability to create
    // async flows with timing and collect results over time.
async function counter(){
        let count = 1;
        let array = [];
        while(count <= 5){
            await new Promise(resolve=> setTimeout(resolve,1000))
            console.log(count);
            array.push(count);
            count++;
        }
        console.log(array);
    }
counter()