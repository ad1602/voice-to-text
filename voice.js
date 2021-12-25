console.log("this is voice .js");


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let words = document.querySelector('.para');

words.appendChild(p);

let paragraphContent=new Array();
recognition.addEventListener('result', function(e){
//    console.log(e.results);
   const transcript=Array.from(e.results)
         .map(result => result[0])
         .map(result =>result.transcript)
         .join('')

//    console.log(transcript);

   p.textContent=transcript;
    if(e.results[0].isFinal){
        paragraphContent.push(p.textContent);
        p=document.createElement('p');
        words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);


recognition.start();


const button1=document.getElementById('btn1');

// let paragraphContent=document.querySelector('#para');

button1.addEventListener('click', function copy(){
     var cpy="";
    paragraphContent.forEach(copy1)
 function copy1(item){
           var str=item;
           cpy=cpy+"\n"+str;       
        }
       console.log(cpy);
    
      
       function copyToClipboard(text) {
         var dummy = document.createElement("textarea");
         
         document.body.appendChild(dummy);
         
         dummy.value = text;
         dummy.select();
         document.execCommand("copy");
         document.body.removeChild(dummy);
     }
     copyToClipboard(cpy);
   
});


const button2=document.getElementById('btn2');
button2.addEventListener('click', function clear(){
   // words.removeChild(); 
   var child = words.lastElementChild; 
        while (child) {
            words.removeChild(child);
            child = words.lastElementChild;
         }
   
  });


