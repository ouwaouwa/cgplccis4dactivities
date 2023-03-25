const canvas = document.getElementById('canvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');


    

 //diamond
    function DIAMONDS() {
        
        ctx.setTransform(4.5,0,0,5,0,0);
        var angleInRadians = 60 * Math.PI / 180;
        ctx.rotate(angleInRadians);

        var grd1 = ctx.createLinearGradient(0, 0, 300, 200);
        grd1.addColorStop(0, "red");
        grd1.addColorStop(0.2, "maroon");
        grd1.addColorStop(0.4, "red");
        grd1.addColorStop(0.6, "maroon");
        grd1.addColorStop(0.8, "red");
        grd1.addColorStop(1, "maroon");
    
        ctx.fillStyle = grd1;
        ctx.fillRect(130, 15, 50, 50);
        
        ctx.setTransform(2.5,0,0,3,0,0);
        var angleInRadians = 30 * Math.PI / 180;
        ctx.rotate(angleInRadians);

        ctx.fillRect(350, -150, 50, 50);

        ctx.setTransform(1.5,0,0,2,-380,-500);
        var angleInRadians = 65 * Math.PI / 180;
        ctx.rotate(angleInRadians);

        ctx.fillRect(350, -150, 50, 50);
        
    }

//clubs
    function CLUBS() {
    ctx.setTransform(1.7,0,0,1.7,0-50,-50);
    var angleInRadians = -10 * Math.PI / 180;
    ctx.rotate(angleInRadians); 
    var grd2 = ctx.createRadialGradient(500, 450, 250, 500, 500, 1000);

    grd2.addColorStop(0, "black");
    grd2.addColorStop(0.5, "blue");
    grd2.addColorStop(1, "black");

    ctx.fillStyle = grd2;
    ctx.beginPath();
    ctx.arc(100, 200, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.arc(175, 200, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.arc(137.5, 150, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.moveTo(137.5, 200);
    ctx.quadraticCurveTo(137.5, 300, 100, 300);
    ctx.lineTo(175, 300)
    ctx.quadraticCurveTo(137.5, 300, 137.5, 200);
    ctx.fill();

    ctx.setTransform(1,0,0,1,0,0);
    var angleInRadians = 12 * Math.PI / 180;
    ctx.rotate(angleInRadians); 
    ctx.beginPath();
    ctx.arc(700, 700, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.arc(775, 700, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.arc(737.5, 650, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.moveTo(737.5, 700);
    ctx.quadraticCurveTo(737.5, 800, 700, 800);
    ctx.lineTo(775, 800);
    ctx.quadraticCurveTo(737.5, 800, 737.5, 700);
    ctx.fill();


    ctx.setTransform(1,0,0,1,-500,-300);
    var angleInRadians = 12 * Math.PI / 180;
    ctx.rotate(angleInRadians); 
    ctx.beginPath();
    ctx.arc(700, 700, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.arc(775, 700, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.arc(737.5, 650, 50, (Math.PI/180) * 0, (Math.PI/180)*360);
    ctx.fill();
    ctx.moveTo(737.5, 700);
    ctx.quadraticCurveTo(737.5, 800, 700, 800);
    ctx.lineTo(775, 800);
    ctx.quadraticCurveTo(737.5, 800, 737.5, 700);
    ctx.fill();
    
    }


//heart
    function HEARTS(){
        ctx.setTransform(1.2,0,0,1.1,0,0);
        var angleInRadians = -3 * Math.PI / 180;
        ctx.rotate(angleInRadians);

        var grd3 = ctx.createRadialGradient(500, 450, 150, 500, 500, 400);
        grd3.addColorStop(0, "maroon");
        grd3.addColorStop(0.5, "red");
        grd3.addColorStop(1, "maroon");
    
        ctx.fillStyle = grd3;
        ctx.beginPath();
        ctx.moveTo(600, 460)
        ctx.bezierCurveTo(480, 380, 450, 525, 600, 650);
        ctx.moveTo(600, 460)
        ctx.bezierCurveTo(720, 380, 750, 525, 600, 650);
        ctx.fill();


        ctx.setTransform(1.6,0,0,1.6,-15,100);
        var angleInRadians = -25 * Math.PI / 180;
        ctx.rotate(angleInRadians);
        ctx.beginPath();
        ctx.moveTo(400, 160)
        ctx.bezierCurveTo(280, 80, 250, 225, 400, 350);
        ctx.moveTo(400, 160)
        ctx.bezierCurveTo(520, 80, 550, 225, 400, 350);
        ctx.fill();

        ctx.setTransform(1,0,0,1,-100,+980);
        var angleInRadians = -25 * Math.PI / 180;
        ctx.rotate(angleInRadians);
        ctx.beginPath();
        ctx.moveTo(400, 160)
        ctx.bezierCurveTo(280, 80, 250, 225, 400, 350);
        ctx.moveTo(400, 160)
        ctx.bezierCurveTo(520, 80, 550, 225, 400, 350);
        ctx.fill();
    }
    //spade
    function SPADES()
    {
        ctx.setTransform(1.3,0,0,1.3,+50,-300);
        var angleInRadians = 10 * Math.PI / 180;
        ctx.rotate(angleInRadians);

        var grd4 = ctx.createRadialGradient(500,500,500,750,0,0);

        grd4.addColorStop(0, "black");
        grd4.addColorStop(0.5, "blue");
        grd4.addColorStop(1, "black");
    
        ctx.fillStyle = grd4;
        ctx.beginPath();
        ctx.moveTo(420, 430)
        ctx.bezierCurveTo(270, 600, 270, 700, 420, 650);
        ctx.moveTo(420, 430)
        ctx.bezierCurveTo(570, 600, 570, 700, 420, 650);
        ctx.fill();
        ctx.moveTo(415, 650);
        ctx.quadraticCurveTo(415, 750, 350, 750);
        ctx.lineTo(490,750);
        ctx.quadraticCurveTo(425, 750, 425, 650);
        ctx.fill();

        ctx.setTransform(1,0,0,1,+950,+100);
        var angleInRadians = 40 * Math.PI / 180;
        ctx.rotate(angleInRadians);
        
        ctx.beginPath();
        ctx.moveTo(420, 430)
        ctx.bezierCurveTo(270, 600, 270, 700, 420, 650);
        ctx.moveTo(420, 430)
        ctx.bezierCurveTo(570, 600, 570, 700, 420, 650);
        ctx.fill();
        ctx.moveTo(415, 650);
        ctx.quadraticCurveTo(415, 750, 350, 750);
        ctx.lineTo(490,750);
        ctx.quadraticCurveTo(425, 750, 425, 650);
        ctx.fill();

        ctx.setTransform(0.8,0,0,0.8,-70,-280);
        var angleInRadians = -20 * Math.PI / 180;
        ctx.rotate(angleInRadians);
        
        ctx.beginPath();
        ctx.moveTo(420, 430)
        ctx.bezierCurveTo(270, 600, 270, 700, 420, 650);
        ctx.moveTo(420, 430)
        ctx.bezierCurveTo(570, 600, 570, 700, 420, 650);
        ctx.fill();
        ctx.moveTo(415, 650);
        ctx.quadraticCurveTo(415, 750, 350, 750);
        ctx.lineTo(490,750);
        ctx.quadraticCurveTo(425, 750, 425, 650);
        ctx.fill();
    }
    
    HEARTS()
    
    CLUBS()
    
    DIAMONDS()
    SPADES()
    
    

    
   
      
}