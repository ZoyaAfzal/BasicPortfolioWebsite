
import { UserObject } from "@/model/user";
import { NavItems } from "@/model/header";
import { Profiles } from "@/model/header";



export const userInfo: UserObject = {
    name: "Zoya Afzal",
    img: "/images/mypic.next2.png",
    heading: " I'm skilled front-end developer based in Pakistan, with a passion of building responsive, user-friendly websites.",
    about: `
    <p>I am a passionate front-end developer and AI enthusiast  with a proficiency in modern front-end technoligies,including Html, Css, Javascript and Typescript, with hands-on experience in javascript library 'React' and it's framework 'Next.js'.</p>
    <p>My journey in IT began in GIAIC, since then. i have priviledge to work on a diverse range of projects and to become proficient in Cloud-Computing and AI.</p>
    <p>I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting objects.</p>`,
    skills: ["React", "Next.js", "Typescript","Javascript", "CSS","HTML"]
}

export const headerItems: NavItems = {
    home : {label:"Home" , page:"home"},
    about : {label:"About" , page:"about"},
    contact: {label:"Contact" , page:"contact"}
}




