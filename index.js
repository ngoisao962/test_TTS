const header = document.querySelector(".home-header");
const f_news = document.querySelector(".f-news")
const md_logo = document.querySelector(".md-logo")
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    header.classList.add("fixed");
    // f_news.classList.remove("none");
  } else {
    header.classList.remove("fixed");
    // f_news.classList.add("none");
    
  }
});
window.addEventListener("scroll", () => {
  const currentScrollnew = window.pageYOffset;
  if (currentScrollnew > 250) {
      md_logo.classList.remove("none")
  } else {
    
    md_logo.classList.add("none")
  }
});


