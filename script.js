const IMAGE_ASSETS = {
  hero: "assets/images/konan-hero.jpg",
  sunflower: "assets/images/spot-sunflower.svg",
  lakeMountain: "assets/images/spot-lake.svg",
  swan: "assets/images/konan-swan.jpg"
};

function hydrateImages() {
  document.documentElement.style.setProperty("--hero-image", `url('${IMAGE_ASSETS.hero}')`);

  document.querySelectorAll("img[data-image-key]").forEach((imageElement) => {
    const key = imageElement.dataset.imageKey;
    imageElement.src = IMAGE_ASSETS[key] || "";

    if (!IMAGE_ASSETS[key]) {
      imageElement.alt = `${key}（画像URL要設定）`;
    }
  });
}

function setupScrollSpy() {
  const links = [...document.querySelectorAll('.top-nav a[href^="#"]')];
  const sectionMap = new Map();

  links.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) sectionMap.set(section, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => link.classList.remove("is-active"));
      const activeLink = sectionMap.get(visible.target);
      if (activeLink) activeLink.classList.add("is-active");
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.4, 0.7] }
  );

  sectionMap.forEach((_link, section) => observer.observe(section));
  links[0]?.classList.add("is-active");
}

hydrateImages();
setupScrollSpy();
