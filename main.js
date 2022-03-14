var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById("text-box").innerHTML=text;
    if(text=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_photo();
        save();
    }, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_div").innerHTML='<img id="photo" src="'+ data_uri+'">';
        document.getElementById("result1").innerHTML='<img id="photo" src="'+ data_uri+'">';
        document.getElementById("result2").innerHTML='<img id="photo" src="'+ data_uri+'">';
        document.getElementById("result3").innerHTML='<img id="photo" src="'+ data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("photo").src;
link.href=image;
link.click();
}