//stores the commandline arguments
var arguments = process.argv.slice(2);

var digs = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
//will store the final string we plan to print
var str = '';

//for each element we use split to split its digits up and then convert 
//each one to its corresponding string from above
arguments.forEach(element => {
    let digits = element.split('');
    for (x of digits){
        str += digs[parseInt(x)]
    };
    str += ', '
});

//slice removes the extra comma and space in the end
console.log(str.slice(0,-2))
