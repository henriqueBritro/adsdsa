var SpeechRecognition = window.webkitSpeechRecognition;

var recognation = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognation.start();
}

recognation.onresult = function(event) {

    var Content = event.results [0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "Tire minha selfie"){
        console.log("Tirando selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis
speakData = "tirando sua selfie em 5 segundos L";

var uttersThis = new SpeechSynthesisUtterance(speakData);
console.log("speakData")
synth.speak(uttersThis);

Webcam.attach(camera);

setTimeout(function(){
    takeSelfie();
    save();   
}, 5000);

    
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
})

function takeSelfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    }
    )

}


function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src ; 
    link.href = image;
    link.click();
}

function takeSelfie(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_url_+'"/>';    }
)};


function save(){
    link = document.getElementById("link");
     image = document.getElementById("selfieImage").src;
     link.href = image;
     link.click();
}