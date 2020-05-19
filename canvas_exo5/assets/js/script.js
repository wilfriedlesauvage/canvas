        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle='#FFFFFF';
        ctx.strokeStyle='#FFFFFF';
        ctx.moveTo(400,400);
        ctx.quadraticCurveTo(520, 150, 650, 400);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        
        ctx.beginPath();
        ctx.fillStyle='#f1f1f1';
        ctx.strokeStyle='#f1f1f1';
        ctx.moveTo(220,500);
        ctx.quadraticCurveTo(520, 250, 830, 500);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();


        ctx.beginPath();
        ctx.fillStyle='#f1f1f1';
        ctx.strokeStyle='#f1f1f1';
        ctx.moveTo(220,500);
        ctx.quadraticCurveTo(520, 730, 830, 500);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
            

            