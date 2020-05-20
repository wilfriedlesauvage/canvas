        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

      
        // TETE
        ctx.beginPath();
        ctx.fillStyle='#a77f4a';
        ctx.strokeStyle='#a77f4a';
        ctx.arc(300, 150, 70, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        
        ctx.beginPath(); //SOURCILS
        ctx.strokeStyle='white';
        ctx.moveTo(260,110);
        ctx.quadraticCurveTo(275, 90, 290, 110);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath(); //SOURCILS
        ctx.strokeStyle='white';
        ctx.moveTo(310,110);
        ctx.quadraticCurveTo(325, 90, 340, 110);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath(); //YEUX
        ctx.fillStyle='#FFFFFF';
        ctx.arc(275, 130, 14, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); //YEUX
        ctx.fillStyle='#FFFFFF';
        ctx.arc(325, 130, 14, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); //BOUCHE
        ctx.strokeStyle='red';
        ctx.moveTo(260,170);
        ctx.quadraticCurveTo(300, 190, 340, 170);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath(); //BOUCHE
        ctx.strokeStyle='red';
        ctx.moveTo(260,170);
        ctx.quadraticCurveTo(300, 210, 340, 170);
        ctx.stroke();
        ctx.closePath();



        // CORPS BASE
        ctx.beginPath();
        ctx.fillStyle='#a77f4a';
        ctx.strokeStyle='#a77f4a';
        ctx.rect(237, 220, 125, 230);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        // BOUT DES BRAS
        ctx.beginPath(); 
        ctx.strokeStyle='#a77f4a';
        ctx.moveTo(100,199);
        ctx.quadraticCurveTo(50, 230, 100, 260);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.strokeStyle='#a77f4a';
        ctx.moveTo(500,199);
        ctx.quadraticCurveTo(550, 230, 500, 260);
        ctx.fill();
        ctx.closePath();





        // CORPS BOUTON VIOLETS
        ctx.beginPath();
        ctx.fillStyle='#8f60ed';
        ctx.arc(300, 310, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='#8f60ed';
        ctx.arc(300, 370, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        // BRAS
        ctx.beginPath();
        ctx.fillStyle='#a77f4a';
        ctx.rect(100, 200, 400, 60);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        //JAMBES
        ctx.beginPath();
        ctx.fillStyle='#a77f4a';
        ctx.rect(237, 450, 50, 120);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='#a77f4a';
        ctx.rect(312, 450, 50, 120);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        //BOUT DES JAMBES
        ctx.beginPath(); //BOUCHE
        ctx.strokeStyle='red';
        ctx.moveTo(236,570);
        ctx.quadraticCurveTo(260, 620, 288, 570);
        ctx.fill();
        ctx.closePath();

        //BASSIN
        ctx.beginPath(); //SOURCILS
        ctx.strokeStyle='red';
        ctx.moveTo(260,510);
        ctx.quadraticCurveTo(275, 350, 290, 420);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath(); //BOUCHE
        ctx.strokeStyle='red';
        ctx.moveTo(363,570);
        ctx.quadraticCurveTo(335, 620, 311, 570);
        ctx.fill();
        ctx.closePath();

       

            