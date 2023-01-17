var fs = require("fs");

// var data = fs.readFileSync('/home/crystallily/Files/28\ Level\ 8/input.txt');

fs.readFile('/home/crystallily/Files/28\ Level\ 8/input.txt', function(err, data)
{
    if (err)
    {
        return console.error(err);
    }
    console.log(data.toString());
})

// console.log(data.toString());
console.log("Program Ended");