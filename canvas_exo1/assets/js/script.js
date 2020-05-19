        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        function draw() {
            ctx.fillStyle = "#0b9deb"; //big rectangle
            ctx.fillRect(100, 400, 250, 250);
            ctx.fillStyle = "#a9a9a9"; //small rectangle
            ctx.fillRect(140, 450, 50, 50);
            ctx.fillStyle = "#a9a9a9"; //small rectangle
            ctx.fillRect(260, 450, 50, 50);
            ctx.fillStyle = "#a9a9a9"; //medium rectangle
            ctx.fillRect(175, 550, 100, 100);

            
            ctx.fillStyle = "#de9400";
            ctx.beginPath();
            ctx.moveTo(230, 250); // on dirige le point
            ctx.lineTo(100, 400); // on trace la ligne (invisible si on ne déclare pas de couleurs)
            ctx.lineTo(350, 400); // 
            ctx.closePath();
            ctx.fill(); // 
            }
            

            