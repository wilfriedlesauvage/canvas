        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");


        ctx.fillStyle = "#de9400";
        ctx.beginPath();
        ctx.moveTo(230, 650); // on dirige le point
        ctx.lineTo(100, 400); // on trace la ligne (invisible si on ne déclare pas de couleurs)
        ctx.lineTo(350, 400); // 
        ctx.closePath();
        ctx.fill(); //  
            
        ctx.beginPath();
        ctx.strokeStyle='brown';
        ctx.lineWidth=4;
        ctx.moveTo(100,400);
        ctx.quadraticCurveTo(220, 80, 350, 400);
        ctx.stroke();
        

            
            
            

            