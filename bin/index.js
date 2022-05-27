#! /usr/bin/env node
const fs = require('fs');
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log('Please enter a name');
    process.exit(1);
}

const [pathName, componentName] = args;
console.log("Files: ", pathName, componentName)
// create file in src/components/
// Create a file

const createComponents = async () => {
    const componentPath = `${pathName}/${componentName}.js`;
    try {
        await fs.promises
            .writeFile(
                componentPath,
                `import React from 'react';

import styles from './${componentName}.module.scss';

const ${componentName} = () => {
    return (
        <div>
            <h2>${componentName}</h2>
        </div>
    );
}

export default ${componentName};
`
            )


        // Creating style file
        const styleComponentPath = `${pathName}/${componentName}.module.scss`;
        await fs.promises
            .writeFile(
                styleComponentPath,
                ''
            )
    } catch (e) {
        console.log('Unable to create component', e);
    }

}
createComponents();
// console.log(args);
