function handleSubmit(e){
    e.prevemtDefault();
    let userName = document.querySelector("#name-input").ariaValueMax;
    console.log(userName);
    document.querySelector("#sheet").classList.remove("hide");
}

function selectedClass(){
    let selectedClass = document.querySelector("#classSelector").value;
    if (selectedClass == "mage"){
        document.querySelector("#chooseSpell").classList.remove("hide");
    }
}