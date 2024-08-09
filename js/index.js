let customizationSystem = document.getElementById('customizationSystem');
let reviewCustomization = document.getElementById('reviewCustomization');

let containerSuit = document.getElementById('containerSuit');
let containerSuitProperties = document.getElementById('containerSuitProperties');
let containerPants = document.getElementById('containerPants');
let containerPantsProperties = document.getElementById('containerPantsProperties');
let containerBowtie = document.getElementById('containerBowtie');
let containerBowtieProperties = document.getElementById('containerBowtieProperties');
let containerNecktie = document.getElementById('containerNecktie');
let containerNecktieProperties = document.getElementById('containerNecktieProperties');

// Suit Container
let containerTuxedo = document.getElementById('containerTuxedo');
let containerCorporate = document.getElementById('containerCorporate');
let containerFormal = document.getElementById('containerFormal');

// Pants
let pants = document.getElementById('pants');

// Necktie
let necktie = document.getElementById('necktie');

// Bowtie
let bowtie = document.getElementById('bowtie');

// Garment Options
let garmentSuit = document.getElementById('garmentSuit');
let garmentPants = document.getElementById('garmentPants');
let garmentNecktie = document.getElementById('garmentNecktie');
let garmentBowtie = document.getElementById('garmentBowtie');

// Icons
let iconSuit = document.getElementById('iconSuit');
let iconPants = document.getElementById('iconPants');
let iconNecktie = document.getElementById('iconNecktie');
let iconBowtie = document.getElementById('iconBowtie');

// Occasion
let occTuxedo = document.getElementById('occTuxedo');
let occCorporate = document.getElementById('occCorporate');
let occFormal = document.getElementById('occFormal');
let occTuxedoIcon = document.getElementById('occTuxedoIcon');
let occCorporateIcon = document.getElementById('occCorporateIcon');
let occFormalIcon = document.getElementById('occFormalIcon');

// Suit Type
let tuxedo = document.getElementById('tuxedo');
let tuxedoInner = document.getElementById('tuxedoInner');

// Corporate Type
let corporate = document.getElementById('corporate');
let corporateInner = document.getElementById('corporateInner');
let corporateButton = document.getElementById('corporateButton');

// Formal Type
let formal = document.getElementById('formal');
let formalInner = document.getElementById('formalInner');
let formalButton = document.getElementById('formalButton');

// Color Picker
let suitColorPicker = document.getElementById('suitColorPicker');
let sleeveColorPicker = document.getElementById('sleeveColorPicker');
let pantsColorPicker = document.getElementById('pantsColorPicker');
let necktieColorPicker = document.getElementById('necktieColorPicker');
let bowtieColorPicker = document.getElementById('bowtieColorPicker');

// Text: Hex Value
let suitHex = document.getElementById('suitHex');
let sleeveHex = document.getElementById('sleeveHex');
let pantsHex = document.getElementById('pantsHex');
let necktieHex = document.getElementById('necktieHex');
let bowtieHex = document.getElementById('bowtieHex');

// Patern Select:
let suitPatternSelect = document.getElementById('suitPatternSelect');
let pantsPatternSelect = document.getElementById('pantsPatternSelect');
let necktiePatternSelect = document.getElementById('necktiePatternSelect');

// Tuxedo Patterns:
let tuxedoChalkStripe = document.getElementById('tuxedoChalkStripe');
let tuxedoWindowpane = document.getElementById('tuxedoWindowpane');

// Corporate Patterns:
let corporateChalkStripe = document.getElementById('corporateChalkStripe');
let corporateWindowpane = document.getElementById('corporateWindowpane');

// Formal Patterns:
let formalChalkStripe = document.getElementById('formalChalkStripe');
let formalWindowpane = document.getElementById('formalWindowpane');

// Pants Patterns:
let pantsChalkStripe = document.getElementById('pantsChalkStripe');
let pantsWindowpane = document.getElementById('pantsWindowpane');

// Necktie Patterns:
let necktieChalkStripe = document.getElementById('necktieChalkStripe');
let necktieWindowpane = document.getElementById('necktieWindowpane');

// Review Button:
let bowtieReviewBtn = document.getElementById('bowtieReviewBtn');
let necktieReviewBtn = document.getElementById('necktieReviewBtn');
let returnBtn = document.getElementById('returnBtn');
let purchaseBtn = document.getElementById('purchaseBtn');


// Review Inputs:
let reviewOccasion = document.getElementById('reviewOccasion');
let reviewSuitColorPicker = document.getElementById('reviewSuitColorPicker');
let reviewSuitHexColor = document.getElementById('reviewSuitHexColor');
let reviewLSColorPicker = document.getElementById('reviewLSColorPicker');
let reviewLSHexColor = document.getElementById('reviewLSHexColor');
let reviewSuitPattern = document.getElementById('reviewSuitPattern');
let reviewPantsColorPicker = document.getElementById('reviewPantsColorPicker');
let reviewPantsHexColor = document.getElementById('reviewPantsHexColor');
let reviewPantsPattern = document.getElementById('reviewPantsPattern');
let reviewTie = document.getElementById('reviewTie');
let reviewTieHeader = document.getElementById('reviewTieHeader');
let reviewTieColorPicker = document.getElementById('reviewTieColorPicker');
let reviewTieHexColor = document.getElementById('reviewTieHexColor');
let tiePattern = document.getElementById('tiePattern');
let reviewTiePattern = document.getElementById('reviewTiePattern');

// =================================== 
//          Garment Type
// =================================== 
garmentSuit.onclick = function(){
  containerSuit.hidden = false;
  containerSuitProperties.hidden = false;
  containerPants.hidden = true;
  containerPantsProperties.hidden = true;
  containerNecktie.hidden = true;
  containerNecktieProperties.hidden = true;
  containerBowtie.hidden = true;
  containerBowtieProperties.hidden = true;
  iconSuit.src = "../img/icon/suit-icon-color.png";
  iconPants.src = "../img/icon/formalpants-icon.png";
  iconNecktie.src = "../img/icon/necktie-icon.png";
  iconBowtie.src = "../img/icon/bowtie-icon.png";
  garmentSuit.style.backgroundColor = "transparent";
  garmentPants.style.backgroundColor = "#dbdbdb";
  garmentBowtie.style.backgroundColor = "#dbdbdb";
  garmentNecktie.style.backgroundColor = "#dbdbdb";
}


garmentPants.onclick = function(){
  containerSuit.hidden = true;
  containerSuitProperties.hidden = true;
  containerPants.hidden = false;
  containerPantsProperties.hidden = false;
  containerNecktie.hidden = true;
  containerNecktieProperties.hidden = true;
  containerBowtie.hidden = true;
  containerBowtieProperties.hidden = true;
  iconSuit.src = "../img/icon/suit-icon.png";
  iconPants.src = "../img/icon/formalpants-icon-color.png";
  iconNecktie.src = "../img/icon/necktie-icon.png";
  iconBowtie.src = "../img/icon/bowtie-icon.png";
  garmentSuit.style.backgroundColor = "#dbdbdb";
  garmentPants.style.backgroundColor = "transparent";
  garmentBowtie.style.backgroundColor = "#dbdbdb";
  garmentNecktie.style.backgroundColor = "#dbdbdb";
}

garmentNecktie.onclick = function(){
  containerSuit.hidden = true;
  containerSuitProperties.hidden = true;
  containerPants.hidden = true;
  containerPantsProperties.hidden = true;
  containerNecktie.hidden = false;
  containerNecktieProperties.hidden = false;
  containerBowtie.hidden = true;
  containerBowtieProperties.hidden = true;
  iconSuit.src = "../img/icon/suit-icon.png";
  iconPants.src = "../img/icon/formalpants-icon.png";
  iconNecktie.src = "../img/icon/necktie-icon-color.png";
  iconBowtie.src = "../img/icon/bowtie-icon.png";
  garmentSuit.style.backgroundColor = "#dbdbdb";
  garmentPants.style.backgroundColor = "#dbdbdb";
  garmentBowtie.style.backgroundColor = "#dbdbdb";
  garmentNecktie.style.backgroundColor = "transparent";
}

garmentBowtie.onclick = function(){
  containerSuit.hidden = true;
  containerSuitProperties.hidden = true;
  containerPants.hidden = true;
  containerPantsProperties.hidden = true;
  containerNecktie.hidden = true;
  containerNecktieProperties.hidden = true;
  containerBowtie.hidden = false;
  containerBowtieProperties.hidden = false;
  iconSuit.src = "../img/icon/suit-icon.png";
  iconPants.src = "../img/icon/formalpants-icon.png";
  iconNecktie.src = "../img/icon/necktie-icon.png";
  iconBowtie.src = "../img/icon/bowtie-icon-color.png";
  garmentSuit.style.backgroundColor = "#dbdbdb";
  garmentPants.style.backgroundColor = "#dbdbdb";
  garmentBowtie.style.backgroundColor = "transparent";
  garmentNecktie.style.backgroundColor = "#dbdbdb";
}



// =================================== 
//          Occasion Buttons
// =================================== 
occTuxedo.onclick = function () {
  containerTuxedo.hidden = false;
  containerCorporate.hidden = true;
  containerFormal.hidden = true;
  garmentNecktie.hidden = true;
  garmentBowtie.hidden = false;
  occTuxedoIcon.src = "../img/icon/tuxedo-icon-color.png";
  occCorporateIcon.src = "../img/icon/corporate-icon.png";
  occFormalIcon.src = "../img/icon/formal-icon.png";
  occTuxedo.style.boxShadow = "none";
  occTuxedo.style.backgroundColor = "#fefefe";
  occCorporate.style.boxShadow = "5px 5px 5px #0e0e0e";
  occCorporate.style.backgroundColor = "transparent";
  occFormal.style.boxShadow = "5px 5px 5px #0e0e0e";
  occFormal.style.backgroundColor = "transparent";

  reviewOccasion.value = "Tuxedo";

}

occCorporate.onclick = function(){
  containerTuxedo.hidden = true;
  containerCorporate.hidden = false;
  containerFormal.hidden = true;
  garmentNecktie.hidden = false;
  garmentBowtie.hidden = true;
  occTuxedoIcon.src = "../img/icon/tuxedo-icon.png";
  occCorporateIcon.src = "../img/icon/corporate-icon-color.png";
  occFormalIcon.src = "../img/icon/formal-icon.png";
  occTuxedo.style.boxShadow = "5px 5px 5px #0e0e0e";
  occTuxedo.style.backgroundColor = "transparent";
  occCorporate.style.boxShadow = "none";
  occCorporate.style.backgroundColor = "#fefefe";
  occFormal.style.boxShadow = "5px 5px 5px #0e0e0e";
  occFormal.style.backgroundColor = "transparent";

  reviewOccasion.value = "Corporate";
}

occFormal.onclick = function(){
  containerTuxedo.hidden = true;
  containerCorporate.hidden = true;
  containerFormal.hidden = false;
  garmentNecktie.hidden = false;
  garmentBowtie.hidden = true;
  occTuxedoIcon.src = "../img/icon/tuxedo-icon.png";
  occCorporateIcon.src = "../img/icon/corporate-icon.png";
  occFormalIcon.src = "../img/icon/formal-icon-color.png";
  occTuxedo.style.boxShadow = "5px 5px 5px #0e0e0e";
  occTuxedo.style.backgroundColor = "transparent";
  occCorporate.style.boxShadow = "5px 5px 5px #0e0e0e";
  occCorporate.style.backgroundColor = "transparent";
  occFormal.style.boxShadow = "none";
  occFormal.style.backgroundColor = "#fefefe";

  reviewOccasion.value = "Formal";
}




// =================================== 
//          Color Settings
// =================================== 
suitHex.value = suitColorPicker.value;
sleeveHex.value = sleeveColorPicker.value;
pantsHex.value = pantsColorPicker.value;
bowtieHex.value = bowtieColorPicker.value;
necktieHex.value = necktieColorPicker.value;


suitColorPicker.onchange = function () {
  suitHex.value = suitColorPicker.value;

  pantsColorPicker.value = suitColorPicker.value;
  pantsHex.value = suitColorPicker.value;
  
  tuxedo.style.backgroundColor = suitHex.value;
  tuxedo.style.transition = "0.5s all ease-in-out";
  corporate.style.backgroundColor = suitHex.value;
  corporate.style.transition = "0.5s all ease-in-out";
  corporateButton.style.backgroundColor = suitHex.value;
  corporateButton.style.transition = "0.5s all ease-in-out";
  formal.style.backgroundColor = suitHex.value;
  formal.style.transition = "0.5s all ease-in-out";
  formalButton.style.backgroundColor = suitHex.value;
  formalButton.style.transition = "0.5s all ease-in-out";
  pants.style.backgroundColor = pantsHex.value;
  pants.style.transition = "0.5s all ease-in-out";
}

suitHex.onchange = function(){
  suitColorPicker.value = suitHex.value;

  pantsHex.value = suitHex.value;
  pantsColorPicker.value = suitHex.value;

  tuxedo.style.backgroundColor = suitColorPicker.value;
  tuxedo.style.transition = "0.5s all ease-in-out";
  corporate.style.backgroundColor = suitColorPicker.value;
  corporate.style.transition = "0.5s all ease-in-out";
  corporateButton.style.backgroundColor = suitColorPicker.value;
  corporateButton.style.transition = "0.5s all ease-in-out";
  formal.style.backgroundColor = suitColorPicker.value;
  formal.style.transition = "0.5s all ease-in-out";
  formalButton.style.backgroundColor = suitColorPicker.value;
  formalButton.style.transition = "0.5s all ease-in-out";
  pants.style.backgroundColor = pantsColorPicker.value;
  pants.style.transition = "0.5s all ease-in-out";
}

sleeveColorPicker.onchange = function(){
  sleeveHex.value = sleeveColorPicker.value;

  tuxedoInner.style.backgroundColor = sleeveHex.value;
  tuxedoInner.style.transition = "0.5s all ease-in-out";
  corporateInner.style.backgroundColor = sleeveHex.value;
  corporateInner.style.transition = "0.5s all ease-in-out";
  formalInner.style.backgroundColor = sleeveHex.value;
  formalInner.style.transition = "0.5s all ease-in-out";
}

sleeveHex.onchange = function(){
  suitColorPicker.value = suitHex.value;

  tuxedoInner.style.backgroundColor = sleeveColorPicker.value;
  tuxedoInner.style.transition = "0.5s all ease-in-out";
  corporateInner.style.backgroundColor = sleeveColorPicker.value;
  corporateInner.style.transition = "0.5s all ease-in-out";
  formalInner.style.backgroundColor = sleeveColorPicker.value;
  formalInner.style.transition = "0.5s all ease-in-out";
}

pantsColorPicker.onchange = function(){
  pantsHex.value = pantsColorPicker.value;

  suitColorPicker.value = pantsColorPicker.value;
  suitHex.value = pantsColorPicker.value;

  tuxedo.style.backgroundColor = suitHex.value;
  tuxedo.style.transition = "0.5s all ease-in-out";
  corporate.style.backgroundColor = suitHex.value;
  corporate.style.transition = "0.5s all ease-in-out";
  corporateButton.style.backgroundColor = suitHex.value;
  corporateButton.style.transition = "0.5s all ease-in-out";
  formal.style.backgroundColor = suitHex.value;
  formal.style.transition = "0.5s all ease-in-out";
  formalButton.style.backgroundColor = suitHex.value;
  formalButton.style.transition = "0.5s all ease-in-out";

  pants.style.backgroundColor = pantsHex.value;
  pants.style.transition = "0.5s all ease-in-out";
}

pantsHex.onchange = function(){
  pantsColorPicker.value = pantsHex.value;

  suitHex.value = pantsHex.value;
  suitColorPicker.value = pantsHex.value;

  tuxedo.style.backgroundColor = suitColorPicker.value;
  tuxedo.style.transition = "0.5s all ease-in-out";
  corporate.style.backgroundColor = suitColorPicker.value;
  corporate.style.transition = "0.5s all ease-in-out";
  corporateButton.style.backgroundColor = suitColorPicker.value;
  corporateButton.style.transition = "0.5s all ease-in-out";
  formal.style.backgroundColor = suitColorPicker.value;
  formal.style.transition = "0.5s all ease-in-out";
  formalButton.style.backgroundColor = suitColorPicker.value;
  formalButton.style.transition = "0.5s all ease-in-out";


  pants.style.backgroundColor = pantsColorPicker.value;
  pants.style.transition = "0.5s all ease-in-out";
}

bowtieColorPicker.onchange = function(){
  bowtieHex.value = bowtieColorPicker.value;

  bowtie.style.backgroundColor = bowtieColorPicker.value;
  bowtie.style.transition = "0.5s all ease-in-out";
}

bowtieHex.onchange = function(){
  bowtieColorPicker.value = bowtieHex.value;

  bowtie.style.backgroundColor = bowtieColorPicker.value;
  bowtie.style.transition = "0.5s all ease-in-out";
}

necktieColorPicker.onchange = function(){
  necktieHex.value = necktieColorPicker.value;
  
  necktie.style.backgroundColor = necktieColorPicker.value;
  necktie.style.transition = "0.5s all ease-in-out";
}

necktieHex.onchange = function(){
  necktieColorPicker.value = necktieHex.value;

  necktie.style.backgroundColor = necktieColorPicker.value;
  necktie.style.transition = "0.5s all ease-in-out";
}

// =================================== 
//          Pattern Settings
// =================================== 
suitPatternSelect.onchange = function(){
  

  if (suitPatternSelect.value == "none"){
    tuxedoChalkStripe.hidden = true;
    corporateChalkStripe.hidden = true;
    formalChalkStripe.hidden = true;
    pantsChalkStripe.hidden = true;
    
    tuxedoWindowpane.hidden = true;
    corporateWindowpane.hidden = true;
    formalWindowpane.hidden = true;
    pantsWindowpane.hidden = true;

    pantsPatternSelect.value = suitPatternSelect.value;

  } else if (suitPatternSelect.value == "chalk-stripe"){
    tuxedoChalkStripe.hidden = false;
    corporateChalkStripe.hidden = false;
    formalChalkStripe.hidden = false;
    pantsChalkStripe.hidden = false;

    tuxedoWindowpane.hidden = true;
    corporateWindowpane.hidden = true;
    formalWindowpane.hidden = true;
    pantsWindowpane.hidden = true;

    pantsPatternSelect.value = suitPatternSelect.value;

  } else if (suitPatternSelect.value == "windowpane"){
    tuxedoChalkStripe.hidden = true;
    corporateChalkStripe.hidden = true;
    formalChalkStripe.hidden = true;
    pantsChalkStripe.hidden = true;

    tuxedoWindowpane.hidden = false;
    corporateWindowpane.hidden = false;
    formalWindowpane.hidden = false;
    pantsWindowpane.hidden = false;
    
    pantsPatternSelect.value = suitPatternSelect.value;

  }
}

pantsPatternSelect.onchange = function(){
  

  if (pantsPatternSelect.value == "none"){
    tuxedoChalkStripe.hidden = true;
    corporateChalkStripe.hidden = true;
    formalChalkStripe.hidden = true;
    pantsChalkStripe.hidden = true;

    tuxedoWindowpane.hidden = true;
    corporateWindowpane.hidden = true;
    formalWindowpane.hidden = true;
    pantsWindowpane.hidden = true;

    suitPatternSelect.value = pantsPatternSelect.value;

  } else if (pantsPatternSelect.value == "chalk-stripe"){
    tuxedoChalkStripe.hidden = false;
    corporateChalkStripe.hidden = false;
    formalChalkStripe.hidden = false;
    pantsChalkStripe.hidden = false;

    tuxedoWindowpane.hidden = true;
    corporateWindowpane.hidden = true;
    formalWindowpane.hidden = true;
    pantsWindowpane.hidden = true;
    
    suitPatternSelect.value = pantsPatternSelect.value;

  } else if (pantsPatternSelect.value == "windowpane"){
    tuxedoChalkStripe.hidden = true;
    corporateChalkStripe.hidden = true;
    formalChalkStripe.hidden = true;
    pantsChalkStripe.hidden = true;

    tuxedoWindowpane.hidden = false;
    corporateWindowpane.hidden = false;
    formalWindowpane.hidden = false;
    pantsWindowpane.hidden = false;

    suitPatternSelect.value = pantsPatternSelect.value;
  }
}

necktiePatternSelect.onchange = function(){
  

  if (necktiePatternSelect.value == "none"){
    necktieChalkStripe.hidden = true;
    necktieWindowpane.hidden = true;

  } else if (necktiePatternSelect.value == "chalk-stripe"){
    necktieChalkStripe.hidden = false;
    necktieWindowpane.hidden = true;

  } else if (necktiePatternSelect.value == "windowpane"){
    necktieChalkStripe.hidden = true;
    necktieWindowpane.hidden = false;

  }
}

// =================================== 
//        Review Customization
// =================================== 
bowtieReviewBtn.onclick = function(){
  customizationSystem.hidden = true;
  reviewCustomization.hidden = false;


  reviewSuitColorPicker.value = suitColorPicker.value;
  reviewSuitHexColor.value = suitHex.value;
  reviewLSColorPicker.value = sleeveColorPicker.value;
  reviewLSHexColor.value = sleeveHex.value;
  reviewSuitPattern.value = suitPatternSelect.value;

  reviewPantsColorPicker.value = pantsColorPicker.value;
  reviewPantsHexColor.value = pantsHex.value;
  reviewPantsPattern.value = pantsPatternSelect.value;

  reviewTieHeader.innerHTML = "Bowtie";
  reviewTie.innerHTML = "Bowtie Color";

  reviewTieColorPicker.value = bowtieColorPicker.value;
  reviewTieHexColor.value = bowtieHex.value;
  tiePattern.hidden = true;


  
}

necktieReviewBtn.onclick = function(){
  customizationSystem.hidden = true;
  reviewCustomization.hidden = false;

  reviewSuitColorPicker.value = suitColorPicker.value;
  reviewSuitHexColor.value = suitHex.value;
  reviewLSColorPicker.value = sleeveColorPicker.value;
  reviewLSHexColor.value = sleeveHex.value;
  reviewSuitPattern.value = suitPatternSelect.value;

  reviewPantsColorPicker.value = pantsColorPicker.value;
  reviewPantsHexColor.value = pantsHex.value;
  reviewPantsPattern.value = pantsPatternSelect.value;

  reviewTieHeader.innerHTML = "Necktie";
  reviewTie.innerHTML = "Necktie Color";

  reviewTieColorPicker.value = necktieColorPicker.value;
  reviewTieHexColor.value = necktieHex.value;
  tiePattern.hidden = false;
  reviewTiePattern.value = necktiePatternSelect.value;
}

returnBtn.onclick = function(){
  customizationSystem.hidden = false;
  reviewCustomization.hidden = true;
}