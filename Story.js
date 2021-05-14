class Story{
 constructor(){
     this.button = createButton('Play');
     this.greeting1 = createElement('h2');
     this.greeting2 = createElement('h2');
     this.greeting3 = createElement('h2');
 }
 display(){
     this.greeting1.html("You are looking for a jewel in a forest. ");
     this.greeting2.html("There are several levels you must overcome to find the jewel.");
     this.greeting3.html("Good luck!");
     this.greeting1.position(displayWidth/2 - 100, 50);
     this.greeting2.position(displayWidth/2 - 150, 80);
     this.greeting3.position(displayWidth/2 - 50, 110);
     this.button.position(displayWidth/2, 165);
     this.button.mousePressed(()=>{
         this.greeting1.hide();
         this.greeting2.hide();
         this.greeting3.hide();
         this.button.hide()
         level = 1;
     })
 }   
}