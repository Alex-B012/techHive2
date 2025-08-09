import careers1_img from "../assets/images_careers/careers1.webp"
import growth_img from "../assets/images_careers/growth.webp"
import domore_img from "../assets/images_careers/domore.webp"
import innovations_img from "../assets/images_careers/innovations.webp"

export const careersWelcome = {
   img: { name: "Welcome", url: careers1_img },
   title: "Shape your future in our digital ecosystem",
   text: "Be part of TechHive’s journey from future to present, where forward-thinking innovation and authentic passion unite to transform lives through technology",
}

export const guidingPrincipals = {
   title: "Our guiding principles ",
   text_data: [
      {
         id: 1,
         title: "Growth and Advancement",
         text: "We empower our team members by providing the environment, resources, and guidance essential for personal and professional development",
         img: { name: "Growth", url: growth_img },
      },
      {
         id: 2,
         title: "Passion and Deep Commitment",
         text: "Fueled by pure enthusiasm, our team consists of like-minded individuals who inspire each other to excel and enjoy every step of the journey",
         img: { name: "Commitment", url: domore_img },
      },
      {
         id: 3,
         title: "Game-Changing Evolution",
         text: "We turn possibilities into reality! We are committed to leading an industry revolution by building exceptional systems, developing groundbreaking processes, and integrating state-of-the-art technologies to ensure your triumph",
         img: { name: "Innovations", url: innovations_img },
      }
   ]
}

export const buttonText = "Explore Available Positions"