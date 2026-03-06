const btn = document.getElementById("contactBtn")
const icons = document.querySelector(".contact-icons")

btn.onclick = () => {

if(icons.style.display === "flex"){

icons.style.display = "none"

}else{

icons.style.display = "flex"

}

}