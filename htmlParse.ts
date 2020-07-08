import * as jsdom from 'jsdom'
import * as fs from 'fs';
const { JSDOM } = jsdom;

fs.readFile('./test.htm', 'utf8', (err: NodeJS.ErrnoException, data: string) => {
    // console.log(!err? data: err);
    const dom: jsdom.JSDOM = new JSDOM(data);
    console.log(dom.window.document.querySelector("body").textContent);
})