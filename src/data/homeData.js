import coupe from "../assets/coupe.jpg";
import services from "../assets/services.jpg";
import contact from "../assets/contact.jpg";

const homeData = [
  {
    id: 0,
    title: "Nos coupes",
    link: "/coupe",
    src: services,
    alt: "Coiffeur coupant les cheveux a un enfant",
  },
  {
    id: 1,
    title: "Nos tarifs",
    link: "/tarifs",
    src: coupe,
    alt: "homme noir qui se fait coiffer les cheveux au coiffeur",
  },

  {
    id: 2,
    title: "Réserver",
    link: "/contact",
    src: contact,
    alt: "telephone ancien avec une montre en or et de belles décorations vintage",
  },
];

export default homeData;
