var input_name = document.querySelector("#name");
var input = document.querySelector("#interpretation");
var button = document.querySelector("button");
var append_div = document.querySelector("#append");

output = () =>
{
    event.preventDefault();
    var new_div; 

    new_div = document.createElement("div");
    new_div.className = "figure";
    new_div.style = "flex-direction: column;"
    append_div.appendChild(new_div);
    const new_text = document.createElement("div");
    new_text.className = "text";
    new_div.appendChild(new_text);
    const new_name = document.createElement("h3");
    new_name.textContent = input_name.value;
    new_text.appendChild(new_name);
    const new_break = document.createElement("br");
    new_text.appendChild(new_break);
    const new_entry = document.createElement("p");
    new_entry.textContent = input.value;
    new_text.appendChild(new_entry);
}

button.addEventListener("click",output);