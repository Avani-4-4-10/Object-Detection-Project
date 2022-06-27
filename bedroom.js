img=""
status1=""
objects= []

function preload(){
    img= loadImage("bedroom.jpg.jpg")
}
function setup(){
    canvas= createCanvas(640 ,368)
    canvas.center()
    objectDetector = ml5.objectDetector( "cocossd" , modelLoaded)
    document.getElementById("status").innerHTML= "Status = Detecting Object"

}
function modelLoaded(){
    console.log("Model is initialized")
    status1 = true
    objectDetector.detect(img , gotResults)
}
function gotResults(error , results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects = results
    }
}
function draw(){
    image(img , 0 , 0 , 640 , 368)
    if(status1 != ""){
        for(i = 0 ; i < objects.length ; i++){
            document.getElementById("status").innerHTML= "Status = Object Detected "
            fill("red")
            percent = Math.floor(objects[i].confidence*100 )
            text(objects[i].label + " " + percent + "%" , objects[i].x+15 , objects[i].y+15)
            noFill()
            stroke("red")
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height)
        }
    }


}