    let faq = document.querySelectorAll (".text1");

    faq.forEach(text1 => {
        text1.addEventListener("click", () => {
            text1.classList.toggle("active");
        });
    });
