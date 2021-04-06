//ES5 doesn't have const so just don't modify these
var pixelSize = 4;
var pixelWidth = width / pixelSize;
var pixelHeight = height / pixelSize;
var colors = {
    light: color(208, 208, 88),
    medLight: color(160, 168, 64),
    medium: color(112, 128, 40),
    dark: color(64, 80, 16)
};

function fillPixel(x, y, color)
{
    fill(color);
    rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}

function fillRect(x, y, width, height, color)
{
    fill(color);
    rect(x * pixelSize, y * pixelSize, width * pixelSize, height * pixelSize);
}

//Stay at intervals of 5 otherwise text might get a bit broken
function drawText(x, y, size, color, message)
{
    var chars = message.toLowerCase().split("");
    var fifth = round(size / 5);
    for (var i in chars)
    {
        var char = chars[i];
        //A B C D E F G H K L M N O P Q R U W 6 8 0 have a left line
        if (char === "a" || char === "b" || char === "c" || char === "d" || char === "e" || char === "f" || char === "g" || char === "h" || char === "k" || char === "l" || char === "m" || char === "n" || char === "o" || char === "p" || char === "q" || char === "r" || char === "u" || char === "w" || char === "6" || char === "8" || char === "0")
        {
            fillRect(x + (i * size) + (i * 4), y, fifth, size, color);
        }
        
        //A B C E F G I J O P Q R S T Z 2 3 5 6 7 8 9 0 have a top line
        if (char === "a" || char === "b" || char === "c" || char === "e" || char === "f" || char === "g" || char === "i" || char === "j" || char === "o" || char === "p" || char === "q" || char === "r" || char === "s" || char === "t" || char === "z" || char === "2" || char === "3" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9" || char === "0")
        {
            fillRect(x + (i * size) + (i * 4), y, size, fifth, color);
        }
        
        //B C E G I L O S U Z 1 2 3 5 6 8 0 have a bottom line
        if (char === "b" || char === "c" || char === "e" || char === "g" || char === "i" || char === "l" || char === "o" || char === "s" || char === "u" || char === "z" || char === "1" || char === "2" || char === "3" || char === "5" || char === "6" || char === "8" || char === "0")
        {
            fillRect(x + (i * size) + (i * 4), y + (size - fifth), size, fifth, color);
        }
        
        //A H M N O U W 3 4 7 8 9 0 have a right line
        if (char === "a" || char === "h" || char === "m" || char === "n" || char === "o" || char === "u" || char === "w" || char === "3" || char === "4" || char === "7" || char === "8" || char === "9" || char === "0")
        {
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y, fifth, size, color);
        }
        
        //A E F H P R S 2 3 4 5 6 8 9 - have a middle line
        if (char === "a" || char === "e" || char === "f" || char === "h" || char === "p" || char === "r" || char === "s" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "8" || char === "9" || char === "-")
        {
            fillRect(x + (i * size) + (i * 4), y + (size - round(size / 2)), size, fifth, color);
        }
        
        //I J T 1 have a middle vertical line
        if (char === "i" || char === "j" || char === "t" || char === "1")
        {
            fillRect(x + (i * size) + (i * 4) + (size - round(size / 2)), y, fifth, size, color);
        }
        
        //P Q R 2 have a top right line
        if (char === "p" || char === "q" || char === "r" || char === "2")
        {
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y, fifth, round(size / 2), color);
        }
        
        // S 4 5 9 have a top left line
        if (char === "s" || char === "4" || char === "5" || char === "9")
        {
            fillRect(x + (i * size) + (i * 4), y, fifth, round(size / 2), color);
        }
        
        //J Z 2 have a bottom left line
        if (char === "j" || char === "z" || char === "2")
        {
            fillRect(x + (i * size) + (i * 4), y + (size - round(size / 2)) + 1, fifth, round(size / 2) - 1, color);
        }
        
        //B G S 5 6 have a bottom right line
        if (char === "b" || char ==="g" || char === "s" || char === "5" || char === "6")
        {
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y + (size - round(size / 2)) + 1, fifth, round(size / 2) - 1, color);
        }
        
        //Random parts
        if (char === "j" || char === "q")
        {
            fillRect(x + (i * size) + (i * 4), y + (size - fifth), round(size / 2), fifth, color);
        }
        
        if (char === "k" || char === "x" || char === "y" || char === "/")
        {
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 2)), y + fifth, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 3)), y + (fifth * 2), fifth, fifth, color);
        }
        
        if (char === "k" || char === "n" || char === "q" || char === "r" || char === "x" || char === "\\")
        {
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 3)), y + (fifth * 2), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 2)), y + (fifth * 3), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y + (fifth * 4), fifth, fifth, color);
        }
        
        if (char === "n" || char === "x" || char === "y" || char === "\\")
        {
            fillRect(x + (i * size) + (i * 4), y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + fifth, y + fifth, fifth, fifth, color);
        }
        
        if (char === "x" || char === "/")
        {
            fillRect(x + (i * size) + (i * 4), y + (size - fifth), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + fifth, y + (size - (fifth * 2)), fifth, fifth, color);
        }
        
        if (char === "b")
        {
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 3)), y + (fifth * 2), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 2)), y + (fifth * 2), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y + fifth, fifth, fifth, color);
        }
        
        if (char === "d")
        {
            fillRect(x + (i * size) + (i * 4), y, size - fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4), y + (fifth * 4), size - fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y + fifth, fifth, fifth * 3, color);
        }
        
        if (char === "g")
        {
            fillRect(x + (i * size) + (i * 4) + (fifth * 2), y + (fifth * 2), fifth * 3, fifth, color);
        }
        
        if (char === "k")
        {
            fillRect(x + (i * size) + (i * 4) + fifth, y + (fifth * 2), fifth, fifth, color);
        }
        
        if (char === "m")
        {
            fillRect(x + (i * size) + (i * 4) + fifth, y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (fifth * 3), y, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (fifth * 2), y + fifth, fifth, fifth * 2, color);
        }
        
        if (char === "v")
        {
            fillRect(x + (i * size) + (i * 4), y, fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y, fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 4) + fifth, y + (fifth * 2), fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 4) + (size - (fifth * 2)), y + (fifth * 2), fifth, fifth * 2, color);
            fillRect(x + (i * size) + (i * 4) + (fifth * 2), y + (size - fifth), fifth, fifth, color);
        }
        
        if (char === "w")
        {
            fillRect(x + (i * size) + (i * 4) + fifth, y + (size - fifth), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (fifth * 3), y + (size - fifth), fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + (fifth * 2), y + (fifth * 2), fifth, fifth * 2, color);
        }
        
        if (char === "y" || char === ":")
        {
            fillRect(x + (i * size) + (i * 4) + (fifth * 2), y + (fifth * 3), fifth, fifth * 2, color);
        }
        
        if (char === "z")
        {
            fillRect(x + (i * size) + (i * 4) + (size - fifth), y + fifth, fifth, fifth, color);
            fillRect(x + (i * size) + (i * 4) + fifth, y + (fifth * 2), fifth * 3, fifth, color);
        }
        
        if (char === "1")
        {
            fillRect(x + (i * size) + (i * 4), y, fifth * 2, fifth, color);
        }
        
        if (char === ":")
        {
            fillRect(x + (i * size) + (i * 4) + (fifth * 2), y, fifth, fifth * 2, color);
        }
    }
}

function init()
{
    noStroke();
    
    background(colors.dark);
    drawText(5, 10, 15, colors.light, "Snake");
}

/*
/
/
/
*/

init();
