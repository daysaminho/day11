
async function promiseMe(promise) {
    return new Promise(function(resolve) {
        let phrase = "I promise you to" + promise;
        resolve(phrase);
    });
}

promiseMe(" fly to the moon").then(function(result) {
    console.log(result);
});
