const companyName = document.getElementById('company-name');
const boothSize = document.getElementById('booth-size');
const tableDesired = document.getElementById('table-desired');
const chairNumber = document.getElementById('chair-number');
const contactName = document.getElementById('contact-name');
const contactNumber = document.getElementById('contact-number');

const textInputs=[companyName,contactName,contactNumber];

function showError(input,message){
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('span');
    input.className = 'error';
    errorMessage.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('span');
    input.className = 'success';
    errorMessage.innerText = null;
}

function checking(){
    
    for(let Input of textInputs){
        if(Input.value===""||Input.value==null||Input.value.trim().length === 0){
            showError(Input,"กรอกช่องว่างให้ครบ");
        }else{
            showSuccess(Input);
        }
    }
    console.log(boothSize.value);
    if(boothSize.value===""){
        showError(boothSize,"เลือกขนาดบูธ");
    }else{
        showSuccess(boothSize);
    }

    if(chairNumber.value<=10&&chairNumber.value>=1){
        showSuccess(chairNumber);
    }
    else{
        showError(chairNumber,"รับเฉพาะเลข 1-10");
    }
}

