
let textbox=document.getElementById('tbox');  // textbox
let display=document.getElementById('display');//label

function getvalue(){// get call () fron "oninput" in the text box
    if(textbox.value <=7){
        if(textbox.value==1){   // textbox.value (get the value from the textbox)
            display.innerHTML="Sunday"; // .innerHTML (changes in the html page)
        }
        else if(textbox.value==2){
            display.innerHTML="Monday";
        }  
        else if(textbox.value==3){
            display.innerHTML="Tuesday";
        }  
        else if(textbox.value==4){
            display.innerHTML="Wednesday";
        }

        else if(textbox.value==5){
            display.innerHTML="Thursday";
        }
        else if(textbox.value==6){
            display.innerHTML="Friday";
        }
        else if(textbox.value==7){
            display.innerHTML="Saturday";
        }
    }
    else{
        display.innerHTML="Enter the number between (1-7)"
    }
}
