
var arguments = process.argv.slice(2);

var digs = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];

var str = '';

arguments.forEach(element => {
    let digits = element.split('');
    for (x of digits){
        str += digs[parseInt(x)]
    };
    str += ','
});

console.log(str.slice(0,-1))
