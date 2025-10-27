// Lista de projetos
const projetos = [
  {
    nome: "Landing Page Responsiva",
    descricao: "Site moderno e totalmente responsivo feito em HTML, CSS e JavaScript.",
    link: "#"
  },
  {
    nome: "Sistema de Gestão de Cursos",
    descricao: "Aplicação completa em JavaFX com integração ao MySQL.",
    link: "#"
  },
  {
    nome: "API com Node.js e Express",
    descricao: "Backend RESTful com autenticação JWT e CRUD completo.",
    link: "#"
  }
];

// Container dos projetos
const container = document.getElementById("projects-container");

// Animação suave na entrada dos cards
const createProjectCard = (proj, delay) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.opacity = 0;
  card.style.transition = "opacity 0.6s ease";
  card.innerHTML = `
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}" target="_blank">Ver projeto →</a>
  `;
  container.appendChild(card);
  setTimeout(() => (card.style.opacity = 1), delay);
};

// Cria os cards com leve atraso para efeito visual
projetos.forEach((proj, index) => createProjectCard(proj, index * 200));
