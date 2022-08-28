/***** convert speech to text *****/
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    recognition.start();
}

recognition.onresult = function(event){
console.log("result is ");
console.log(event);
var content = event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML = content;
speak();
}

/***** convert text to speech *****/

function speak(){
    var synth = window.speechSynthesis;
    speak_data = ("Taking your selfie in 5 seconds");
    utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
    } , 5000 );
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = ("Taking your selfie in 5 seconds");
    utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
    } , 10000 );
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = ("Taking your selfie in 5 seconds");
    utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
    } , 15000 );
}
/***** setting webcam and turning on camera *****/

Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });

camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '  <img id="selfie" src="  '+data_uri+' ">';
        document.getElementById("result2").innnerHTML = '<img id="selfie2" src="  '+data_uri+' ">';
        document.getElementById("result3").innnerHTML = '<img id="selfie3" src="  '+data_uri+' ">';
        
    });
    save();
}

function save(){
    link = document.getElementById("link"); 
    image = document.getElementById("selfie").src ;
    link.href=image;
    link.click();
}

