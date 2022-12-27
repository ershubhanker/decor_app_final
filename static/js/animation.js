
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

    wall0 = scene.getMeshByName("Wall_Full_12x12");
    wall1 = scene.getMeshByName("Wall_Full_24x24");
    wall2 = scene.getMeshByName("Wall_Full_12x24");
    wall3 = scene.getMeshByName("Wall_Grout_Full");
    wall4 = scene.getMeshByName("Wall_Full_3x6");
    wall5 = scene.getMeshByName("Wall_Full_6x10");
    wall6 = scene.getMeshByName("Wall_Half_12x12");
    wall7 = scene.getMeshByName("Wall_Half_24x24");
    wall8 = scene.getMeshByName("Wall_Half_12x24");
    wall9 = scene.getMeshByName("Wall_Grout_Half");
    wall10 = scene.getMeshByName("Wall_Half_3x6");
    wall11 = scene.getMeshByName("Wall_Half_6x10");
    full_wall = scene.getMeshByName("Wall");

    showerwall0 = scene.getMeshByName("Shower_Tile_3x6");
    showerwall1 = scene.getMeshByName("Shower_Tile_6x10");
    showerwall2 = scene.getMeshByName("Shower_Tile_12x12");
    showerwall3 = scene.getMeshByName("Shower_Tile_12x24");
    showerwall4 = scene.getMeshByName("Shower_Tile_24x24");
    showerwall5 = scene.getMeshByName("Shower_Grout");

    trimming = scene.getMeshByName("Trimming");
    trimming.setEnabled(false);     //by default its false because we are displaying Full Wall in menu as default in which we don't need trimming

    // wall1 = scene.getMeshByName("Walls_primitive1");

    // floor = scene.getMeshByName("Floor_Wood_01");

    floor0 = scene.getMeshByName('Floor_Tiles_12X24');
    floor1 = scene.getMeshByName('Floor_Tiles_24X24');
    floor2 = scene.getMeshByName('Floor_Tiles_12X12');
    floor3 = scene.getMeshByName('Floor_Grout');
    // floor3.position.y = -0.1;

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

    Cabinet0 = scene.getMeshByName("VanityCabinet");

    // base_cabinet3 = scene.getMeshByName("Base cabinet_03");
    // base_cabinet4 = scene.getMeshByName("Base cabinet_04");

    // Backsplash_01 = scene.getMeshByName("Backsplash_01");

    Backsplash = scene.getMeshByName("BackSplash");

    // sink0 = scene.getMeshByName("Sink_01_primitive0");
    // sink1 = scene.getMeshByName("Sink_01_primitive1");
    // sink2 = scene.getMeshByName("Sink_01_primitive2");

    faucet = scene.getMeshByName("SinkFaucet");

    sink0 = scene.getMeshByName("Sink");

    cabinethandle = scene.getMeshByName("VanityHandles");

    door0 = scene.getMeshByName("Door_primitive0");
    door1 = scene.getMeshByName("Door_primitive1");
    door2 = scene.getMeshByName("Door Panel");

    doorhandle = scene.getMeshByName("DoorHandle");

    mirror0 = scene.getMeshByName("Mirror_primitive0");
    mirror1 = scene.getMeshByName("Mirror_primitive1");

    vanitylamp0 = scene.getMeshByName("VanityLamp_primitive0");
    vanitylamp1 = scene.getMeshByName("VanityLamp_primitive1");

    showerfaucet0 = scene.getMeshByName("Shower&Tub_Faucet_001_primitive0");
    showerfaucet1 = scene.getMeshByName("Shower&Tub_Faucet_001_primitive1");
    showerfaucet2 = scene.getMeshByName("Shower&Tub_Faucet_primitive0");
    showerfaucet3 = scene.getMeshByName("Shower&Tub_Faucet_primitive1");

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

function changeFullWall(_src) {

    wall0.setEnabled(false);
    wall1.setEnabled(false);
    wall2.setEnabled(false);
    wall3.setEnabled(false);
    wall4.setEnabled(false);
    wall5.setEnabled(false);
    wall6.setEnabled(false);
    wall7.setEnabled(false);
    wall8.setEnabled(false);
    wall9.setEnabled(false);
    wall10.setEnabled(false);
    wall11.setEnabled(false);

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const fullwallMat = new BABYLON.StandardMaterial("Wall");

    console.log(`Full Wall Color reset to red: ${r}, green: ${g}, blue: ${b}`)

    fullwallMat.diffuseColor = new BABYLON.Color3(r, g, b);

    full_wall.material = fullwallMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;
}

function changeWall(_src) {

    const wallMat0 = new BABYLON.StandardMaterial("Wall_Full_12x12");

    wallMat0.diffuseTexture = new BABYLON.Texture(_src)

    wall0.material = wallMat0;
    wall1.material = wallMat0;
    wall2.material = wallMat0;
    wall3.material = wallMat0;
    wall4.material = wallMat0;
    wall5.material = wallMat0;
    wall6.material = wallMat0;
    wall7.material = wallMat0;
    wall8.material = wallMat0;
    wall9.material = wallMat0;
    wall10.material = wallMat0;
    wall11.material = wallMat0;

    // wall0.setEnabled(true);
    // wall1.setEnabled(true);
    // wall2.setEnabled(true);
    // wall3.setEnabled(true);
    // wall4.setEnabled(true);
    // wall5.setEnabled(true);
    // wall6.setEnabled(true);
    // wall7.setEnabled(true);
    // wall8.setEnabled(true);
    // wall9.setEnabled(true);
    // wall10.setEnabled(true);
    // wall11.setEnabled(true);

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;
}

//Change Wall Tile Size
function changeWallSize(_src) {
    wall_size = _src.target.innerHTML;  // wall_size will be a string
    _src.target.parentElement.previousElementSibling.innerHTML = wall_size;

    // Make sure the string array blow MATCHES EXACTLY to the HTML string of drop down in render.html
    var wall_string_array = ["Full 12X12", "Full 24X24", "Full 12X24", "Full Grout", "Full 3X6", "Full 6X10", "Half 12X12", "Half 24X24", "Half 12X24", "Half Grout", "Half 3X6", "Half 6X10"];
    var wall_array = [wall0, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11];

    for (let i = 0; i < wall_string_array.length; i++) {
        if (wall_string_array[i] == wall_size) {
            wall_array[i].setEnabled(true);
            console.log(wall_string_array[i], " enabled");
        }
        else {
            wall_array[i].setEnabled(false);
            console.log(wall_string_array[i], " disabled");
        }
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

//Change Floor Pattern
function changeFloor(_src) {

    console.log(_src)

    const floorMat0 = new BABYLON.StandardMaterial('Floor_Tiles_12X24');
    // const floorMat1 = new BABYLON.StandardMaterial('Floor_Tiles_24X24');
    // const floorMat2 = new BABYLON.StandardMaterial('Floor_Tiles_12X12');
    // const floorMat3 = new BABYLON.StandardMaterial('Floor_Grout');

    floorMat0.diffuseTexture = new BABYLON.Texture(_src)
    // floorMat1.diffuseTexture = new BABYLON.Texture(_src)
    // floorMat2.diffuseTexture = new BABYLON.Texture(_src)
    // floorMat3.diffuseTexture = new BABYLON.Texture(_src)

    floor0.material = floorMat0;
    floor1.material = floorMat0;
    floor2.material = floorMat0;
    floor3.material = floorMat0;

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
    _src.target.parentElement.previousElementSibling.innerHTML = floor_size;
    console.log(floor_size);

    if (floor_size == '12X24') {
        // _src.target.parentElement.previousElementSibling.innerHTML = floor_size;
        floor0.setEnabled(true);    // Setting 12x24 true
        floor1.setEnabled(false);    // Setting 24x24 false
        floor2.setEnabled(false);    // Setting 12x12 false
        floor3.setEnabled(false);    // Setting Grout false
    }
    else if (floor_size == '24X24') {

        floor1.setEnabled(true);    // Setting 24x24 true
        floor0.setEnabled(false);    // Setting 12x24 false
        floor2.setEnabled(false);    // Setting 12x12 false
        floor3.setEnabled(false);    // Setting Grout false
    }
    else if (floor_size == 'Grout') {
        floor3.setEnabled(true);    // Setting Grout true
        floor0.setEnabled(false);    // Setting 12x24 false
        floor1.setEnabled(false);    // Setting 12x12 false
        floor2.setEnabled(false);    // Setting 12x12 false
    }
    else {
        // _src.target.parentElement.previousElementSibling.innerHTML = floor_size;
        floor2.setEnabled(true);    // Setting 12x12 true
        floor1.setEnabled(false);    // Setting 24x24 false
        floor0.setEnabled(false);    // Setting 12x24 false
        floor3.setEnabled(false);    // Setting Grout false
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

//cabinet
function changeCabinet(_src) {

    const color = _src.target.attributes.mycolor.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const cabinetMat = new BABYLON.StandardMaterial("VanityCabinet");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    cabinetMat.diffuseColor = new BABYLON.Color3(r, g, b);

    Cabinet0.material = cabinetMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}// end of cabinethandle

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

    const cabinethandleMat = new BABYLON.StandardMaterial("VanityHandles");

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

    const sinkMat0 = new BABYLON.StandardMaterial("Sink");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    sinkMat0.diffuseColor = new BABYLON.Color3(r, g, b);

    sink0.material = sinkMat0;

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

    const faucetMat = new BABYLON.StandardMaterial("SinkFaucet");

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

    const doorMat = new BABYLON.StandardMaterial("Door_primitive0");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    doorMat.diffuseColor = new BABYLON.Color3(r, g, b);

    door0.material = doorMat;
    door1.material = doorMat;
    door2.material = doorMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;
}

//cabinethandle
function changedoorhardware(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const doorthandleMat = new BABYLON.StandardMaterial("DoorHandle");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    doorthandleMat.diffuseColor = new BABYLON.Color3(r, g, b);

    doorhandle.material = doorthandleMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}// end of cabinethandle

//Mirror
function changeMirror(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const mirrorMat0 = new BABYLON.StandardMaterial("Mirror_primitive0");
    const mirrorMat1 = new BABYLON.StandardMaterial("Mirror_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    mirrorMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    mirrorMat1.diffuseColor = new BABYLON.Color3(r, g, b);

    mirror0.material = mirrorMat0;
    mirror1.material = mirrorMat1;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Vanity Lamp
function changeVanity(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const vanityMat0 = new BABYLON.StandardMaterial("VanityLamp_primitive0");
    const vanityMat1 = new BABYLON.StandardMaterial("VanityLamp_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    vanityMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    vanityMat1.diffuseColor = new BABYLON.Color3(r, g, b);

    vanitylamp0.material = vanityMat0;
    vanitylamp1.material = vanityMat1;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Shower Faucet
function changeShowerFaucet(_src) {

    const color = _src.target.attributes.mycolor.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const sfaucetmat0 = new BABYLON.StandardMaterial("Shower&Tub_Faucet_001_primitive0");
    const sfaucetmat1 = new BABYLON.StandardMaterial("Shower&Tub_Faucet_001_primitive1");
    const sfaucetmat2 = new BABYLON.StandardMaterial("Shower&Tub_Faucet_primitive0");
    const sfaucetmat3 = new BABYLON.StandardMaterial("Shower&Tub_Faucet_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    sfaucetmat0.diffuseColor = new BABYLON.Color3(r, g, b);
    sfaucetmat1.diffuseColor = new BABYLON.Color3(r, g, b);
    sfaucetmat2.diffuseColor = new BABYLON.Color3(r, g, b);
    sfaucetmat3.diffuseColor = new BABYLON.Color3(r, g, b);

    showerfaucet0.material = sfaucetmat0;
    showerfaucet1.material = sfaucetmat1;
    showerfaucet2.material = sfaucetmat2;
    showerfaucet3.material = sfaucetmat3;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;
}

//Change Trimming Color
function changeTrimColor(_src) {

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const trimMat = new BABYLON.StandardMaterial("Trimming");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    trimMat.diffuseColor = new BABYLON.Color3(r, g, b);

    trimming.material = trimMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;
}

//Enables Trimming
function enableTrimming() {

    trimming.setEnabled(true);

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Disables the trimming
function disableTrimming() {

    trimming.setEnabled(false);

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