// Nav Hover Animation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'all 0.3s';
    link.style.transform = 'scale(1.1)';
    link.style.color = '#f39c12';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
    link.style.color = '';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const genreFilter = document.getElementById("genreFilter");
  const searchBox = document.getElementById("searchBox");
  const movies = document.querySelectorAll(".tamil-movie-card");

  function filterMovies() {
    const selectedGenre = genreFilter.value.toLowerCase();
    const searchText = searchBox.value.toLowerCase();

    movies.forEach(movie => {
      const title = movie.getAttribute("data-title").toLowerCase();
      const genre = movie.getAttribute("data-genre").toLowerCase();
      const matchesGenre = selectedGenre === "all" || genre === selectedGenre;
      const matchesSearch = title.includes(searchText);

      if (matchesGenre && matchesSearch) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  }

  genreFilter.addEventListener("change", filterMovies);
  searchBox.addEventListener("input", filterMovies);
});
document.addEventListener("DOMContentLoaded", () => {
  const genreFilter = document.getElementById("genreFilter");
  const searchBox = document.getElementById("searchBox");
  const movieCards = document.querySelectorAll(".movie-card");

  function filterMovies() {
    const selectedGenre = genreFilter.value.toLowerCase();
    const searchQuery = searchBox.value.toLowerCase();

    movieCards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const genre = card.dataset.genre?.toLowerCase() || "";

      const matchGenre = selectedGenre === "all" || genre === selectedGenre;
      const matchSearch = title.includes(searchQuery);

      card.style.display = matchGenre && matchSearch ? "block" : "none";
    });
  }

  genreFilter.addEventListener("change", filterMovies);
  searchBox.addEventListener("input", filterMovies);
});

document.addEventListener("DOMContentLoaded", () => {
  const genreFilter = document.getElementById("genreFilter");
  const searchBox = document.getElementById("searchBox");

  genreFilter.addEventListener("change", filterMovies);
  searchBox.addEventListener("input", filterMovies);

  function filterMovies() {
    const genre = genreFilter.value.toLowerCase();
    const searchTerm = searchBox.value.toLowerCase();
    const allMovies = document.querySelectorAll(".movie-card");

    allMovies.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const matchesGenre = genre === "all" || card.classList.contains(genre);
      const matchesSearch = title.includes(searchTerm);

      card.style.display = (matchesGenre && matchesSearch) ? "block" : "none";
    });
  }
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down
    navbar.style.transform = "translateY(-100%) scale(0.95)";
    navbar.style.opacity = "0";
    navbar.style.boxShadow = "none";
  } else {
    // Scroll Up
    navbar.style.transform = "translateY(0) scale(1)";
    navbar.style.opacity = "1";
    navbar.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.6)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Optional visual effect when the section appears on scroll
const subscriptionSection = document.querySelector(".subscription-section");

window.addEventListener("scroll", () => {
  const sectionTop = subscriptionSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    subscriptionSection.style.opacity = 1;
    subscriptionSection.style.transform = "translateY(0)";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  subscriptionSection.style.opacity = 0;
  subscriptionSection.style.transform = "translateY(50px)";
  subscriptionSection.style.transition = "all 0.8s ease";
});
