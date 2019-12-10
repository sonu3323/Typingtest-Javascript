const arry=["Historically, the fundamental role of pharmacists as a healthcare practitioner was to check and distribute drugs to doctors for medication that had been prescribed to patients. In more modern times, pharmacists advise patients and health care providers on the selection, dosages, interactions, and side effects of medications, and act as a learned intermediary between a prescriber and a patient. Pharmacists monitor the health and progress of patients to ensure the safe and effective use of medication",
"An ever-growing number of complex and rigid rules plus hard-to-cope-with regulations are now being legislated from state to state. Key federal regulations were formulated by the FDA, FTC, and the CPSC. Each of these federal agencies serves a specific mission. One example: Laws sponsored by the Office of the Fair Debt Collection Practices prevent an agency from purposefully harassing clients in serious debt.",
"There are many idiosyncratic typing styles in between novice-style and touch typing. For example, many  typists have the keyboard layout memorized and are able to type while focusing their gaze on the screen. Some use just two fingers, while others use 3-6 fingers."

]

const msg= document.getElementById("msg");
const typewords=document.getElementById("mywords");
const btn= document.getElementById("btn");


let startTime,endTime;

// Style to msg 
 


//button

btn.addEventListener("click",function(){

      msg.style.border="1px solid white";     ///sgtyle to msgbox...

       msg.style.padding="10px";

  
  //playgames() define.....
       const playgames=()=>{
       let randomnumber= Math.floor(Math.random()*arry.length) 
       msg.innerText=arry[randomnumber];
       let date= new Date();
        startTime=date.getTime();
        btn.innerText="Done";

   }

    ///Endgame funcion define......

   const endplay=()=>{
    let date= new Date();
        endTime=date.getTime();
        let totalTime=((endTime-startTime)/1000); //TotalTime...
        console.log(totalTime);

        let totalStr=typewords.value;
        let wordCount=wordCounter(totalStr);
    
        let speed=Math.round((wordCount / totalTime) *60); //Speed 
        



        let result= "You typed " + wordCount + " words " +" at " +speed + " words  per Minutes.";
       
        result+=conpareWords(msg.innerText,totalStr);
        msg.innerText=result;
   }
   
// totalCounter funtion define.....
 const wordCounter=(str)=>{
    
     
    let response;
    if(str.length==0){
        return response=0
    }else{
        response=str.split(" ").length;
        console.log(response)
        return response;
        

    }


     
     
 }
// compareWords funtion define...

const conpareWords=(str1,str2)=>{

let words1= str1.split(" ");
let words2=str2.split(" ");
let  count=0;

 words1.forEach(function(item,index){
    if(item==words2[index]){
        count++;
        
    }
 })

let errorWords=(words1.length-count);
  return(" "+count + " correct out of " + words1.length + " words and the total no of error is "+ errorWords + " .");


}



   
     if(this.innerText=="Start"){
        typewords.disabled=false;
         playgames();
         typewords.innerHTML=" ";
     }else if(btn.innerText=="Done"){
         typewords.disabled="true";
         btn.innerText="Start";
         endplay();
     }
 })
