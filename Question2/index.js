const output = document.getElementById("output");
const submit = document.getElementById("submit");
    const input = document.getElementById("input");

    submit.addEventListener("click", () => {
        output.innerHTML += `<p>${input.value}</p>`;
        input.value = "";
    });
