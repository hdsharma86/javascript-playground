const mongoose = require('../db/mongoose');
const User = require('../models/user');
const Task = require('../models/task');

const deleteAndCountTask = async (id, completed) => {
    const user = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed});
    return count;
};

deleteAndCountTask('5ce66fb4b33a9213ad609e08', false).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
/*Task.findByIdAndDelete('5ce66a4a658f7110db50ec52').then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((result) => {
    console.log("Total UnCompleted Tasks: ", result);
}).catch((error) => {
    console.log(error);
});*/

/*const findUserAndUpdate = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
};

findUserAndUpdate('5ce546bf3f102e10cc9a33a4', 35).then((count) => {
    console.log('Total documents with age 35 is: ', count);
}).catch((error) => {
    console.log(error);
});*/

/*User.findByIdAndUpdate('5ce546bf3f102e10cc9a33a4', {age: 32}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 32});
}).then((rersult) => {
    console.log(rersult);
}).catch((error) => {
    console.log(error);
});*/