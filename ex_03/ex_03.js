async function checkStatus(promesse) {
    promesse.then(function(result) {
        console.log(result);
        console.log("Checking status over");
    });
}

async function promiseMe(promesse) { 
    return new Promise(function(resolve) {
    let test = "I promise you to" + promesse; 
    resolve(test);
});
}

checkStatus(promiseMe(" fly to the moon"));
