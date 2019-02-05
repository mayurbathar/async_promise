var asyncAdd = (a ,b) =>{
    return new Promise((resolve,reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }else{
            reject('Must be a number');
        }
    })
};

asyncAdd(5,7).then((result) => {
    console.log(`Result: ${result}`);
},(errorMessage) => {
    console.log(errorMessage);
});

asyncAdd(5,'abc').then((result) => {
    console.log(`Result: ${result}`);
}).catch((e) => {
    console.log(e);
});

var somePromise = new Promise((resolve,reject) => {
    resolve('Hey Its worked');
});

somePromise.then((message) =>{
    console.log(`Success : ${message}`);
}, (errorMessage) => {

})