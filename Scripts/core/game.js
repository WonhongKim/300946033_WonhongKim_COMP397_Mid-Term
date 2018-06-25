/* this code are made by wonhongkim 300946033
Date : June 25, 2018
Cousre : COMP 397

 index.html (stating file)
 game.js (js file)

*/

(function () {
    // Game VARIABLES
    var canvas = document.getElementById("canvas");
    var stage;
    var startbutton;
    var helloLabel;
    var imageExample;
    function Init() {
        console.log("Initialization Started");
        // var myVariable = "foo";
        Start();
    }
    function Start() {
        console.log("Starting Application....");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        startbutton = new createjs.Bitmap("./Assets/image/StartButton.png");
        startbutton.x=200;
        startbutton.y=350;
        stage.addChild(startbutton);
        stage.update();

        // when people press the start button  two dice will be appeared

        canvas.addEventListener('click', function (e) {

            stage.removeAllChildren();

            startbutton = new createjs.Bitmap("./Assets/image/StartButton.png");
            startbutton.x=200;
            startbutton.y=350;
            stage.addChild(startbutton);
            

            // when pressing the imageLoad button & Random image will be appread.

            var Test = Math.floor(Math.random() * 60 + 1)
            var Test2 = Math.floor(Math.random() * 60 + 1)
            console.log(Test);
            console.log(Test2);
           
            // for dice 1
            switch (Test){
                case checkRange(Test, 1, 10): 
                imageExample = new createjs.Bitmap("./Assets/image/1.png");
                imageExample.x=50;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("1", "20px Consolas", "#00000");
                helloLabel.x = 145;
                helloLabel.y = 310;
                stage.addChild(helloLabel);

                Update();
                break;
        
                case checkRange(Test, 11, 20):
                imageExample = new createjs.Bitmap("./Assets/image/2.png");
                imageExample.x=50;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("2", "20px Consolas", "#00000");
                helloLabel.x = 145;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
                
                case checkRange(Test, 21, 30): 
                imageExample = new createjs.Bitmap("./Assets/image/3.png");
                imageExample.x=50;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("3", "20px Consolas", "#00000");
                helloLabel.x = 145;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
        
                case checkRange(Test, 31, 40):
                imageExample = new createjs.Bitmap("./Assets/image/4.png");
                imageExample.x=50;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("4", "20px Consolas", "#00000");
                helloLabel.x = 145;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
               
                case checkRange(Test, 41, 50): 
                imageExample = new createjs.Bitmap("./Assets/image/5.png");
                imageExample.x=50;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("5", "20px Consolas", "#00000");
                helloLabel.x = 145;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
        
                case checkRange(Test, 51, 60):
                imageExample = new createjs.Bitmap("./Assets/image/6.png");
                imageExample.x=50;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("6", "20px Consolas", "#00000");
                helloLabel.x = 145;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
              
            }
            
            // for dice 2

            switch (Test2){
                case checkRange(Test2, 1, 10): 
                imageExample = new createjs.Bitmap("./Assets/image/1.png");
                imageExample.x=300;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("1", "20px Consolas", "#00000");
                helloLabel.x = 390;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
        
                case checkRange(Test2, 11, 20):
                imageExample = new createjs.Bitmap("./Assets/image/2.png");
                imageExample.x=300;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("2", "20px Consolas", "#00000");
                helloLabel.x = 390;
                helloLabel.y = 310;
                310
                stage.addChild(helloLabel);
                Update();
                break;
                
                case checkRange(Test2, 21, 30): 
                imageExample = new createjs.Bitmap("./Assets/image/3.png");
                imageExample.x=300;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("3", "20px Consolas", "#00000");
                helloLabel.x = 390;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
        
                case checkRange(Test2, 31, 40):
                imageExample = new createjs.Bitmap("./Assets/image/4.png");
                imageExample.x=300;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("4", "20px Consolas", "#00000");
                helloLabel.x = 390;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
               
                case checkRange(Test2, 41, 50): 
                imageExample = new createjs.Bitmap("./Assets/image/5.png");
                imageExample.x=300;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("5", "20px Consolas", "#00000");
                helloLabel.x = 390;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
        
                case checkRange(Test2, 51, 60):
                imageExample = new createjs.Bitmap("./Assets/image/6.png");
                imageExample.x=300;
                imageExample.y=100;
                stage.addChild(imageExample);

                helloLabel = new createjs.Text("5", "20px Consolas", "#00000");
                helloLabel.x = 390;
                helloLabel.y = 310;
                stage.addChild(helloLabel);
                Update();
                break;
                
                Update();
                break;
        
            }

           
            

        });

         

        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game Started..");

    
    }    

    // Range checking for imageLoad( for Random )
    function checkRange(value, lowerBounds, upperBounds) {
        if (value >= lowerBounds && value <= upperBounds) {
            return value;
        }
        else {
            return !value;
        }
    }   
    
    window.onload = Init;
    


})();

