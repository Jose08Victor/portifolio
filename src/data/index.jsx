import desktopProject1Image from "../assets/desktop-pokemon-project.png"
import mobileProject1Image from "../assets/mobile-pokemon-project.png"
import desktopProject2Image from "../assets/desktop-section-project.png"
import mobileProject2Image from "../assets/mobile-section-project.png"
import desktopProject3Image from "../assets/desktop-landing-page-project.gif"
import mobileProject3Image from "../assets/mobile-landing-page-project.gif"
import desktopProject4Image from "../assets/desktop-git-hub-project.png"
import mobileProject4Image from "../assets/mobile-git-hub-project.png"
import desktopProject5Image from "../assets/desktop-portfolio-project.png"
import mobileProject5Image from "../assets/mobile-portfolio-project.png"

export const projectData = [
    {
        id: 1,
        title: "Pokemon Research",
        desktopImage: `${desktopProject1Image}`,
        mobileImage: `${mobileProject1Image}`,
        site: "https://jose08victor.github.io/pokemon-research/",
        github: "https://github.com/Jose08Victor/pokemon-research.git",
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
        title: "Clipboard Landing Page",
        desktopImage: `${desktopProject3Image}`,
        mobileImage: `${mobileProject3Image}`,
        site: "https://jose08victor.github.io/clipboard-landing-page/",
        github: "https://github.com/Jose08Victor/clipboard-landing-page.git",
        description: "Esta landing page foi construída exclusivamente utilizando HTML e CSS, sendo resultado de um desafio proposto pela Front-end Mentor. A iniciativa representou uma valiosa oportunidade de aprimorar minhas habilidades, especialmente no domínio de técnicas como flexibilidade, responsividade e organização de múltiplos arquivos CSS."
    },
    {
        id: 4,
        title: "Profile Search | GitHub Api",
        desktopImage: `${desktopProject4Image}`,
        mobileImage: `${mobileProject4Image}`,
        site: "https://jose08victor.github.io/profile-search---giithub-api/",
        github: "https://github.com/Jose08Victor/profile-search---giithub-api.git",
        description: 'Esse projeto apresenta um campo de pesquisa no qual é possível inserir o nome do usuário cujo perfil se deseja visualizar. Ao acionar o botão "Buscar" ou pressionar a tecla Enter, o sistema realiza uma busca utilizando a API do GitHub.Resultante de um desafio no módulo avançado de JavaScript oferecido pela DevQuest no curso de desenvolvimento front-end, este projeto reflete a aplicação prática dos conceitos aprendidos.'
    },
    {
        id: 5,
        title: "Portifólio",
        desktopImage: `${desktopProject5Image}`,
        mobileImage: `${mobileProject5Image}`,
        github: "https://github.com/Jose08Victor/portifolio.git",
        description: "Com muito orgulho, apresento este projeto que desenvolvi com dedicação e atenção aos detalhes. A criação, realizada com o framework React.js, integrando-se junto às bibliotecas React-Router-Dom e Styled-Components. Ao utilizar essa combinação de tecnologias, busquei não apenas um resultado esteticamente agradável, mas também uma experiência fluida e eficiente para o usuário."
    }
]

export const skillsData = []