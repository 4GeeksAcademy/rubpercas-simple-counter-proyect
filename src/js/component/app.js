let counter = 0;

function numerosDisplay (one, two, three, four, five, six) {
    six = Math.floor(counter/100000);
    five = Math.floor(counter/10000);
    four = Math.floor(counter/1000);
    three = Math.floor(counter/100);
    two = Math.floor(counter/10);
    one = Math.floor(counter/1);
   
    counter++;
    return counter;
};

console.log(setInterval(() => {
    numerosDisplay();
}, 1000));

export default numerosDisplay;