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

 const callToAdd = async () => {
    const sum1 = await add(10, 20);
    const sum2 = await add(sum1, 10);
    const sum = await add(sum2, 10);
    return sum;
 }

 callToAdd().then((result) => {
     console.log(result);
 }).catch((error) => {
     console.log(error);
 });