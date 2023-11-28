const { Triangle, Square, Circle } = require("./shapes");

// Testing triangle
describe("Triangle", () => {
    it("test for triangle with purple background and white text", () => {
        const triangle = new Triangle('purple', 'SVG', 'white');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="purple" />
            <text x="100" y="175" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});

// Testing square
describe("Square", () => {
    it("test for square with purple background and white text", () => {
        const square = new Square('purple', 'SVG', 'white');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="purple" />
            <text x="100" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});

// Testing circle
describe("Circle", () => {
    it("test for circle with purple background and white text", () => {
        const circle = new Circle('purple', 'SVG', 'white');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="purple" />
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});