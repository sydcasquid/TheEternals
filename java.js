// Instructions
// The assignment this week follows the plan of the pets projects, and 
//the updates to the DOM with DOM methods - this means that you will be 
//using createElement/append to successfully complete this assignment. 
//No strings containing <li>,as we did before.

// Task: You are going to list a number of super hero characters and their 
//attributes, from the Eternals.

// Use an array to list 5 characters from the Eternals, as objects
// Choose between 3 to 5 attributes, skills, to use in each object array 
//element (you choose these)
//        (Here, consider adding an array of skills, like ["sword", 
//"languages",....] to each object)

// List the characters using the same strategy as the pets model
// Allow the user to enter an attribute, and find (in your solution make 
//sure to use method find) the character(s) with this attribute. Note, 
//"sword" could be an attribute that is possessed by more than one Eternals 
//object.

//add images

const eternals = [
    { 
        name: "Ikaris",
        skills: ["flight", "immoratality", "comsic energy manipulation", "strength", "durability"], 
        picture: "images\\Ikaris.jpg"
    },
    
    { 
        name: "Sersi",
        skills: ["cosmic energy manipulation", "strength", "durability", "speed", "agility"],
        picture: "images\\sersi.jpg"
    },
    
    { 
        name: "Kingo",
        skills: ["cosmic energy manipulation", "multilingualism", "gifted intellect", "immortality", "regenerative healing"],
        picture: "images\\kingo.jpg"
        
    },
    
    { 
        name: "Gilgamesh",
        skills: ["cosmic energy manipulation", "regenerative healing", "immortality", "master combatant", "strength"],
        picture: "images\\gilgamesh.jpg"
    },
    
   { 
        name: "Phastos",
        skills: ["cosmic energy manipulation", "superhuman reflexes", "agility", "speed", "durability"],
        picture: "images\\phastos.jpg"
    }
    
];


console.log(eternals);


const showEternal = () => {
    let eternalSkill = document.querySelector("#skill").value.toLowerCase();
    let selectedEternal = eternals.find((eternal) => 
        eternal.skills.includes(eternalSkill)
    );

    let selectedEternalInfo =document.querySelector(".selectedEternalInfo");
    let selectedEternalPic= document.querySelector(".selectedEternalPic");

    selectedEternalInfo.innerHTML = ``; 
    selectedEternalPic.src = ``;

    if (selectedEternal) {
        selectedEternalInfo.textContent = `Found Eternal(s):`;

        let firstEternalContainer = document.createElement("div");

        let para = document.createElement("p");
        para.textContent = selectedEternal.name;
        selectedEternalInfo.appendChild(para);

        selectedEternalPic.src = selectedEternal.picture;
        firstEternalContainer.appendChild(selectedEternalPic);
        selectedEternalInfo.appendChild(firstEternalContainer);

        eternals.forEach((eternal) => {
            if (eternal.skills.includes(eternalSkill) && eternal.name !== selectedEternal.name) {
                let para = document.createElement("p");
                para.textContent = eternal.name; 
                selectedEternalInfo.appendChild(para);

                let img = document.createElement("img");
                img.src = eternal.picture; 
                img.style.width = '100px'; 
                selectedEternalInfo.appendChild(img);
            }
        });

    } else {
        selectedEternalInfo.textContent = "No Eternals found with that skill.";
    }
};



let eternalList = document.querySelector(".eternalsList");
let allEternalsList = ``;
eternals.forEach((eternal) => {
    allEternalsList += `<li> ${eternal.name} </li>`;
});
allEternalsList += ``;

eternalList.innerHTML = allEternalsList;
