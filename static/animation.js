
const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var base_cabinet1 = "";
var base_cabinet2 = "";
var base_cabinet3 = "";
var base_cabinet4 = "";

var Backsplash_01 = "";
var floor ="";
var wall ="";

var sink0="";
var sink1="";
var sink2="";

var wallCabinet = "";


const scene = new BABYLON.Scene(engine);

// /**** Set camera and light *****/
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2.5 , Math.PI/2.5 , 5, new BABYLON.Vector3(0, 1, 0));
camera.attachControl(canvas, true);
camera.lowerRadiusLimit = 3;
camera.upperRadiusLimit = 3;
camera.upperBetaLimit = Math.PI/2;

// const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0),scene);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.5, 0.6, 0.2),scene);

// const light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.1, 1, 0),scene);

const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10},scene);

const result = BABYLON.SceneLoader.ImportMeshAsync("", "/static/models/", "YOS P kitchen.glb",scene).then((result) => {
    
    
    // It gives value of all the present components in a model
    // for (let i = 0; i < result.meshes.length; i++){
    //     console.log(result.meshes[i].id)
    // }
    
    wall = scene.getMeshByName("Wall_01");

    floor = scene.getMeshByName("Floor_Wood_01");

    wallCabinet = scene.getMeshByName("Wall Cabinet_01");

    countertop1 = scene.getMeshByName("Countertop_01");
    countertop2 = scene.getMeshByName("Countertop_02");

    base_cabinet1 = scene.getMeshByName("Base cabinet_01");
    base_cabinet2 = scene.getMeshByName("Base cabinet_02");
    base_cabinet3 = scene.getMeshByName("Base cabinet_03");
    base_cabinet4 = scene.getMeshByName("Base cabinet_04");

    Backsplash_01 = scene.getMeshByName("Backsplash_01"); 

    sink0 = scene.getMeshByName("Sink_01_primitive0");
    sink1 = scene.getMeshByName("Sink_01_primitive1");
    sink2 = scene.getMeshByName("Sink_01_primitive2");
   
});
// Add your code here matching the playground format
const createScene = async  function () {


        // const tvMat = new BABYLON.StandardMaterial("tvMat");
        // tvMat.diffuseTexture = new BABYLON.Texture(val)
        // tv.material = tvMat;

        
        engine.runRenderLoop(function () {
            scene.render();
        });
        
        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
        engine.resize();
        });


return scene;

};

createScene();

function changeWall(_src){
    console.log(_src)
    const wallMat = new BABYLON.StandardMaterial("Wall_01");
    wallMat.diffuseTexture = new BABYLON.Texture(_src,scene)

    wall.material = wallMat; //new BABYLON.Color3(0,0,1);
    
    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}

//Change Floor Pattern
function changeFloor(_src){
    console.log(_src)
    const floorMat = new BABYLON.StandardMaterial("Floor_Wood_01");
    floorMat.diffuseTexture = new BABYLON.Texture(_src)

    floor.material = floorMat;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}

//Backsplash
function changeBackSplash(_src){
    console.log(_src)
    const backSplash = new BABYLON.StandardMaterial("Backsplash_01");
    backSplash.diffuseTexture = new BABYLON.Texture(_src)

    Backsplash_01.material = backSplash;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}

//CounterTop
function changeCountertop(_src){
    console.log(_src)
    const counterTopMat = new BABYLON.StandardMaterial("Countertop_01");
    counterTopMat.diffuseTexture = new BABYLON.Texture(_src)

    countertop1.material = counterTopMat;
    countertop2.material = counterTopMat;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}

//base_cabinet2
function changebaseCabinet2(_src){
    console.log(_src)
    const counterTopMat = new BABYLON.StandardMaterial("Countertop_01");
    counterTopMat.diffuseTexture = new BABYLON.Texture(_src)

    base_cabinet1.material = counterTopMat;
    base_cabinet2.material = counterTopMat;
    base_cabinet3.material = counterTopMat;
    base_cabinet4.material = counterTopMat;


    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}// end of changebaseCabinet2


//Wall Cabinet
function changeWallCabinet(_src){
    console.log(_src)
    const wallcabinet = new BABYLON.StandardMaterial("Wall Cabinet_01");
    wallcabinet.diffuseTexture = new BABYLON.Texture(_src)

    wallCabinet.material = wallcabinet;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}

//Sink
function changeSink(_src){
    console.log(_src)
    const sink = new BABYLON.StandardMaterial("Wall Cabinet_01");
    sink.diffuseTexture = new BABYLON.Texture(_src)

    sink0.material = sink;
    sink1.material = sink;
    sink2.material = sink;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}


function printColor(ev) {
    const color = ev.target.value
    var r = parseInt(color.substr(1,2), 16)
    var g = parseInt(color.substr(3,2), 16)

    var b = parseInt(color.substr(5,2), 16)
    r = r/100;
    g = g/100;
    b = b/100;
    const groundMat = new BABYLON.StandardMaterial("Wall_01");
    groundMat.diffuseColor = new BABYLON.Color3(r,g,b);
    // groundMat.diffuseColor = new BABYLON.Color3.Red();

    wall.material =  groundMat

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

  } // end of printColor