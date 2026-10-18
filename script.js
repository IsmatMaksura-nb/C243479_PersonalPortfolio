
function toggleAbout() {

    let details = document.getElementById("moreAbout");
    let button = document.getElementById("readMoreButton");

    if (details.style.display !== "block") {

        
        details.style.display = "block";

        
        button.innerText = "Read Less";

    } else {

        details.style.display = "none";

        button.innerText = "Read More";

    }

}

function showDetails(button) {

    
    let card = button.closest(".project-card");

    let details = card.querySelector(".project-details");

    if (details.style.display !== "block") {

        details.style.display = "block";

        button.innerText = "Show Less";

    } else {

        details.style.display = "none";

        button.innerText = "Show More";

    }

}

function toggleSkills() {

    let cards = document.getElementsByClassName("extra-skill");
    let button = document.getElementById("showSkillsButton");

    if (cards[0].style.display !== "block") {

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "block";
        }

        button.innerText = "Show Less ↑";

    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }

        button.innerText = "Show More ↓";

    }

}

function toggleExperience(button) {

    let card = button.parentElement;

    let details = card.getElementsByClassName("experience-details")[0];

    if (details.style.display === "block") {

        details.style.display = "none";

        button.innerText = "Show Details";

    } else {

        
        details.style.display = "block";

        button.innerText = "Hide Details";

    }

}

