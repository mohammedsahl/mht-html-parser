import * as fs from 'fs';
import * as rd from 'readline'

var reader = rd.createInterface(fs.createReadStream("./sample.mht"))

var data: string[] = [];
reader.on("line", (l: string) => {
    // var tokens = l.split(' ');
    // var nr= parseInt(tokens[0]);
    // var from = tokens[1];
    // var to = tokens[2]
    // console.log(`nr: ${nr} from ${from} to ${to}`);
    data.push(l);
})
console.log(`Will be empty data has not yet been read ${data.length}` );

reader.on("close", ()=> {
    console.log(`Data has been read ${data.length}` );
    data.forEach(element => {
        console.log(`${element}`)
    });
})