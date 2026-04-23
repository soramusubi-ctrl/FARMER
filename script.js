const IMAGE_ASSETS = {
  hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  sunflower:
    "https://images.unsplash.com/photo-1474511016485-53594a9b44a0?auto=format&fit=crop&w=900&q=80",
  lakeMountain:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  swan: "https://images.unsplash.com/photo-1437623889155-075d40e2e59f?auto=format&fit=crop&w=900&q=80"
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

hydrateImages();
