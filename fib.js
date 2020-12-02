
// quickly coded a function that calculates fibonacci sequence numbers.
// The number passsed in is what number in the sequence you want to know, the function returns that number

function fib(num)
{
    if(num === 1)
    {
        return 0;
    }
    else if(num === 2)
    {
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
}




var number = fib(10);

console.log(number);