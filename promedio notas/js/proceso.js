const color=document.getElementById("background");
const body=document.getElementById("body");
const result=document.getElementById("result");

function ChangeColor(color){
    console.log(color.value);
    body.style.backgroundColor=color.value;
};


function end(){
    const note1=document.getElementById("note1");
    const note2=document.getElementById("note2");
    const note3=document.getElementById("note3");
    const prom=document.getElementById("prom");
    const Username=document.getElementById("name");

    if(Number(note1.value) && Number(note2.value) && Number(note3.value) && Username.value){
        let n1=parseFloat(note1.value);
        let n2=parseFloat(note2.value);
        let n3=parseFloat(note3.value);
        
        if( n1>=1 && n1<=5){
            if( n2>=1 && n2<=5){
                if ( n3>=1 && n3<=5){
                    let percentage_note1 = n1*0.3;
                    let end_note1= n1-percentage_note1;

                    let percentage_note2= n2*0.3;
                    let end_note2= n2-percentage_note2;
                
                    let percentage_note3=n3*0.4;
                    let end_note3=n3-percentage_note3;

                    let final_note=(((end_note1+end_note2+end_note3)/3)+((n1+n2+n3)/3))/2;
                    console.log(final_note)
                    
                    if(final_note>=4 && final_note<=5){
                        
                        result.textContent=Username.value+", usted esta en el cuadro de honor por su nota de "+final_note;
                        result.style.color="blue";
                        prom.textContent=final_note;
                        setTimeout(() => {
                            result.textContent="RESULTADO";
                            result.style.color="black";
                        }, 5000);
                    }else if(final_note>=3.5 && final_note<=3.9){
                        result.textContent=Username.value+" usted gana con una nota de "+final_note;
                        result.style.color="green";
                        prom.textContent=final_note;
                        setTimeout(() => {
                            result.textContent="RESULTADO";
                            result.style.color="black";
                        },5000);
                    }else if((final_note>=2 && final_note<=3.4)){

                        result.textContent=Username.value+" usted pierde con una nota de "+final_note+" con posibilidad de recuperar";
                        result.style.color="red";
                        prom.textContent=final_note;
                        setTimeout(() => {
                            result.textContent="RESULTADO";
                            result.style.color="black";
                        },5000);
                    }else if((final_note<=1.9)){
                        result.textContent=Username.value+" ested pierde con una nota de "+final_note;
                        result.style.color="red";
                        prom.textContent=final_note;
                        setTimeout(() => {
                            result.textContent="RESULTADO";
                            result.style.color="black";
                        },5000);
                    }
                    

                    
                }else{
                    result.textContent="Informacion invalida...";
                    result.style.color="red";
                    setTimeout(() => {
                        result.textContent="RESULTADO";
                        result.style.color="black";
                    },5000);    
                }


            }else{
                result.textContent="Informacion invalida...";
                    result.style.color="red";
                    setTimeout(() => {
                        result.textContent="RESULTADO";
                        result.style.color="black";
                    },5000);
            }
        
                        
        }else{
            result.textContent="Informacion invalida...";
                    result.style.color="red";
                    setTimeout(() => {
                        result.textContent="RESULTADO";
                        result.style.color="black";
                    },5000);
        }
    }else{
        result.textContent="Informacion invalida...";
                result.style.color="red";
                setTimeout(() => {
                    result.textContent="RESULTADO";
                    result.style.color="black";
                },5000);

}
}                    