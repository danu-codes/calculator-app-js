const key = document.querySelectorAll(".cal-key")
const display_text = document.querySelector("#display-text")

display_text.textContent = "0"

key.forEach(key => {
    key.addEventListener("click", function () {


        const value = key.textContent

        if (value === 'C') {
            display_text.textContent = "0"
            return
        }
        if (display_text.textContent === "Invalid Entry!") {
            display_text.textContent = "0"
        }
        if (value === "=") {
            try {
                // replace × and ÷ before evaluating
                let expression = display_text.textContent.replace(/X/g, "*").replace(/÷/g, "/");
                display_text.textContent = eval(expression);
            } catch {
                display_text.textContent = "Invalid Entry!";
                return
            }
        }
        else {
            if (display_text.textContent === "0" && !isNaN(value)) {
                display_text.textContent = value;
            } else {
                display_text.textContent += value;
            }
        }

        console.log(display_text.textContent)
    })
});


//Use keys from keyboards
document.addEventListener("keydown", function (e) {
    const key = e.key;
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        if (display_text.textContent === "0") display_text.textContent = key;
        else display_text.textContent += key;
    } else if (key === "Enter") {
        try {
            display_text.textContent = eval(display_text.textContent);
        } catch {
            display_text.textContent = "Invalid Entry!";
        }
    } else if (key === "Backspace") {
        display_text.textContent = display_text.textContent.slice(0, -1) || "0";
    } else if (key === "Escape") {
        display_text.textContent = "0";
    }
});
