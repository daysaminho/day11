function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task + " done");
        }, timeRequired);
    });
}

async function factory(tasks) {
    const workerPromises = [];

    for (const task of tasks.tasks) {
        const taskPromise = worker(task.task.trim(), parseInt(task.timeRequired.trim(), 10));
        workerPromises.push(taskPromise);

        taskPromise.then(result => {
            console.log(result);
        });
    }

    await Promise.allSettled(workerPromises);
}

let tasks = {
    tasks: [
        {
            task: 'Teaching Astronomy',
            timeRequired: '500',
        },
        {
            task: 'Going to work',
            timeRequired: '1000',
        },
        {
            task: 'Repair module',
            timeRequired: '1000',
        },
        {
            task: 'Refill fuel',
            timeRequired: '1500',
        },
    ],
};

factory(tasks);
