function levelTypeSet(){
    switch(level){
        case 1:
            obstacleTypes.push('Lava', 'Monkeys');
            break
        case 3:
            obstacleTypes.push('Obstacles');
            break
        case 5:
            obstacleTypes = ['Monkeys', 'Obstacles'];
        case 6:
            obstacleTypes = ['Obstacles', 'Snakes'];
        case 7:
            obstacleTypes.push('Lava');
        case 8:
            obstacleTypes = ['Arrows', 'Balls', 'Riddle'];
    }
}
function levelPlay(num){
    //var lavaLevel = 1;
    var typ = obstacleTypes[num];
    if(typ === "Lava"){
        //Insert code for lava, might add different parameters
        play = 1;
        background(lavaImg);
        switch(level){
            case 1:
                var complete = 0;
                var box1 = createSprite(displayWidth/2, (displayHeight/4) * 3, 50, 120);
                box1.shapeColor = "white";
                var box2 = createSprite(displayWidth/2 - 50, (displayHeight/4*3) - 60, 100, 50);
                box2.shapeColor = "white";
                var box3 = createSprite(displayWidth/2 + 48, (displayHeight/8) * 5, 96, 50);
                box3.shapeColor = "white";
                var box4 = createSprite(displayWidth/2 - 100, (displayHeight/4*3) - 100, 50, 200);
                box4.shapeColor = "white";
                var ch = createSprite(displayWidth/2, ((displayHeight/4) * 3) + 55, 35, 35);
                ch.shapeColor = "grey";
                while(complete === 0){
                    background("red");
                    if(keyCode === 38){
                        ch.y -= 5;
                    }
                    if(keyCode === 37){
                        ch.x -= 5;
                    }
                    if(keyCode === 39){
                        ch.x += 5;
                    }
                    if(keyCode === 40){
                        ch.y += 5;
                    }
                    if(ch.x < displayWidth/2 - 25 || ch.x > displayWidth/2 + 25 || ch.y < ((displayHeight/4) * 3) - 60 || ch.y > ((displayHeight/4) * 3) + 60){
                        ch.x = displayWidth/2;
                        ch.y = (displayHeight / 4) * 3;
                        fireResis -= 1;
                    }
                }
                drawSprites();
        }
    }
    else if(typ === "Monkeys"){
        //Insert code for monkeys
    }
    else if(typ === "Obstacles"){
        //Insert code for obstacles
    }
    else if(typ === "Snakes"){
        //Insert code for snakes
    }
    else if(typ === "Arrows"){
        //Insert code for arrows
    }
    else if(typ === "Balls"){
        //Insert code for balls
    }
    else{
        //Insert code for the riddle
    }
}