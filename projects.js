const projects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge web application built with React and Node.js",
    image: "1.jpg",
    link: "https://example.com/project-alpha",
    category: "Webpages",
  },
  {
    title: "Project Beta",
    description: "A modern e-commerce platform using Node.js and MongoDB",
    image: "2.jpg",
    link: "https://example.com/project-beta",
    category: "Webpages",
  },
  {
    title: "Project Gamma",
    description: "An AI-powered application with deep learning models",
    image: "3.jpg",
    link: "https://example.com/project-gamma",
    category: "Apps",
  },
  {
    title: "Project Delta",
    description:
      "A mobile app built with React Native for real-time communication",
    image: "4.jpg",
    link: "https://example.com/project-delta",
    category: "Apps",
  },
  {
    title: "Project Epsilon",
    description: "A dynamic dashboard for data visualization built with D3.js",
    image: "5.jpg",
    link: "https://example.com/project-epsilon",
    category: "Webpages",
  },
  {
    title: "Project Zeta",
    description:
      "A robust CRM system with advanced features for sales management",
    image: "6.jpg",
    link: "https://example.com/project-zeta",
    category: "Apps",
  },
  {
    title: "Project Eta",
    description: "An online learning platform with interactive content",
    image: "7.jpg",
    link: "https://example.com/project-eta",
    category: "Webpages",
  },
  {
    title: "Project Theta",
    description:
      "A blogging platform with a focus on content creation and sharing",
    image: "8.jpg",
    link: "https://example.com/project-theta",
    category: "Webpages",
  },
  {
    title: "Project Iota",
    description:
      "A personal finance management application with budgeting features",
    image: "9.jpg",
    link: "https://example.com/project-iota",
    category: "Apps",
  },
  {
    title: "Project Kappa",
    description:
      "An online marketplace platform for buying and selling products",
    image: "10.jpg",
    link: "https://example.com/project-kappa",
    category: "Webpages",
  },
  {
    title: "Project Lambda",
    description:
      "A task management tool designed for collaboration and productivity",
    image: "11.jpg",
    link: "https://example.com/project-lambda",
    category: "Apps",
  },
  {
    title: "Project Mu",
    description: "A web-based photo gallery with interactive features",
    image: "12.jpg",
    link: "https://example.com/project-mu",
    category: "Design",
  },
  {
    title: "Project Nu",
    description: "An event planning application with attendee management",
    image: "13.jpg",
    link: "https://example.com/project-nu",
    category: "Apps",
  },
  {
    title: "Project Xi",
    description: "A recipe-sharing platform with social features",
    image: "14.jpg",
    link: "https://example.com/project-xi",
    category: "Webpages",
  },
  {
    title: "Project Omicron",
    description: "A customizable web app for managing online stores",
    image: "15.jpg",
    link: "https://example.com/project-omicron",
    category: "Webpages",
  },
  {
    title: "Project Pi",
    description: "A photo editing app with powerful filters",
    image: "16.jpg",
    link: "https://example.com/project-pi",
    category: "Apps",
  },
  {
    title: "Project Rho",
    description: "A sleek website for showcasing portfolios",
    image: "17.jpg",
    link: "https://example.com/project-rho",
    category: "Webpages",
  },
  {
    title: "Project Sigma",
    description: "An interactive game built with WebGL",
    image: "18.jpg",
    link: "https://example.com/project-sigma",
    category: "Design",
  },
  {
    title: "Project Tau",
    description: "A mobile app designed for travel planning",
    image: "19.jpg",
    link: "https://example.com/project-tau",
    category: "Apps",
  },
  {
    title: "Project Upsilon",
    description: "A minimalistic website for photography portfolios",
    image: "20.jpg",
    link: "https://example.com/project-upsilon",
    category: "Webpages",
  },
  {
    title: "Project Phi",
    description: "A web-based fitness tracker with personalized workout plans",
    image: "21.jpg",
    link: "https://example.com/project-phi",
    category: "Webpages",
  },
  {
    title: "Project Chi",
    description: "A web-based budgeting tool for managing expenses",
    image: "22.jpg",
    link: "https://example.com/project-chi",
    category: "Webpages",
  },
  {
    title: "Project Psi",
    description: "A real-time collaborative whiteboard app",
    image: "23.jpg",
    link: "https://example.com/project-psi",
    category: "Apps",
  },
  {
    title: "Project Omega",
    description:
      "A website for displaying dynamic content based on user preferences",
    image: "24.jpg",
    link: "https://example.com/project-omega",
    category: "Webpages",
  },
  {
    title: "Project Alpha2",
    description: "A web-based platform for managing virtual meetings",
    image: "25.jpg",
    link: "https://example.com/project-alpha2",
    category: "Webpages",
  },
  {
    title: "Project Beta2",
    description:
      "A productivity app focused on task management and team collaboration",
    image: "26.jpg",
    link: "https://example.com/project-beta2",
    category: "Apps",
  },
  {
    title: "Project Gamma2",
    description: "An app designed for live event streaming",
    image: "27.jpg",
    link: "https://example.com/project-gamma2",
    category: "Apps",
  },
  {
    title: "Project Delta2",
    description: "An online platform for digital art portfolios",
    image: "28.jpg",
    link: "https://example.com/project-delta2",
    category: "Design",
  },
  {
    title: "Project Epsilon2",
    description: "A web application for project management",
    image: "29.jpg",
    link: "https://example.com/project-epsilon2",
    category: "Webpages",
  },
  {
    title: "Project Zeta2",
    description: "An interactive app for meditation and relaxation",
    image: "30.jpg",
    link: "https://example.com/project-zeta2",
    category: "Apps",
  },
  {
    title: "Project Eta2",
    description: "A customizable website theme for blogs",
    image: "31.jpg",
    link: "https://example.com/project-eta2",
    category: "Design",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.querySelector(".projects-grid");
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const projectLink = document.getElementById("projectLink");

  // Create project cards
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <img class="project-image" src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    `;
    card.addEventListener("click", () => openModal(project));
    projectsGrid.appendChild(card);
  });

  // Open modal function
  function openModal(project) {
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    projectLink.href = project.link;
    modal.style.display = "block";
  }

  // Close modal function
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for close button
  document.getElementById("closeModal").addEventListener("click", closeModal);

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

const projectsGrid = document.querySelector(".projects-grid");
const seeMoreBtn = document.getElementById("seeMore");

let visibleProjects = 10; // Initially show 10 projects

// Function to render projects based on the visible count
function renderProjects() {
  projectsGrid.innerHTML = ""; // Clear current grid
  projects.slice(0, visibleProjects).forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
  <img class="project-image" src="${project.image}" alt="${project.title}">
  <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
  </div>
`;
    card.addEventListener("click", () => openModal(project));
    projectsGrid.appendChild(card);
  });

  // Hide "See More" button if all projects are visible
  if (visibleProjects >= projects.length) {
    seeMoreBtn.style.display = "none";
  }
}

// Event listener for "See More" button
seeMoreBtn.addEventListener("click", () => {
  visibleProjects += 5; // Show 5 more projects
  renderProjects();
});

// Initial render
renderProjects();
