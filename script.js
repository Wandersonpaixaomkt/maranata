const INTRO_DURATION = 3200; // ajuste aqui o tempo da animação de entrada, se necessário

const categories = [
  { id: "calcados", label: "Calçados" },
  { id: "confeccao", label: "Confecção" },
  { id: "moveis", label: "Móveis" },
  { id: "colchoes", label: "Colchões" },
  { id: "enxoval", label: "Enxoval" },
  { id: "eletro", label: "Eletro" }
];

/*
  Dados extraídos do cadastro enviado pelo cliente.
  Observações:
  - "Karina Mendonça" apareceu duplicada no PDF com o mesmo número; foi mantido apenas 1 cadastro.
  - "Josiene de Oliveira Santos" apareceu em versões repetidas; os setores foram consolidados.
  - Um registro de "Josiene" estava sem telefone e não foi publicado no botão do WhatsApp.
  - As fotos desta versão são placeholders editáveis em SVG para facilitar a troca local depois.
*/
const vendorDirectory = [
  {
    "name": "Rebeca",
    "phone": "94992053197",
    "sectors": [
      "calcados",
      "colchoes",
      "confeccao",
      "enxoval"
    ],
    "photo": "assets/vendors/rebeca.svg"
  },
  {
    "name": "Nilcilene",
    "phone": "94991447441",
    "sectors": [
      "calcados",
      "colchoes",
      "confeccao",
      "enxoval"
    ],
    "photo": "assets/vendors/nilcilene.svg"
  },
  {
    "name": "Lorrayne",
    "phone": "94992692086",
    "sectors": [
      "calcados",
      "colchoes"
    ],
    "photo": "assets/vendors/lorrayne.svg"
  },
  {
    "name": "Leide Weine",
    "phone": "94991986044",
    "sectors": [
      "calcados",
      "colchoes",
      "confeccao",
      "enxoval"
    ],
    "photo": "assets/vendors/leide-weine.svg"
  },
  {
    "name": "Laura",
    "phone": "94992668375",
    "sectors": [
      "calcados",
      "colchoes",
      "confeccao",
      "enxoval"
    ],
    "photo": "assets/vendors/laura.svg"
  },
  {
    "name": "Karina Mendonça",
    "phone": "94984244526",
    "sectors": [
      "colchoes",
      "eletro",
      "enxoval",
      "moveis"
    ],
    "photo": "assets/vendors/karina-mendonca.svg"
  },
  {
    "name": "Josiene de Oliveira Santos",
    "phone": "94992880604",
    "sectors": [
      "calcados",
      "colchoes",
      "confeccao",
      "enxoval"
    ],
    "photo": "assets/vendors/josiene-de-oliveira-santos.svg"
  },
  {
    "name": "Éder de Oliveira Sousa",
    "phone": "94984187585",
    "sectors": [
      "colchoes",
      "eletro",
      "enxoval",
      "moveis"
    ],
    "photo": "assets/vendors/eder-de-oliveira-sousa.svg"
  },
  {
    "name": "Deyse",
    "phone": "94992546379",
    "sectors": [
      "colchoes",
      "eletro",
      "enxoval",
      "moveis"
    ],
    "photo": "assets/vendors/deyse.svg"
  },
  {
    "name": "Ana Paula",
    "phone": "94992491484",
    "sectors": [
      "colchoes",
      "eletro",
      "enxoval",
      "moveis"
    ],
    "photo": "assets/vendors/ana-paula.svg"
  },
  {
    "name": "Nathalia Castro Araújo Soares",
    "phone": "94992465827",
    "sectors": [
      "colchoes",
      "eletro",
      "enxoval",
      "moveis"
    ],
    "photo": "assets/vendors/nathalia-castro-araujo-soares.svg"
  }
];

const offers = [
  {
    name: "Sofá 3 Lugares Elegante",
    oldPrice: "R$ 2.499,90",
    newPrice: "R$ 1.999,90",
    discount: "20% de desconto",
    image: "assets/offers/sofa-elegance.svg"
  },
  {
    name: "Guarda-Roupa Casal Prime",
    oldPrice: "R$ 3.199,90",
    newPrice: "R$ 2.649,90",
    discount: "17% de desconto",
    image: "assets/offers/guarda-roupa-prime.svg"
  },
  {
    name: "Tênis Casual Urbano",
    oldPrice: "R$ 249,90",
    newPrice: "R$ 179,90",
    discount: "28% de desconto",
    image: "assets/offers/tenis-urban.svg"
  },
  {
    name: "Jogo de Lençol Premium",
    oldPrice: "R$ 189,90",
    newPrice: "R$ 139,90",
    discount: "26% de desconto",
    image: "assets/offers/lencol-premium.svg"
  },
  {
    name: "Colchão Queen Conforto",
    oldPrice: "R$ 2.099,90",
    newPrice: "R$ 1.699,90",
    discount: "19% de desconto",
    image: "assets/offers/colchao-comfort.svg"
  },
  {
    name: "Rack Horizonte 1,80m",
    oldPrice: "R$ 1.149,90",
    newPrice: "R$ 899,90",
    discount: "21% de desconto",
    image: "assets/offers/rack-horizon.svg"
  },
  {
    name: "Conjunto Fitness Feminino",
    oldPrice: "R$ 159,90",
    newPrice: "R$ 109,90",
    discount: "31% de desconto",
    image: "assets/offers/conjunto-fitness.svg"
  },
  {
    name: "Kit de Toalhas Toque Macio",
    oldPrice: "R$ 119,90",
    newPrice: "R$ 84,90",
    discount: "29% de desconto",
    image: "assets/offers/toalhas-soft.svg"
  }
];

const storeImages = [
  { image: "assets/store/ambiente-1.svg", alt: "Ambiente da loja 1" },
  { image: "assets/store/ambiente-2.svg", alt: "Ambiente da loja 2" },
  { image: "assets/store/ambiente-3.svg", alt: "Ambiente da loja 3" },
  { image: "assets/store/ambiente-4.svg", alt: "Ambiente da loja 4" },
  { image: "assets/store/ambiente-5.svg", alt: "Ambiente da loja 5" }
];

const vendors = vendorDirectory.reduce((acc, vendor) => {
  vendor.sectors.forEach(sector => {
    if (!acc[sector]) acc[sector] = [];
    acc[sector].push(vendor);
  });
  return acc;
}, {});

const state = {
  activeTab: "atendimento",
  activeCategory: "moveis"
};

const startBtn = document.getElementById("startBtn");
const launchScreen = document.getElementById("launchScreen");
const introOverlay = document.getElementById("introOverlay");
const appShell = document.getElementById("appShell");
const categoryBar = document.getElementById("categoryBar");
const vendorsGrid = document.getElementById("vendorsGrid");
const offersGrid = document.getElementById("offersGrid");
const carouselTrack = document.getElementById("carouselTrack");
const tabButtons = [...document.querySelectorAll(".tab-btn")];
const panels = {
  atendimento: document.getElementById("panel-atendimento"),
  ofertas: document.getElementById("panel-ofertas")
};

function buildWhatsAppLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatPhoneDisplay(value) {
  const digits = onlyDigits(value);
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return value;
}

function formatPhoneLink(value) {
  const digits = onlyDigits(value);
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function getCategoryLabel(categoryId) {
  return categories.find(item => item.id === categoryId)?.label || categoryId;
}

function renderCategories() {
  categoryBar.innerHTML = categories.map(category => `
    <button
      class="category-btn ${category.id === state.activeCategory ? "active" : ""}"
      data-category="${category.id}"
      type="button"
    >
      ${category.label}
    </button>
  `).join("");

  [...categoryBar.querySelectorAll(".category-btn")].forEach(button => {
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.category;
      renderCategories();
      renderVendors();
    });
  });
}

function renderVendors() {
  const activeCategoryData = categories.find(item => item.id === state.activeCategory);
  const activeVendors = vendors[state.activeCategory] || [];

  vendorsGrid.innerHTML = activeVendors.map(vendor => {
    const message = `Olá, vim pelo link da bio da Maranata e quero atendimento no setor de ${activeCategoryData.label}.`;
    const otherSectors = vendor.sectors
      .filter(sector => sector !== state.activeCategory)
      .map(getCategoryLabel)
      .join(" • ");

    const roleText = otherSectors
      ? `Atende também: ${otherSectors}`
      : `Atendimento exclusivo em ${activeCategoryData.label}`;

    return `
      <a
        class="vendor-card"
        href="${buildWhatsAppLink(formatPhoneLink(vendor.phone), message)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com ${vendor.name} no WhatsApp"
      >
        <img class="vendor-photo" src="${vendor.photo}" alt="${vendor.name}" />
        <div class="vendor-content">
          <h4>${vendor.name}</h4>
          <span class="vendor-role">${roleText}</span>
          <span class="vendor-phone">${formatPhoneDisplay(vendor.phone)}</span>
        </div>
        <div class="vendor-arrow">→</div>
      </a>
    `;
  }).join("");
}

function renderOffers() {
  offersGrid.innerHTML = offers.map(offer => `
    <article class="offer-card">
      <img class="offer-image" src="${offer.image}" alt="${offer.name}" />
      <div class="offer-body">
        <span class="offer-discount">${offer.discount}</span>
        <div class="offer-name">${offer.name}</div>
        <div class="offer-prices">
          <span class="offer-old-price">${offer.oldPrice}</span>
          <span class="offer-new-price">${offer.newPrice}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCarousel() {
  const doubledImages = [...storeImages, ...storeImages];
  carouselTrack.innerHTML = doubledImages.map(item => `
    <div class="carousel-item">
      <img src="${item.image}" alt="${item.alt}" />
    </div>
  `).join("");
}

function setTab(tabId) {
  state.activeTab = tabId;
  tabButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle("active", key === tabId);
  });
}

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    setTab(button.dataset.tab);
  });
});

startBtn.addEventListener("click", () => {
  launchScreen.classList.add("hidden");
  introOverlay.classList.remove("hidden");
  introOverlay.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    introOverlay.classList.add("hidden");
    introOverlay.setAttribute("aria-hidden", "true");
    appShell.classList.remove("hidden");
  }, INTRO_DURATION);
});

renderCategories();
renderVendors();
renderOffers();
renderCarousel();
