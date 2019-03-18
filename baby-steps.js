var total = 0;
var args = process.argv;
for (let i = 2; i < args.length; i++) {
    total += Number(args[i]);    
}

console.log(total);