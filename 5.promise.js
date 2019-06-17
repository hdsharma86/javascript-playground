/*const doPromise = new Promise((reslove, reject) => {
    reslove([1,3,7]);
    //reject('Error: missing params...');
});

doPromise.then((result) => {
    setTimeout(() => {
        console.log(result);
    }, 2000);
}).catch((error)=>{
    console.log(error);
});*/

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a && b){
                resolve(a+b);
            } else {
                reject('Missing params!');
            }
        }, 2000);
    });
};

/*add().then((sum) => {
    console.log(sum);
}).catch((error) => {
    console.log(error);
});*/

add(5,5).then((sum) => {
    console.log('Sum1: ', sum);
   return add(sum, 5);
}).then((sum2) => {
    console.log('Sum2: ',sum2);
}).catch((error) => {
    console.log(error);
});