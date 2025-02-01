document.addEventListener("DOMContentLoaded", () => {
    // Loading screen
    window.addEventListener("load", () => {
      document.getElementById("loading-screen").style.display = "none"
    })
  
    // Mobile sidebar
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    const mobileSidebar = document.getElementById("mobile-sidebar")
    const closeSidebarBtn = document.getElementById("close-sidebar")
  
    mobileMenuBtn.addEventListener("click", () => {
      mobileSidebar.classList.add("active")
    })
  
    closeSidebarBtn.addEventListener("click", () => {
      mobileSidebar.classList.remove("active")
    })
  
    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileSidebar.contains(event.target) && event.target !== mobileMenuBtn) {
        mobileSidebar.classList.remove("active")
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Active nav link on scroll
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".desktop-nav a")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active")
        }
      })
    })
  })
  
  