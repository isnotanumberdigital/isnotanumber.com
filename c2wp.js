const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const valid = ['png', 'jpeg', 'jpg'];

const filePath = './assets/img/project-singles/updog';

fs.readdir(filePath, (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        if (!path.extname(file) || !valid.indexOf(path.extname(file))) {
            return;
        }

        const newFile = file.split('.').slice(0, -1).join('.') + '.webp';
        console.log(`cwebp -q 75 ${filePath}/${file} -o ${filePath}/${newFile}`);
    });
});
