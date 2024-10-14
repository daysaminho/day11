async function checkFuel(fuel) {
    return new Promise(function(resolve, reject) { 
        if (fuel >= 9) {
            resolve("Ready to launch"); 
        } else {
            reject("Please refill fuel"); 
        }
    });
}

checkFuel(5).then(function(message) {
        console.log(message);
    }).catch(function(error) {
        console.log(error); 
    });
