// Milestone 1: display Snake in the middle of the board (1 div) + snake starts moving to the right 

//- snake needs to have (store) direction
//- every 100ms, we move the div based on that direction

//Snake{
   // constructor(){
    //    this.width = 
    //  this.height = 
    //   this.positionX = 
    //  this.positionY = 
    //  this.direction = "right" // 4 options: "left", "right", "up", "down"
    //}
//}

//const snakePlayer = document.getElementsByClassName("snake");

class Snake {
    constructor(){
        this.positionX = 20;
        this.positionY = 20;
        this.width = 3 ;
        this.height = 5;
        this.direction = null;

        this.domElement = null;

        this.createDomElement()

    }

    createDomElement(){
        this.domElement = document.createElement("div")
        this.domElement.id = "snake";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
    


        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }

    moveLeft(){
       // if (this.positionX + this.width > 3){
            this.positionX--;
        //}
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
       // if (this.positionX + this.width < 70){
            this.positionX++; 
        //}
        this.domElement.style.left = this.positionX + "vw";
    }
    moveUp(){
       // if (this.positionY + this.height < 100 ){ 
            this.positionY++;
        //}
        this.domElement.style.bottom = this.positionY + "vh";
    }
    moveDown(){
        //if (this.positionY + this.height  -4){
            this.positionY--;
        //}
        this.domElement.style.bottom = this.positionY + "vh";
    }
}


class Food {
    constructor(){
        this.positionX = 20; // random posX
        this.positionY = 20; //random posY
        this.width = 3;
        this.height = 5;
                    

        this.domElement = null;

        this.createDomElement();
    }
                
                
    createDomElement(){
        this.domElement = document.createElement("div")
        this.domElement.id = "food";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
                        
                    
                    
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
}

let food = new Food();

const snake = new Snake();

setInterval(() => {
    if ((snake.positionX <0) || (snake.positionX + snake.width > 70) || (snake.positionY + snake.height > 100 ) || (snake.positionY < 3))
     {
       console.log("Game over");
      location.href = './gameover.html';
    }
    if (snake.direction === "Right"){
        snake.moveRight();
    }
    if (snake.direction === "Left"){
        snake.moveLeft();
    }
    if (snake.direction === "Down"){
        snake.moveDown();
    }
    if (snake.direction === "Up"){
        snake.moveUp();
    }

    // check collision with food
    /* 
        if collision = true
        food.domElement.remove()
        food = null
        food = new Food ()
    */
 }, 100);

 document.addEventListener("keydown", (event) => {
    console.log(event.key)

    if (event.key === "ArrowLeft"){
        snake.direction = "Left"
    }
    else if (event.key === "ArrowRight"){
        snake.direction = "Right"
    }
    else if (event.key === "ArrowDown"){
        snake.direction = "Down"
        }
    else if (event.key === "ArrowUp"){
        snake.direction = "Up"
                    }
                })

// if (this.positionX + this.width < 3){
//     this.positionX--;
// }{ return "game over"}
// if (this.positionX + this.width < 70){
//     this.positionX++;}
//  {return "game over"}
// if (this.positionY + this.height > 100 ){ 
//     this.positionY++;}{
//     return "game over"}
//  if (this.positionY + this.height < 5){
//         this.positionY--;}{
//     return "game over"}

// if ((this.positionX + this.width < 3) || (this.positionX + this.width < 70) || (this.positionY + this.height > 100 ) ||(this.positionY + this.height < 5))
//       {
//         console.log("Game over")


