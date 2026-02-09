// Modal simples para abrir os catálogos com mais fotos (imagens da web).
(() => {
  const init = () => {
    const modal = document.getElementById("catalogModal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".modal-close");
    const backdrop = modal.querySelector("[data-close]");
    const titleEl = modal.querySelector("#modalTitle");
    const viewerImg = modal.querySelector("#modalViewerImg");
    const thumbsEl = modal.querySelector("#modalThumbs");
    const prevBtn = modal.querySelector(".modal-prev");
    const nextBtn = modal.querySelector(".modal-next");
    const catalogButtons = document.querySelectorAll(".catalogo-item[data-catalog]");
    


    const catalogs = {
    ensaio: {
      title: "Ensaio Feminino",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
          alt: "Ensaio feminino em luz suave",
        },
        {
          src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1600&q=80",
          alt: "Retrato feminino em estúdio",
        },
        {
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
          alt: "Retrato feminino ao ar livre",
        },
        {
          src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1600&q=80",
          alt: "Ensaio feminino com luz natural",
        },
      ],
    },
      corporativo: {
        title: "Retratos Corporativos",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
          alt: "Ambiente corporativo com equipe",
        },
      ],
    },
    familia: {
      title: "Família & Maternidade",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
          alt: "Ensaio em clima aconchegante",
        },
        {
          src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=80",
          alt: "Família em ensaio ao ar livre",
        },
        {
          src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
          alt: "Mãe com bebê",
        },
        {
          src: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1600&q=80",
          alt: "Gestante em ensaio",
        },
      ],
    },
    branding: {
      title: "Branding para Negócios",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=1600&q=80",
          alt: "Identidade visual e branding",
        },
        {
          src: "https://thumbor.guiame.com.br/unsafe/smart/https%3A//media.guiame.com.br/archives/2023/09/06/1358235093-frank-mendonca.jpg",
          alt: "Pastor Frank Mendonça (Goiânia)",
          position: "center 20%",
        },
        {
          src: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
          alt: "Conteúdo de marca em ambiente criativo",
        },
        {
          src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
          alt: "Ambiente de negócio para branding",
        },
      ],
    },
    casamento: {
      title: "Casamento",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
          alt: "Foto de casamento",
        },
        {
          src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
          alt: "Cerimônia de casamento",
        },
        {
          src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
          alt: "Casal em ensaio de casamento",
        },
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
          alt: "Noivos em casamento",
        },
        {
          src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
          alt: "Cerimônia de casamento ao ar livre",
        },
        {
          src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80",
          alt: "Festa de casamento",
        },
        {
          src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=80",
          alt: "Detalhes de casamento",
        },
        {
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
          alt: "Noivos ao ar livre (foto ilustrativa)",
        },
      ],
    },
    igreja: {
      title: "Eventos de Igreja",
      photos: [
        {
          src: "https://umadego.carrd.co/assets/images/image01.jpg?v=743d3584",
          alt: "UMADEGO — evento de jovens",
        },
        {
          src: "https://umadego.carrd.co/assets/images/image02.jpg?v=743d3584",
          alt: "UMADEGO — culto e louvor",
        },
        {
          src: "https://thumbor.guiame.com.br/unsafe/840x500/http://media.guiame.com.br/archives/2023/09/06/4117216554-setembro-amarelo.jpg",
          alt: "Ministério Vida — campanha de culto",
        },
        {
          src: "https://thumbor.guiame.com.br/unsafe/smart/https%3A//media.guiame.com.br/archives/2023/09/06/1358235093-frank-mendonca.jpg",
          alt: "Ministério Vida — Pastor Frank Mendonça",
        },
      ],
    },
  };

    let lastFocusedEl = null;
    let currentCatalogKey = null;
    let currentIndex = 0;

    function setActivePhoto(index) {
      const data = catalogs[currentCatalogKey];
      if (!data || !data.photos[index]) return;

      const photo = data.photos[index];
      currentIndex = index;
      viewerImg.src = photo.src;
      viewerImg.alt = photo.alt;
      viewerImg.style.objectPosition = photo.position || "center";

      const thumbs = modal.querySelectorAll(".modal-thumb");
      thumbs.forEach((thumbEl, idx) => {
        thumbEl.classList.toggle("is-active", idx === index);
      });
    }

    function openModal(catalogKey) {
      const data = catalogs[catalogKey];
      if (!data) return;

      lastFocusedEl = document.activeElement;
      currentCatalogKey = catalogKey;

      titleEl.textContent = data.title;
      thumbsEl.innerHTML = "";

      data.photos.forEach((photo, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `modal-thumb${idx === 0 ? " is-active" : ""}`;
        btn.setAttribute("aria-label", `Ver foto ${idx + 1} de ${data.photos.length}`);

        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.alt;
        img.loading = "lazy";

        btn.appendChild(img);
        btn.addEventListener("click", () => setActivePhoto(idx));
        thumbsEl.appendChild(btn);
      });

      setActivePhoto(0);

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      thumbsEl.innerHTML = "";
      viewerImg.removeAttribute("src");
      viewerImg.alt = "";
      currentCatalogKey = null;
      currentIndex = 0;

      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
        lastFocusedEl.focus();
      }
    }

    function showNext(step) {
      const data = catalogs[currentCatalogKey];
      if (!data) return;
      const total = data.photos.length;
      const nextIndex = (currentIndex + step + total) % total;
      setActivePhoto(nextIndex);
    }

    catalogButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        openModal(btn.dataset.catalog);
      });
    });

    if (prevBtn) prevBtn.addEventListener("click", () => showNext(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => showNext(1));

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (event) => {
      if (!modal.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        showNext(1);
      }

      if (event.key === "ArrowLeft") {
        showNext(-1);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
