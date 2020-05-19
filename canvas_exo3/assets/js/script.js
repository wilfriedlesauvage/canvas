        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");


            ctx.fillStyle = "#0b9deb"; // appliquer de la couleur avec fillstyle // big rectangle
            ctx.fillRect(100, 400, 500, 250); // appliquer le positionnement x , y, sur le wideport puis la taille x, y. 
            ctx.fillStyle = "#0b9deb"; // appliquer le positionnement x , y, sur le wideport puis la taille x, y.  //medium rectangle
            ctx.fillRect(25, 500, 650, 150);

            ctx.beginPath();
            ctx.fillStyle="#FF4422"; // appliquer de la couleur avec fillstyle
            ctx.arc(170, 720, 70, 0, 2 * Math.PI); // 170 : POSITION X du centre de l'arc
                                                   // 720 : POSITION Y du centre de l'arc
                                                   // 70  : LE RAYON de l'arc
                                                   // 0   : ANGLE DEPART La valeur de l'angle avec laquelle démarre l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                                                   // 2 * Math.PI : ANGLE FIN La valeur de l'angle avec laquelle se finit l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
                                                   
            ctx.stroke(); // stroke permet de tracer les lignes, le contour.
            ctx.fill(); // fill permet de remplir la forme avec la couleur définis précédemment
            ctx.closePath();
            
            ctx.beginPath();
            ctx.fillStyle="#FF4422";
            ctx.arc(525, 720, 70, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
           
        
           

            
            
            

            