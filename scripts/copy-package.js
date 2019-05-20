const {readFile} = require("fs");
const {resolve} = require('path');
const {writeFile} = require('fs-extra');

const p = (...path) => resolve(__dirname, ...path);

const copyJson = (src, dst, rewriteFields) =>
    new Promise(((resolve, reject) => readFile(src, ((err, data) => {
        if (err) reject(err);
        const modified = {...JSON.parse(data.toString()), ...rewriteFields};
        writeFile(dst, JSON.stringify(modified, null, 2), err => err ? reject(err) : resolve())
    }))));


copyJson(p('../package.json'), p('../dist/package.json'), {main: 'index.js', types: 'index.d.ts'});