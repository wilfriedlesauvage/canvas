        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

      
        ctx.beginPath();
        ctx.fillStyle="#FF4422"; // appliquer de la couleur avec fillstyle
        ctx.lineWidth = 28;
        ctx.arc(170, 100, 70, 0, 2 * Math.PI); // 170 : POSITION X du centre de l'arc
                                               // 720 : POSITION Y du centre de l'arc
                                               // 70  : LE RAYON de l'arc
                                               // 0   : ANGLE DEPART La valeur de l'angle avec laquelle démarre l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                                               // 2 * Math.PI : ANGLE FIN La valeur de l'angle avec laquelle se finit l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                                               
        ctx.stroke(); // stroke permet de tracer les lignes, le contour.
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle="#FF4422"; // appliquer de la couleur avec fillstyle
        ctx.lineWidth = 28;
        ctx.arc(250, 100, 70, 0, 2 * Math.PI); // 170 : POSITION X du centre de l'arc
                                               // 720 : POSITION Y du centre de l'arc
                                               // 70  : LE RAYON de l'arc
                                               // 0   : ANGLE DEPART La valeur de l'angle avec laquelle démarre l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                                               // 2 * Math.PI : ANGLE FIN La valeur de l'angle avec laquelle se finit l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                          
        ctx.stroke(); // stroke permet de tracer les lignes, le contour.
        ctx.closePath();

        //TRIANGLE SHADOW
        ctx.beginPath();
        ctx.moveTo(255, 100);
        ctx.lineTo(350, 50);
        ctx.lineTo(350, 160);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
       
        ctx.beginPath();
        ctx.moveTo(165, 100);
        ctx.lineTo(60, 50);
        ctx.lineTo(60, 160);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
       

        // ECRITAUX

        //C
        ctx.beginPath();
        ctx.fillStyle="#FF4422"; // appliquer de la couleur avec fillstyle
        ctx.lineWidth = 15;
        ctx.arc(50, 230, 35, 0, 2 * Math.PI); // 170 : POSITION X du centre de l'arc
                                               // 720 : POSITION Y du centre de l'arc
                                               // 70  : LE RAYON de l'arc
                                               // 0   : ANGLE DEPART La valeur de l'angle avec laquelle démarre l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                                               // 2 * Math.PI : ANGLE FIN La valeur de l'angle avec laquelle se finit l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                          
        ctx.stroke(); // stroke permet de tracer les lignes, le contour.
        ctx.closePath();
        //TRIANGLE SHADOW
        ctx.beginPath();
        ctx.moveTo(40, 230);
        ctx.lineTo(95, 200);
        ctx.lineTo(95, 260);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();


        //H
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.rect(100, 190, 19, 80);
        ctx.fill();
        ctx.closePath();
             
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.rect(100, 220, 69, 19);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.rect(150, 190, 19, 80);
        ctx.fill();
        ctx.closePath();

        //A
        ctx.beginPath();
        ctx.moveTo(198, 265);
        ctx.lineTo(230, 200);
        ctx.stroke();
