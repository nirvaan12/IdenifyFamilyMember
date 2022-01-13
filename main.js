//https://teachablemachine.withgoogle.com/models/smOdONtPT/

Webcam.set({
    width:350,
    height:300,
    imageformat:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captureimg' src='"+data_uri+"'>";
    });
  
}
console.log('ml5 version: ',ml5.verison);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/smOdONtPT/model.json",modelLoaded);