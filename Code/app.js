function handleSubmit(e){
    e.preventDefault();
    let chosenName = document.querySelector("#name-input").value;
    document.querySelector("#name-output").innerHTML = chosenName;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenAge = document.querySelector("#age-input").value;
    document.querySelector("#age-output").innerHTML = chosenAge;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenSex = document.querySelector("#sex-input").value;
    document.querySelector("#sex-output").innerHTML = chosenSex;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenClass = document.querySelector("#classSelector").value;
    document.querySelector("#class-output").innerHTML = chosenClass;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenStrength = document.querySelector("#strength-input").value;
    document.querySelector("#strength-output").innerHTML = chosenStrength;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenDefence = document.querySelector("#defence-input").value;
    document.querySelector("#defence-output").innerHTML = chosenDefence;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenMagic = document.querySelector("#magic-input").value;
    document.querySelector("#magic-output").innerHTML = chosenMagic;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenDexterity = document.querySelector("#dexterity-input").value;
    document.querySelector("#dexterity-output").innerHTML = chosenDexterity;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenSpeed = document.querySelector("#speed-input").value;
    document.querySelector("#speed-output").innerHTML = chosenSpeed;
    document.querySelector("#sheet").classList.remove("hide");

    let chosenKnowledge = document.querySelector("#knowledge-input").value;
    document.querySelector("#knowledge-output").innerHTML = chosenKnowledge;
    document.querySelector("#sheet").classList.remove("hide")
}

function selectedSex(){
    let selectedSex = document.querySelector("#sex-input").value;
    if(selectedSex == "male"){
        document.querySelector("#sex-male").classList.remove("hide");
    }
    else{
        document.querySelector("#sex-male").classList.add("hide");
    }

    if(selectedSex == "female"){
        document.querySelector("#sex-female").classList.remove("hide");
    }
    else{
        document.querySelector("#sex-female").classList.add("hide");
    }
}

function selectedClass(){
    let selectedClass = document.querySelector("#classSelector").value;
    if (selectedClass == "fighter"){
        document.querySelector("#chooseWeapon").classList.remove("hide");
    }
    else{
        document.querySelector("#chooseWeapon").classList.add("hide");
    }

    if (selectedClass == "mage"){
        document.querySelector("#chooseSpell").classList.remove("hide");
    }
    else{
        document.querySelector("#chooseSpell").classList.add("hide");
    }

    if (selectedClass == "thief"){
        document.querySelector("#chooseWeapon2").classList.remove("hide");
    }
    else{
        document.querySelector("#chooseWeapon2").classList.add("hide");
    }

    const maleImage = "Images/Male.png"
    const femaleImage = "Images/Female.png"
}