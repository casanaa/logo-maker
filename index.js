const fs = require('fs');
const inquirer = require("inquirer");
const { generateSVG } = require("./lib/generateSVG");
const { generateShape } = require("./lib/generateShape");

// Function to generate the SVG logo based on user input
function generateLogo(text, color, fontSize) {
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
            <rect width="100%" height="100%" fill="${color}" />
            <text x="50%" y="50%" fill="white" font-size="${fontSize}" font-family="Arial" text-anchor="middle" dy=".3em">${text}</text>
        </svg>
    `;
    return svgContent;
}

// Function to save an SVG file and convert it to an image
function saveLogoAsSVGAndImage(svgContent, outputPath) {
    // Save the SVG file
    fs.writeFileSync(`${outputPath}.svg`, svgContent);

    // Convert the SVG to PNG image
    svg2img(svgContent, (error, buffer) => {
        if (error) {
            console.error('Error converting SVG to image:', error);
        } else {
            // Save the PNG image
            fs.writeFileSync(`${outputPath}.png`, buffer);
            console.log('Logo created and saved!');
        }
    });
}

// Prompt user for logo details
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Choose logo text:'
        },
        {
            type: 'input',
            name: 'text-color',
            message: 'Choose text color:'
        },
        {
            type: 'list',
            name: 'pixel-image',
            message: 'Choose logo shape:',
            choices: ['Square', 'Triangle', 'Cricle'],
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Choose shape color :'
        }
    ])
    .then(answers => {
        const { text, color, shape } = answers;
        const svgContent = generateLogo(text, color, shape);
        saveLogoAsSVGAndImage(svgContent);
    })
    .catch(error => {
        console.error('Error:', error);

    });