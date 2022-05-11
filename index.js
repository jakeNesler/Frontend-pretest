 
 
var key = config.SECRET_API_KEY;



function contact(){ 
  
document.getElementById('quest0').value = " ";
document.getElementById('prompt0').value = " ";
var object;
let question = document.getElementById('vreason').value;
document.getElementById('vreason').value = '';
document.getElementById('quest0').value = question;
const data = {
  prompt: question,
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  
 };

 fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: ` Bearer  ` + key,
  },
  body: JSON.stringify(data),

 }).then(response  => response.json())
 .then(data => object = data)
 .then(response => {
  var objectr = JSON.stringify(response['choices'][0]['text']);
   document.getElementById('prompt0').value =  objectr.replace(/\\n/g, '');
 })
 .then(() => console.log(object));

 
}

  
  


   
   