function toggleStyleSheet() {

    const myStyleSheet = document.getElementById("stylesheet");
    const curr = myStyleSheet.getAttribute("href");

    isStyle1 = localStorage.getItem("stylebool") ? localStorage.getItem("stylebool") : "true";

    let newStyle;
    if (curr == "style_home_1.css") {
        isStyle1 = "false";
        newStyle = "style_home_2.css"
    }
    if (curr == "style_portfolio_1.css") {
        isStyle1 = "false";
        newStyle = "style_portfolio_2.css"
    }
    if (curr == "style_qualifications_1.css") {
        isStyle1 = "false";
        newStyle = "style_qualifications_2.css"
    }
    if (curr == "style_service_1.css") {
        isStyle1 = "false";
        newStyle = "style_service_2.css"
    }
    if (curr == "style_ai_1.css") {
        isStyle1 = "false";
        newStyle = "style_ai_2.css"
    }

    if (curr == "style_home_2.css") {
        isStyle1 = "true";
        newStyle = "style_home_1.css"
    }
    if (curr == "style_portfolio_2.css") {
        isStyle1 = "true";
        newStyle = "style_portfolio_1.css"
    }
    if (curr == "style_qualifications_2.css") {
        isStyle1 = "true";
        newStyle = "style_qualifications_1.css"
    }
    if (curr == "style_service_2.css") {
        isStyle1 = "true";
        newStyle = "style_service_1.css"
    }
    if (curr == "style_ai_2.css") {
        isStyle1 = "true";
        newStyle = "style_ai_1.css"
    }

    myStyleSheet.setAttribute("href", newStyle);
    localStorage.setItem("stylebool", isStyle1);
}

function loadStyle() {
    const myStyleSheet = document.getElementById("stylesheet");
    isStyle1 = localStorage.getItem("stylebool") ? localStorage.getItem("stylebool") : "true";

    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1);
    
    if (currentPage === "index.html") {
        if (isStyle1 == "true") {
            myStyleSheet.setAttribute("href", "style_home_1.css");
        }
        if (isStyle1 == "false") {
            myStyleSheet.setAttribute("href", "style_home_2.css");
        }
    }
    if (currentPage === "portfolio.html") {
        if (isStyle1 == "true") {
            myStyleSheet.setAttribute("href", "style_portfolio_1.css");
        }
        if (isStyle1 == "false") {
            myStyleSheet.setAttribute("href", "style_portfolio_2.css");
        }
    }
    if (currentPage === "qualifications.html") {
        if (isStyle1 == "true") {
            myStyleSheet.setAttribute("href", "style_qualifications_1.css");
        }
        if (isStyle1 == "false") {
            myStyleSheet.setAttribute("href", "style_qualifications_2.css");
        }
    }
    if (currentPage === "service.html") {
        if (isStyle1 == "true") {
            myStyleSheet.setAttribute("href", "style_service_1.css");
        }
        if (isStyle1 == "false") {
            myStyleSheet.setAttribute("href", "style_service_2.css");
        }
    }
    if (currentPage === "ai.html") {
        if (isStyle1 == "true") {
            myStyleSheet.setAttribute("href", "style_ai_1.css");
        }
        if (isStyle1 == "false") {
            myStyleSheet.setAttribute("href", "style_ai_2.css");
        }
    }
}

window.onload = loadStyle;