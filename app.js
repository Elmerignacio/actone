import {imagess} from "./img.js"
import {info} from "./info.js"


let container = document.getElementById("container")

const data = {
title :"The Images of a dog",
para: "Dogs are loyal friends to humans, offering love and companionship. They make life happier and remind us of the special bond between people and pets",
images:"dog.jpg",
buttonOne:"About dogs",
buttonTwo:"learn more"

}

const{title, para, images,buttonOne, buttonTwo, } = data
container.append(imagess(images))
container.append(info(title, para,buttonOne, buttonTwo, ))
