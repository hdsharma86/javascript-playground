function render(x){
    this.x = 1;
    setInterval(() => {
        console.log(++this.x);
    }, 1000);
}
const counter = new render(1);

/*const renderV2 = (x) => {
    this.x = x;
    setInterval(() => {
        console.log(++this.x);
    });
}
const counter2 = new renderV2(1);*/
