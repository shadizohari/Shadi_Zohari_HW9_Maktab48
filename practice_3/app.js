const fs = require('fs');

fs.readFile('./name.txt', 'utf-8', function (err, data) {
    fs.readFile('./number.txt', 'utf-8', function (err2, data2) {
        let arr1 = data.split('\n');
        let objName = {};
        let arr2 = data2.split('\n');
        let objNumber = {};
        for (let i = 0; i < arr1.length; i++) {
            let x = arr1[i].split('-');
            objName[x[0]] = x[1];
        }
        for (let j = 0; j < arr2.length; j++) {
            let x = arr2[j].split("-");
            if (!objNumber[x[0]]) {
                objNumber[x[0]] = [x[1]];
            } else {
                objNumber[x[0]].push(x[1]);
            }
        }
        let str = "";
        for (const id in objName) {
            if (objNumber[id]) {
                if (objNumber[id].length > 1) {
                    str += `${id} ${objName[id]}'s phone numbers are ${objNumber[id]}\n`;
                } else {
                    str += `${id} ${objName[id]}'s phone number is ${objNumber[id]}\n`;
                }
            } else {
                str += `${id} ${objName[id]} hasn't any number\n`;
            }
        }
        fs.writeFile('./newText.txt', str, function (err) {
            if (err) throw err;
            console.log('Saved!');
        })
    })
})