function initializeMachine(machineName, timeRequired) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(machineName + " initialized"); 
        }, timeRequired * 1000); 
    });
}

initializeMachine("Computer", 3).then(function(value) {
    console.log(value); 
});
