
const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var base_cabinet1 = "";
var base_cabinet2 = "";
var base_cabinet3 = "";
var base_cabinet4 = "";

var Backsplash_01 = "";
var floor = "";
var wall = "";

var sink0 = "";
var sink1 = "";
var sink2 = "";

var wallCabinet = "";

var cabinethandle = "";

var door0 = ""
var door1 = ""
var door2 = ""
var door3 = ""
var door4 = ""
var door5 = ""

const scene = new BABYLON.Scene(engine);

// /**** Set camera and light *****/
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.5, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 1, 0));
camera.attachControl(canvas, true);
camera.lowerRadiusLimit = 3;
camera.upperRadiusLimit = 3;
camera.upperBetaLimit = Math.PI / 2;

// const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0),scene);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.5, 0.6, 0.2), scene);

// const light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.1, 1, 0),scene);

const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);

var page_url = window.location.href
var model_name = page_url.split("/")[6].split("#")[0];
console.log(page_url)
// console.log(model_name)
// function set_model_name(_name){
//     model_name = _name.split("/")[1];
//     console.log("The function has been called!");
// }

const result = BABYLON.SceneLoader.ImportMeshAsync("", "/upload/models/", model_name, scene).then((result) => {
    // const result = BABYLON.SceneLoader.ImportMeshAsync("", "/upload/models/", "YOS_P_kitchen_21st_Oct_3BjjgoI.glb", scene).then((result) => { 


    // It gives value of all the present components in a model
    for (let i = 0; i < result.meshes.length; i++) {
        console.log(result.meshes[i].id)
    }

    // wall = scene.getMeshByName("Walls_primitive0");

    wall0 = scene.getMeshByName("Walls_primitive0");
    wall1 = scene.getMeshByName("Walls_primitive1");

    // floor = scene.getMeshByName("Floor_Wood_01");

    floor0 = scene.getMeshByName('Floor 12"*24"');
    floor1 = scene.getMeshByName('Floor 24"*24"');

    // wallCabinet = scene.getMeshByName("Wall Cabinet_01");

    countertop1 = scene.getMeshByName("COUNTERTOP.001");
    countertop2 = scene.getMeshByName("COUNTERTOP.002");
    countertop3 = scene.getMeshByName("COUNTERTOP.003");
    countertop4 = scene.getMeshByName("COUNTERTOP.004");
    countertop5 = scene.getMeshByName("COUNTERTOP.005");
    countertop6 = scene.getMeshByName("COUNTERTOP.006");
    countertop7 = scene.getMeshByName("COUNTERTOP.007");
    countertop8 = scene.getMeshByName("COUNTERTOP.008");
    countertop10 = scene.getMeshByName("COUNTERTOP.010");

    base_cabinet0 = scene.getMeshByName("BasCabinet_primitive0");
    base_cabinet1 = scene.getMeshByName("BasCabinet_primitive1");
    wallCabinet0 = scene.getMeshByName("WallCabinet_primitive0");
    wallCabinet1 = scene.getMeshByName("WallCabinet_primitive1");

    // base_cabinet3 = scene.getMeshByName("Base cabinet_03");
    // base_cabinet4 = scene.getMeshByName("Base cabinet_04");

    // Backsplash_01 = scene.getMeshByName("Backsplash_01");

    Backsplash = scene.getMeshByName("BackSplash");

    // sink0 = scene.getMeshByName("Sink_01_primitive0");
    // sink1 = scene.getMeshByName("Sink_01_primitive1");
    // sink2 = scene.getMeshByName("Sink_01_primitive2");

    faucet = scene.getMeshByName("Faucet");

    sink1 = scene.getMeshByName("WashBasin_primitive0");
    sink2 = scene.getMeshByName("WashBasin_primitive1");

    cabinethandle = scene.getMeshByName("Handles");

    door0 = scene.getMeshByName("Door Panel_primitive0");
    door1 = scene.getMeshByName("Door Panel_primitive1");
    door2 = scene.getMeshByName("Door_primitive0");
    door3 = scene.getMeshByName("Door_primitive0");
    door4 = scene.getMeshByName("Door_primitive0");
    door5 = scene.getMeshByName("Door_primitive3");

});
// Add your code here matching the playground format
const createScene = async function () {


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

function changeWall(_src) {
    const color = _src.target.attributes.mycolor.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const wallMat0 = new BABYLON.StandardMaterial("Walls_primitive0");
    const wallMat1 = new BABYLON.StandardMaterial("Walls_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    wallMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    wallMat1.diffuseColor = new BABYLON.Color3(r, g, b);

    wall0.material = wallMat0;
    wall1.material = wallMat1;

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
function changeFloor(_src) {

    console.log(_src)

    const floorMat = new BABYLON.StandardMaterial('Floor 12"*24"');

    floorMat.diffuseTexture = new BABYLON.Texture(_src)

    floor0.material = floorMat;
    floor1.material = floorMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Change Floor Tile Size
function changeFloorSize(_src) {

    floor_size = _src.target.innerHTML;  // floor_size will be a string

    if (floor_size == 'Floor 12"*24"') {
        _src.target.parentElement.previousElementSibling.innerHTML = floor_size;
        floor0.setEnabled(true);    // Setting 12x24 true
        floor1.setEnabled(false);    // Setting 24x24 false
    }
    else {
        _src.target.parentElement.previousElementSibling.innerHTML = floor_size;
        floor1.setEnabled(true);    // Setting 24x24 true
        floor0.setEnabled(false);    // Setting 12x24 false
    }

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
function changeBackSplash(_src) {
    console.log(_src)

    const backSplash = new BABYLON.StandardMaterial("BackSplash");
    backSplash.diffuseTexture = new BABYLON.Texture(_src)

    Backsplash.material = backSplash;

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
function changeCountertop(_src) {
    console.log(_src)

    const counterTopMat1 = new BABYLON.StandardMaterial("COUNTERTOP.001");

    counterTopMat1.diffuseTexture = new BABYLON.Texture(_src)

    countertop1.material = counterTopMat1;
    countertop2.material = counterTopMat1;
    countertop3.material = counterTopMat1;
    countertop4.material = counterTopMat1;
    countertop5.material = counterTopMat1;
    countertop6.material = counterTopMat1;
    countertop7.material = counterTopMat1;
    countertop8.material = counterTopMat1;
    countertop10.material = counterTopMat1;

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
function changebaseCabinet2(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const basecabMat0 = new BABYLON.StandardMaterial("BasCabinet_primitive0");
    const basecabMat1 = new BABYLON.StandardMaterial("BasCabinet_primitive1");
    const wallcabMat0 = new BABYLON.StandardMaterial("WallCabinet_primitive0");
    const wallcabMat1 = new BABYLON.StandardMaterial("WallCabinet_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    basecabMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    basecabMat1.diffuseColor = new BABYLON.Color3(r, g, b);
    wallcabMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    wallcabMat1.diffuseColor = new BABYLON.Color3(r, g, b);

    base_cabinet0.material = basecabMat0;
    base_cabinet1.material = basecabMat1;
    wallCabinet0.material = wallcabMat0;
    wallCabinet1.material = wallcabMat1;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}// end of changebaseCabinet2

//cabinethandle
function changecabinethandle(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const cabinethandleMat = new BABYLON.StandardMaterial("Handles");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    cabinethandleMat.diffuseColor = new BABYLON.Color3(r, g, b);

    cabinethandle.material = cabinethandleMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}// end of cabinethandle

//Wall Cabinet
function changeWallCabinet(_src) {
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
function changeSink(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const sinkMat0 = new BABYLON.StandardMaterial("Faucet");
    const sinkMat1 = new BABYLON.StandardMaterial("WashBasin_primitive0");
    const sinkMat2 = new BABYLON.StandardMaterial("WashBasin_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    sinkMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    sinkMat1.diffuseColor = new BABYLON.Color3(r, g, b);
    sinkMat2.diffuseColor = new BABYLON.Color3(r, g, b);

    sink0.material = sinkMat0;
    sink1.material = sinkMat1;
    sink2.material = sinkMat2;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Faucet
function changeFaucet(_src) {

    const color = _src.target.attributes.mycolor.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const faucetMat = new BABYLON.StandardMaterial("Faucet");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    faucetMat.diffuseColor = new BABYLON.Color3(r, g, b);

    faucet.material = faucetMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;
}

//Door
function changeDoor(_src) {

    const color = _src.target.attributes.mycolor.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const doorMat0 = new BABYLON.StandardMaterial("Door Panel_primitive0");
    const doorMat1 = new BABYLON.StandardMaterial("Door Panel_primitive1");
    const doorMat2 = new BABYLON.StandardMaterial("Door_primitive0");
    const doorMat3 = new BABYLON.StandardMaterial("Door_primitive1");
    const doorMat4 = new BABYLON.StandardMaterial("Door_primitive2");
    const doorMat5 = new BABYLON.StandardMaterial("Door_primitive3");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    doorMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    doorMat1.diffuseColor = new BABYLON.Color3(r, g, b);
    doorMat2.diffuseColor = new BABYLON.Color3(r, g, b);
    doorMat3.diffuseColor = new BABYLON.Color3(r, g, b);
    doorMat4.diffuseColor = new BABYLON.Color3(r, g, b);
    doorMat5.diffuseColor = new BABYLON.Color3(r, g, b);

    door0.material = doorMat0;
    door1.material = doorMat1;
    door2.material = doorMat2;
    door3.material = doorMat3;
    door4.material = doorMat4;
    door5.material = doorMat5;

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

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const groundMat = new BABYLON.StandardMaterial("BasCabinet_primitive0");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    groundMat.diffuseColor = new BABYLON.Color3(r, g, b);
    // groundMat.diffuseColor = new BABYLON.Color3.Red();

    wall.material = groundMat

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

} // end of printColor