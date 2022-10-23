
const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var plant = "";
var tv = "";
var floor ="";
var wall ="";
const scene = new BABYLON.Scene(engine);

// /**** Set camera and light *****/
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / -2.5, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 1.5, 0),scene);
camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0),scene);

const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10},scene);
// ["Plane.002","Plane.008","Cube"]
const result = BABYLON.SceneLoader.ImportMeshAsync("", "/static/models/", "Bedroom.glb",scene).then((result) => {
    
    // console.log(result.meshes[8].id)
    // It gives value of all the present components in a model
    // for (let i = 0; i < result.meshes.length; i++){
    //     console.log(result.meshes[i].id)
    // }
    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
    faceUV[1] = new BABYLON.Vector4(0.25, 0.5, 0.25, 1.0); //front face
    faceUV[2] = new BABYLON.Vector4(0.25, 0.5, 1, 1.0); //right side
    faceUV[3] = new BABYLON.Vector4(0.75, 0.5, 1.0, 1.0); //left side

    // wall = result.meshes[1];
    wall = scene.getMeshByName("Plane.002");

    // floor = result.meshes[2]; {faceUV: faceUV, wrap: true}
    floor = scene.getMeshByName("Cube");
    
    // plant = scene.getMeshByName("Indoor Plant");

    // tv = scene.getMeshByName("Tv Cabinet");
   
});
// Add your code here matching the playground format
const createScene = async  function (val) {

        console.log(val)

        const floorMat = new BABYLON.StandardMaterial("floor");
        floorMat.diffuseTexture = new BABYLON.Texture(val)

        floor.material = floorMat;
        
        engine.runRenderLoop(function () {
            scene.render();
        });
        
        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
        engine.resize();
        });


// return scene;

};

createScene();

function changeIt(_src){
    // console.log(_src)
    const wallMat = new BABYLON.StandardMaterial("wall");
    wallMat.diffuseTexture = new BABYLON.Texture(_src)

    wall.material = wallMat;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    return scene;

}

function floor_change(_src){
    console.log(_src)
    const floorMat = new BABYLON.StandardMaterial("floor");
    floorMat.diffuseTexture = new BABYLON.Texture(_src)

    floor.material = floorMat;

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
    // return scene;

}