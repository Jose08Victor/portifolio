import desktopProject1Image from "../assets/desktop-pokemon-project.png"
import mobileProject1Image from "../assets/mobile-pokemon-project.png"
import desktopProject2Image from "../assets/desktop-section-project.png"
import mobileProject2Image from "../assets/mobile-section-project.png"
import desktopProject3Image from "../assets/desktop-git-hub-project.png"
import mobileProject3Image from "../assets/mobile-git-hub-project.png"
import pc from "../assets/pc.png"
import cellphone from "../assets/cellphone.png"

export const projectData = [
    {
        id: 1,
        title: "Pokemon Research",
        desktopImage: `${desktopProject1Image}`,
        mobileImage: `${mobileProject1Image}`,
        site: "https://jose08victor.github.io/quest-react-avancado/",
        github: "https://github.com/Jose08Victor/quest-react-avancado.git",
        description: "Este projeto apresenta uma lista de Pokémons da 1ª Geração, desenvolvido utilizando React para aproveitar o conceito de Single Page Applications (SPA). As informações dos Pokémons foram obtidas através da API pokeapi.co. O react-router-dom foi utilizado para facilitar a navegação entre as páginas. Além disso, a Context API foi utilizada para criar um Theme Toggler, permitindo a alternância entre os temas claro e escuro. A estilização completa do projeto foi realizada com o uso do styled-components."
    },
    {
        id: 2,
        title: "Section With Dropdown Navigation",
        desktopImage: `${desktopProject2Image}`,
        mobileImage: `${mobileProject2Image}`,
        site: "https://jose08victor.github.io/intro-section-with-dropdown-navigation/",
        github: "https://github.com/Jose08Victor/intro-section-with-dropdown-navigation.git",
        description: "O projeto visa simular um website representativo de uma empresa especializada em desenvolver soluções para ambientes de trabalho remotos. Seu propósito central é facilitar e organizar empresas que já adotam essa modalidade de trabalho ou ajudar empresas que tenham interesse em incorporá-la em suas operações."
    },
    {
        id: 3,
        title: "Portifólio",
        desktopImage: `${pc}`,
        mobileImage: `${cellphone}`,
        github: "https://github.com/Jose08Victor/quest-react-avancado.git",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat ducimus illum, ab sit labore temporibus praesentium officia, quod excepturi doloribus. Deleniti ipsam error consequuntur eos voluptas? Rem, quam aspernatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aut corporis delectus possimus, laboriosam quo neque maiores hic nihil repellendus, soluta rerum repudiandae libero veritatis? Doloremque iure inventore repellendus dolorum?"
    },
    {
        id: 4,
        title: "Profile Search | GitHub Api",
        desktopImage: `${desktopProject3Image}`,
        mobileImage: `${mobileProject3Image}`,
        site: "https://jose08victor.github.io/quest-js-api-avancado/",
        github: "https://github.com/Jose08Victor/quest-js-api-avancado.git",
        description: 'Esse projeto apresenta um campo de pesquisa no qual é possível inserir o nome do usuário cujo perfil se deseja visualizar. Ao acionar o botão "Buscar" ou pressionar a tecla Enter, o sistema realiza uma busca utilizando a API do GitHub.Resultante de um desafio no módulo avançado de JavaScript oferecido pela DevQuest no curso de desenvolvimento front-end, este projeto reflete a aplicação prática dos conceitos aprendidos.'
    },
    {
        id: 5,
        title: "Clipboard Landing Page",
        desktopImage: `${pc}`,
        mobileImage: `${cellphone}`,
        site: "https://jose08victor.github.io/quest-react-avancado/",
        github: "https://github.com/Jose08Victor/quest-react-avancado.git",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat ducimus illum, ab sit labore temporibus praesentium officia, quod excepturi doloribus. Deleniti ipsam error consequuntur eos voluptas? Rem, quam aspernatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aut corporis delectus possimus, laboriosam quo neque maiores hic nihil repellendus, soluta rerum repudiandae libero veritatis? Doloremque iure inventore repellendus dolorum?"
    }
]

export const skillsData = []