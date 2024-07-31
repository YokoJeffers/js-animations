document.addEventListener("DOMContentLoaded", function () {
  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("displayed");
      } else {
        entry.target.classList.remove("displayed");
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, { threshold: 1 });

  document.querySelectorAll(".box").forEach((box) => {
    observer.observe(box);
  });
});