const fs = require('fs');
const path = require('path');
const fileToPatch = path.join(__dirname,'node_modules/grafana-sdk-mocks/app/headers/es6-shim/es6-shim.d.ts')
fs.readFile( fileToPatch , (err, data) => {
    if (!err) {
        newData = data.toString('utf8').replace(/PropertyKey/g, 'KeyOfProperty');

        fs.writeFile(fileToPatch, newData, (err) => { if (err != null) { console.error(err.message)}});
        console.log(`File ${fileToPatch} patched`);
    }
}) 