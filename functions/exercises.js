
//1.Function for print line: 


function makeLine(size,char='#') {

    let line = "";
    for (let i = 0; i < size; i++) {
      line = line +char;
    }
    //console.log(line);
    return line;
  }
 //makeLine(4);
 
 //2.Function to print square using makeline:

 function makeSquare(size){
    let square = "";
    for (let i=0;i<size;i++){
       square = square+(makeLine(size)+'\n');
 }
    //console.log("square using size: \n"+ square);
    return square;
 }
 //makeSquare(5);

 //3.Function to print rectangle:

 function makeRectangle(width,height){
    let rectangle = "";
    for (let i=0;i<height;i++){
       rectangle = rectangle+(makeLine(width)+'\n');
 }
    //console.log("Rectangle using width and height: \n"+rectangle);
    return rectangle;
 }
 //makeRectangle(3,5);

//4. Function to print downward stairs: 

 function makeDownwardStairs(height){
    let downStairs="";
    for (let i=0;i<height;i++){
        downStairs =downStairs+(makeLine(i)+'\n');
    }
    console.log("Downstring using Makeline function: \n" + downStairs);
    return downStairs;
 }
 //makeDownwardStairs(6);

 //5.Function to print makespaceline:


 function makeSpaceLine(numSpaces, numChars){
    let spaceLine="";
    let spaces = makeSpace(numSpaces);
    for(let i=0;i<numChars;i++){
        spaceLine=spaceLine+(makeLine(1));
        //console.log(spaceLine);
    }
    //console.log("Spaceline:"+spaces+spaceLine+spaces);
    return spaces+spaceLine+spaces;
}

    function makeSpace(numSpaces){
        let space="";
        for (let i=0;i<numSpaces;i++){
            space = space+" ";
        }
        //console.log(space);
        return space;
    }

 //makeSpaceLine(5,5);

 //6.Function to print  Isosceles triangle:
 
 function makeIsoscelesTriangle(height){
    let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height-i-1, 2*i+1 )+'\n');
   
  }
  //console.log("isosceles triange: \n" + triangle);
  return triangle;
}
 //makeIsoscelesTriangle(6); 

//7.Function to print diamond:

function makeDiamond(height){
 let diamond="";
    diamond= diamond+makeIsoscelesTriangle(height)+reversed(height);
    console.log(diamond);
   return diamond;
}
makeDiamond(7);

//function reverse:
function reversed(height){
let str = "";
for (let i = height-1; i >=0; i--) {
str = str + (makeSpaceLine(height-i-1,2*i+1)+'\n');
}
//console.log(str);
return str;
}
//reversed(3);