/*
/Drawing
*/

//ES5 doesn't have const so just don't modify these
//The size of a single "pixel" (So a single drawn pixel will actually be 4x4 pixels
var pixelSize = 4;
//Width and height of screen in pixels
var pixelWidth = width / pixelSize;
var pixelHeight = height / pixelSize;
//Basic color palatte, not required to be used
var palettes = {
    gameboy: {
        light: color(208, 208, 88),
        medLight: color(160, 168, 64),
        medium: color(112, 128, 40),
        dark: color(64, 80, 16)
    },
    arid: {
        light: color(246, 220, 191),
        medLight: color(247, 164, 64),
        medium: color(170, 170, 170),
        dark: color(225, 112, 26)
    },
    pastel: {
        light: color(250, 227, 217),
        medLight: color(255, 182, 185),
        medium: color(187, 222, 214),
        dark: color(97, 192, 191)
    }
};
var colors = colors || palettes.gameboy;

//Fills a pixel
function fillPixel(x, y, color)
{
    fill(color);
    noStroke();
    rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}

//Fills a rectangle
function fillRect(x, y, width, height, color)
{
    fill(color);
    noStroke();
    rect(x * pixelSize, y * pixelSize, width * pixelSize, height * pixelSize);
}

//Fills a rectangle with a border
function fillBorderRect(x, y, width, height, color, border)
{
    fill(color);
    stroke(border);
    strokeWeight(1);
    rect(x * pixelSize, y * pixelSize, width * pixelSize, height * pixelSize);
}

//Stay at intervals of 5 otherwise text might get a bit broken
function drawText(x, y, size, color, message)
{
    noStroke();
    
    //Splits text into individual characters
    var chars = message.toLowerCase().split("");
    var fifth = round(size / 5);
    //The way this functions is kind of a mess but it works well enough
    for (var i in chars)
    {
        var char = chars[i];
        //A B C D E F G H K L M N O P Q R U W 6 8 0 have a left line
        if (char === "a" || char === "b" || char === "c" || char === "d" || char === "e" || char === "f" || char === "g" || char === "h" || char === "k" || char === "l" || char === "m" || char === "n" || char === "o" || char === "p" || char === "q" || char === "r" || char === "u" || char === "w" || char === "6" || char === "8" || char === "0")
        {
            fillRect(x + (i * size) + (i * 2), y, fifth, size, color);
        }
        
        //A B C E F G I J O P Q R S T Z 2 3 5 6 7 8 9 0 have a top line
        if (char === "a" || char === "b" || char === "c" || char === "e" || char === "f" || char === "g" || char === "i" || char === "j" || char === "o" || char === "p" || char === "q" || char === "r" || char === "s" || char === "t" || char === "z" || char === "2" || char === "3" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9" || char === "0")
        {
            fillRect(x + (i * size) + (i * 2), y, size, fifth, color);
        }
        
        //B C E G I L O S U Z 1 2 3 5 6 8 0 have a bottom line
        if (char === "b" || char === "c" || char === "e" || char === "g" || char === "i" || char === "l" || char === "o" || char === "s" || char === "u" || char === "z" || char === "1" || char === "2" || char === "3" || char === "5" || char === "6" || char === "8" || char === "0")
        {
            fillRect(x + (i * size) + (i * 2), y + (size - fifth), size, fifth, color);
        }
        
        //A H M N O U W 3 4 7 8 9 0 have a right line
        if (char === "a" || char === "h" || char === "m" || char === "n" || char === "o" || char === "u" || char === "w" || char === "3" || char === "4" || char === "7" || char === "8" || char === "9" || char === "0")
        {
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y, fifth, size, color);
        }
        
        //A E F H P R S 2 3 4 5 6 8 9 - have a middle line
        if (char === "a" || char === "e" || char === "f" || char === "h" || char === "p" || char === "r" || char === "s" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "8" || char === "9" || char === "-")
        {
            fillRect(x + (i * size) + (i * 2), y + (size - round(size / 2)), size, fifth, color);
        }
        
        //I J T 1 have a middle vertical line
        if (char === "i" || char === "j" || char === "t" || char === "1")
        {
            fillRect(x + (i * size) + (i * 2) + (size - round(size / 2)), y, fifth, size, color);
        }
        
        //P Q R 2 have a top right line
        if (char === "p" || char === "q" || char === "r" || char === "2")
        {
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y, fifth, round(size / 2), color);
        }
        
        // S 4 5 9 have a top left line
        if (char === "s" || char === "4" || char === "5" || char === "9")
        {
            fillRect(x + (i * size) + (i * 2), y, fifth, round(size / 2), color);
        }
        
        //J Z 2 have a bottom left line
        if (char === "j" || char === "z" || char === "2")
        {
            fillRect(x + (i * size) + (i * 2), y + (size - round(size / 2)) + 1, fifth, round(size / 2) - 1, color);
        }
        
        //B G S 5 6 have a bottom right line
        if (char === "b" || char ==="g" || char === "s" || char === "5" || char === "6")
        {
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y + (size - round(size / 2)) + 1, fifth, round(size / 2) - 1, color);
        }
        
        //Random parts
        if (char === "j" || char === "q")
        {
            fillRect(x + (i * size) + (i * 2), y + (size - fifth), round(size / 2), fifth, color);
        }
        
        if (char === "k" || char === "x" || char === "y" || char === "/")
        {
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 2)), y + fifth, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 3)), y + (fifth * 2), fifth, fifth, color);
        }
        
        if (char === "k" || char === "n" || char === "q" || char === "r" || char === "x" || char === "\\")
        {
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 3)), y + (fifth * 2), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 2)), y + (fifth * 3), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y + (fifth * 4), fifth, fifth, color);
        }
        
        if (char === "n" || char === "x" || char === "y" || char === "\\")
        {
            fillRect(x + (i * size) + (i * 2), y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + fifth, y + fifth, fifth, fifth, color);
        }
        
        if (char === "x" || char === "/")
        {
            fillRect(x + (i * size) + (i * 2), y + (size - fifth), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + fifth, y + (size - (fifth * 2)), fifth, fifth, color);
        }
        
        if (char === "b")
        {
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 3)), y + (fifth * 2), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 2)), y + (fifth * 2), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y + fifth, fifth, fifth, color);
        }
        
        if (char === "d")
        {
            fillRect(x + (i * size) + (i * 2), y, size - fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2), y + (fifth * 4), size - fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y + fifth, fifth, fifth * 3, color);
        }
        
        if (char === "g")
        {
            fillRect(x + (i * size) + (i * 2) + (fifth * 2), y + (fifth * 2), fifth * 3, fifth, color);
        }
        
        if (char === "k")
        {
            fillRect(x + (i * size) + (i * 2) + fifth, y + (fifth * 2), fifth, fifth, color);
        }
        
        if (char === "m")
        {
            fillRect(x + (i * size) + (i * 2) + fifth, y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (fifth * 3), y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (fifth * 2), y + fifth, fifth, fifth * 2, color);
        }
        
        if (char === "v")
        {
            fillRect(x + (i * size) + (i * 2), y, fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y, fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 2) + fifth, y + (fifth * 2), fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 2) + (size - (fifth * 2)), y + (fifth * 2), fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 2) + (fifth * 2), y + (size - fifth), fifth, fifth, color);
        }
        
        if (char === "w")
        {
            fillRect(x + (i * size) + (i * 2) + fifth, y + (size - fifth), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (fifth * 3), y + (size - fifth), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + (fifth * 2), y + (fifth * 2), fifth, fifth * 2, color);
        }
        
        if (char === "y" || char === ":")
        {
            fillRect(x + (i * size) + (i * 2) + (fifth * 2), y + (fifth * 3), fifth, fifth * 2, color);
        }
        
        if (char === "z")
        {
            fillRect(x + (i * size) + (i * 2) + (size - fifth), y + fifth, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 2) + fifth, y + (fifth * 2), fifth * 3, fifth, color);
        }
        
        if (char === "1")
        {
            fillRect(x + (i * size) + (i * 2), y, fifth * 2, fifth, color);
        }
        
        if (char === ":")
        {
            fillRect(x + (i * size) + (i * 2) + (fifth * 2), y, fifth, fifth * 2, color);
        }
    }
}

/*
/External Button Class
/Modified to fit better with the program
*/

var Button = function(config) {
    this.isButton = true;
    this.xOffset = config.xOffset || 0;
    this.yOffset = config.yOffset || 0;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    
    //Needs this to be used with the scene object
    this.update = function(){};
};

Button.prototype.draw = function() {
    fillRect(this.x, this.y, this.width, this.height, colors.light);
    drawText(this.x + this.xOffset, this.y + this.yOffset, 5, colors.dark, this.label);
};

Button.prototype.isMouseInside = function() {
    var trueX = this.x * pixelSize;
    var trueY = this.y * pixelSize;
    var trueW = this.width * pixelSize;
    var trueH = this.height * pixelSize;
    
    return mouseX > trueX &&
           mouseX < (trueX + trueW) &&
           mouseY > trueY &&
           mouseY < (trueY + trueH);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

/*
/Classes
*/

//Abstraction of the drawText function, rather than the function being called within the scene, this object holds the parameters so text can easily be added and modified in a scene
function Text(x, y, size, color, t)
{
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.t = t;
    
    //Doesn't actually do anything when update is called, still neccessary as the scene will call .update() on all objects within it
    this.update = function() {};
    
    this.draw = function() {
        drawText(this.x, this.y, this.size, colors[this.color], this.t);
    };
}

//Similar to the text object
function Rect(x, y, width, height, color)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.update = function() {};
    this.draw = function() {
        fillRect(this.x, this.y, this.width, this.height, colors[this.color]);
    };
}

/*
/Scenes
*/

//Keeps track of all the objects in the scene
function Scene()
{
    this.objects = [];
    //Updates and draws every object within the scene when scene.update or scene.draw are called
    this.update = function() 
    {
        for (var i in this.objects)
        {
            this.objects[i].update();
        }
    };
    this.draw = function()
    {
        for (var i in this.objects)
        {
            this.objects[i].draw();
        }
    };
}

//Manages the game as a whole, including individual scenes
function Game()
{
    this.scenes = [ new Scene() ];
    this.data = {};
    //Index of the scene  currently being updated and drawn
    this.currentScene = 0;
    this.update = function() {this.scenes[this.currentScene].update(); };
    this.draw = function() { this.scenes[this.currentScene].draw(); };
}

var game = new Game();

function init()
{
    noStroke();

    //Lowers the fps so the snake's movement can be implemented a bit easier
    frameRate(5);
    
    draw = function() {
        game.update();
        
        background(colors.dark);
        game.draw();
    };
    
    mouseClicked = function()
    {
        for (var i in game.scenes[game.currentScene].objects)
        {
            if (game.scenes[game.currentScene].objects[i].isButton)
            {
                game.scenes[game.currentScene].objects[i].handleMouseClick();
            }
        }
    };
}

/*
/
/Game
/
*/

function Snake(gridx, gridy)
{
    this.headX = gridx;
    this.headY = gridy;
    this.body = [];
    /*
    /0 = left
    /1 = up
    /2 = right
    /3 = down
    */
    //-1 stops it from moving for now
    this.direction = -1;
    this.nextDirection = -1;
    
    //Determines if the snake will grow next update
    this.grow = false;
    
    this.move = function(x, y)
    {
        if (this.body.length !== 0)
        {
            if (!this.grow)
            {
                this.body.pop();
            } else
            {
                this.grow = false;
            }
            
            this.body.unshift([this.headX, this.headY]);
        } else
        {
            if (this.grow)
            {
                this.body.push([this.headX, this.headY]);
                this.grow = false;
            }
        }
        
        this.headX = (this.headX + x + game.data.gridWidth) % game.data.gridWidth;
        this.headY = (this.headY + y + game.data.gridHeight) % game.data.gridHeight;
        
        var foodX = game.scenes[1].objects[game.data.food].x;
        var foodY = game.scenes[1].objects[game.data.food].y;
        
        //Checks if the snake has touched the food
        if (this.headX === foodX && this.headY === foodY)
        {
            this.grow = true;
            //Move the food and add to the score
            game.scenes[1].objects[game.data.food].randomize();
            game.data.score++;
            
            //Update score texts
            game.scenes[1].objects[0].t = "Score:" + game.data.score;
            game.scenes[2].objects[1].t = "Final Score:" + game.data.score;
        }
    };
    
    this.update = function() 
    {
        this.direction = this.nextDirection;
        
        switch(this.direction)
        {
            case 0:
                this.move(-1, 0);
                break;
            case 1:
                this.move(0, -1);
                break;
            case 2:
                this.move(1, 0);
                break;
            case 3:
                this.move(0, 1);
                break;
        }
        for (var i = 0; i < this.body.length; i++){
            if (this.headX === this.body[i][0] && this.headY === this.body[i][1]) {
                game.currentScene = 2;
            }
        }
    };
    this.draw = function() 
    {
        fillBorderRect((this.headX * 4) + 2, (this.headY * 4) + 10, 4, 4, colors.light, colors.dark);
        for (var i in this.body)
        {
            fillBorderRect((this.body[i][0] * 4) + 2, (this.body[i][1] * 4) + 10, 4, 4, colors.light, colors.dark);
        }
    };
}

function Food()
{
    this.x = 0;
    this.y = 0;
    
    this.randomize = function()
    {
        this.x = round(random(0, game.data.gridWidth - 1));
        this.y = round(random(0, game.data.gridHeight - 1));
    };
    
    this.update = function() {};
    
    this.draw = function() 
    {
        fillBorderRect((this.x * 4) + 2, (this.y * 4) + 10, 4, 4, colors.medLight, colors.dark);
    };
}

init();

game.data.score = 0;
game.currentScene = 0;

//Main menu
game.scenes[0].objects.push(new Text(5, 10, 15, "light", "Snake"));
//Start button for the main menu that will move the game to the next scene
game.scenes[0].objects.push(new Button({
    x: 15,
    y: 40,
    width: 40,
    height: 10,
    label: "Play",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        game.currentScene = 1;
        keyPressed = function()
        {
            var currentDir = game.scenes[1].objects[game.data.snake].direction;
            if (keyCode === LEFT && currentDir !== 2) {
                game.scenes[1].objects[game.data.snake].nextDirection = 0;
            }
            if (keyCode === UP && currentDir !== 3) {
                game.scenes[1].objects[game.data.snake].nextDirection = 1;
            }
            if (keyCode === RIGHT && currentDir !== 0) {
                game.scenes[1].objects[game.data.snake].nextDirection = 2;
            }
            if (keyCode === DOWN && currentDir !== 1) {
                game.scenes[1].objects[game.data.snake].nextDirection = 3;
            }
};
    }
}));
game.scenes[0].objects.push(new Button({
    x: 15,
    y: 60,
    width: 65,
    height: 10,
    label: "Palettes",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        game.currentScene = 3;
    }
}));

//Game
//Adds a new scene
game.scenes.push(new Scene());
game.scenes[1].objects.push(new Text(1, 2, 5, "light", "Score:" + game.data.score));
//Playing area is 88 pixels high and 96 units wide, offset to the right by 2 and from the top by 10
//Each unit of the game are will be 4x4 pixels within the engine (actually 4 * pixelSize)
//So the game area is 24x22 units
game.scenes[1].objects.push(new Rect(0, 8, pixelWidth, 2, "medLight"));
game.scenes[1].objects.push(new Rect(0, 10, 2, pixelHeight, "medLight"));
game.scenes[1].objects.push(new Rect(pixelWidth - 2, 10, 2, pixelHeight, "medLight"));
game.scenes[1].objects.push(new Rect(0, pixelHeight - 2, pixelWidth, 2, "medLight"));
game.scenes[1].objects.push(new Snake(11, 10));
game.scenes[1].objects.push(new Food());

//Game over
game.scenes.push(new Scene());
game.scenes[2].objects.push(new Text(15, 20, 5, "light", "Game Over"));
game.scenes[2].objects.push(new Text(5, 40, 5, "light", "Final Score:" + game.data.score));
//Reset button
game.scenes[2].objects.push(new Button({
    x: 30,
    y: 60,
    width: 40,
    height: 10,
    label: "Reset",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        game.currentScene = 1;
        game.scenes[1].objects[5].headX = 11;
        game.scenes[1].objects[5].headY = 10;
        game.scenes[1].objects[5].body = [];
        game.scenes[1].objects[5].direction = -1;
        game.scenes[1].objects[5].nextDirection = -1;
    }
}));

//Color palette screen
game.scenes.push(new Scene());
//Return button
game.scenes[3].objects.push(new Button({
    x: 5,
    y: 5,
    width: 35,
    height: 10,
    label: "Exit",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        game.currentScene = 0;
    }
}));
//Palettes
game.scenes[3].objects.push(new Button({
    x: 20,
    y: 30,
    width: 55,
    height: 10,
    label: "Gameboy",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        colors = palettes.gameboy;
    }
}));
game.scenes[3].objects.push(new Button({
    x: 20,
    y: 50,
    width: 35,
    height: 10,
    label: "Arid",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        colors = palettes.arid;
    }
}));
game.scenes[3].objects.push(new Button({
    x: 20,
    y: 70,
    width: 50,
    height: 10,
    label: "Pastel",
    xOffset: 4,
    yOffset: 2,
    onClick: function() { 
        colors = palettes.pastel;
    }
}));

game.data.gridWidth = 24;
game.data.gridHeight = 22;
//Index of the snake in the objects array
game.data.snake = 5;
//Index of the food in the objects array
game.data.food = 6;
game.scenes[1].objects[game.data.food].randomize();
