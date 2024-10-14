async function asyncFunc() {
    return new Promise(function(resolve) {
        const result = "Hello World!";
        resolve(result);
    });
}

asyncFunc().then(function(result) {
    console.log(result);
});
