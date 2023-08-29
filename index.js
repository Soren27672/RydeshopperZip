
document.addEventListener("DOMContentLoaded",init)

function init() {
    const form = document.querySelector("form");

    form.addEventListener("submit", e => {
        e.preventDefault();
        console.log(e.target.zip.value);
    })
}