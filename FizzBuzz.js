var output = [];
var count = 1
function FizzBuzz() {

    if (count % 3 === 0) {
        output.push("Fizz");
        count ++
    }
    else{
    output.push(count);
    count ++;
    }
    
    console.log(output)
}
FizzBuzz();
FizzBuzz();
FizzBuzz();
FizzBuzz();
FizzBuzz();FizzBuzz();FizzBuzz();
