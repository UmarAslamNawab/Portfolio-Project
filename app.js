// to expand the paragraphs of our services

function expandWebDevelopment(){
    var expandedparagraph="Software development is the process of computer programming, documenting, testing, and bug fixing involved in creating and maintaining applications and frameworks resulting in a software product."
    document.getElementById("WebDevelopment").innerHTML=expandedparagraph;
}

function expandCCNA(){
    var expandedparagraph="CCNA (Cisco Certified Network Associate) is an information technology (IT) certification from Cisco. CCNA certification is an associate-level Cisco Career certificationlalthough  it is a good course."
    document.getElementById("CCNA").innerHTML=expandedparagraph;
}

function expandGraphicDesignning(){
    var expandedparagraph="Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration. The field is considered as visual communication"
    document.getElementById("GraphicDesinning").innerHTML=expandedparagraph;
}

function expandArtificialIntelligence(){
    var expandedparagraph="The scope of AI is disputed: as machines become increasingly capable, task considered as requiring intelligence are often removed from the definition, a phenomenon known as the AI effect."
    document.getElementById("ArtificialIntelligence").innerHTML=expandedparagraph;
}

// end


// form submisson with firebase when click on submit button
var database=firebase.database().ref("/")
function userInfo(){
    var userInfo={
        firstname:firstName.value,
        lastname:lastName.value,
        email:email.value,
        message:message.value,
    }
    database.child("userinformation").push(userInfo);
}



// function that clear the field when click on Reset button

function clearfield(){
    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}


// End



