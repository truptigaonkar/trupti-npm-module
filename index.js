#!/usr/bin/env node
const clc = require('cli-color');
for(let i=0; i<=100; i+=1){
    if(i%2 ===0){
        console.log(clc.blue(i));
    }else{
        console.log(clc.red(i));
    }
}
