const fs = require('fs');
const inquirer = require("inquirer");
const svg2img = require('svg2img');

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
            console.log('Logo and image files saved successfully!');
        }
    });
}

// Prompt user for logo details
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter logo text:'
        },
        {
            type: 'input',
            name: 'text-color',
            message: 'Enter text color (hex format, e.g., #FF5733):'
        },
        {
            type: 'list',
            name: 'pixel-image',
            message: 'Choose a pixel image.',
            choices: ['Square', 'Triangle', 'Cricle'],
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Enter shape color :'
        }
    ])
    .then(answers => {
        const { text, color } = answers;
        const svgContent = generateLogo(text, color);
        saveLogoAsSVGAndImage(svgContent);
    })
    .catch(error => {
        console.error('Error:', error);

    });
