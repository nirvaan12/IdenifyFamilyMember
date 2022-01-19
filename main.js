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

function modelLoaded(){
    console.log("Model is loaded!");
}

function check(){
    img = document.getElementById("captureimg");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
     console.log(results);
     document.getElementById("result_family_name").innerHTML = results[0].label;
     document.getElementById("result_family_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}