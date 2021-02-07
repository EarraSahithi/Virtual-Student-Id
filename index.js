function generalCard(){
    const nameElement=document.getElementById("name").value;
    const cardNameElement =document.getElementById("cardName");
    cardNameElement.innerHTML=nameElement;

const collegeNameValue = document.getElementById("collegeName").value;
document.getElementById("cardCollegeName").innerHTML=collegeNameValue;

const locationValue=document.getElementById("location").value;
document.getElementById("cardLocation").innerHTML=locationValue;

document.getElementById("collegeCard").style.display="block";
}

function preview_image(event){

   
        var output=document.getElementById("output_image");
        var output2=document.getElementById("profile_image");
        output2.src=URL.createObjectURL(event.target.files[0]);
        output.src=reader.result;
        output2.style.display="block";
    

}