Logo-Maker

Description:
An application that creates logos.

Installation:
Clone the repo then install the needed dependencies.

How to use:
 After installing the required dependencies ((inquirer and jest) you should run node index.js to start the application. You'll be asked to answr questions on how you want your logo to look and once completed, the logo will be saved automatically. 

User Story:
As a freelance web developer 

I want to generate a simple logo for my projects

So that I don't have to pay a graphic designer

Criteria:

Given a command-line application that accepts user input

When I am prompted for text

Then I can enter up to three characters

When I am prompted for the text color

Then I can enter a color keyword (OR a hexadecimal number)

When I am prompted for a shape

Then I am presented with a list of shapes to choose from: circle, triangle, and square

When I am prompted for the shape's color

Then I can enter a color keyword (OR a hexadecimal number)

When I have entered input for all the prompts

Then an SVG file is created named `logo.svg`
and the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
