var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Antonia Solar");
                select("#aprendizaje").html("y ser feliz.");
                noStroke();
            }
            function draw() {
                background(255, 216, 223);
                orbitControl();
                pointLight(255,255,255, valor/3, valor/2, 50);
                specularMaterial(255);
                shininess(50);
                metalness(1);
                fill(150, 9, 201);
                cone(valor / 30, 50);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
       