/* ============================================================
   PRODUCT DATA -single source of truth for the grid + accordion
   ============================================================ */
const PRODUCTS = [
  {
    id: "self-drilling",
    name: "Self-Drilling Screws",
    img: "assets/product-self-drilling.jpg",
    variants: "3 types",
    desc: "Screws that drill and fasten in one pass, in three material grades.",
    subs: [
      {
        name: "Bi-Metal Screws SS304",
        img: "assets/product-bimetal.jpg",
        app: "Heavy-gauge steel sections, corrosive sites",
        sku: "MP-SDS-SS304",
        spec: {
          Material:
            "Bi-metal: SS304 (A2) stainless body with hardened carbon-steel drill point",
          Finish: "Passivated / Ruspert coated",
          "Size Range": "5.5 mm × 25 mm to 6.3 mm × 200 mm",
          Standard: "EN 1993 / DIN 7504 K",
          Application:
            "Drills and fastens into heavy-gauge structural steel up to 12.5 mm; stainless body for corrosion resistance",
        },
      },
      {
        name: "Carbon Steel Screws C1022A",
        img: "assets/product-self-drilling.jpg",
        app: "Roof cladding & metal sheet to steel purlin",
        sku: "MP-SDS-C1022A",
        spec: {
          Material: "Carbon steel C1022A, case-hardened",
          Finish: "Ruspert coated / zinc plated",
          "Size Range": "#12 × 20 mm to #14 × 200 mm",
          Standard: "DIN 7504 K",
          Application:
            "Fixing profiled steel sheet and cladding to steel purlins; bonded EPDM sealing washer",
        },
      },
      {
        name: "SS410 Screws",
        img: "assets/products/ss-410-screws.webp",
        app: "Coastal and humid sites",
        sku: "MP-SDS-SS410",
        spec: {
          Material: "Martensitic stainless steel SS410, through-hardened",
          Finish: "Passivated / Ruspert coated",
          "Size Range": "#12 × 20 mm to #14 × 200 mm",
          Standard: "DIN 7504 K",
          Application:
            "Self-drilling fixing combining stainless corrosion resistance with the hardness to drill steel",
        },
      },
    ],
  },
  {
    id: "blind-rivets",
    name: "Blind Rivets",
    img: "assets/product-blind-rivets.png",
    variants: "Spec sheet",
    desc: "Single-side fastening for sheet metal, cladding and panel work.",
    sku: "MP-RIV",
    spec: {
      Material: "Aluminium / steel, stainless A2 body + mandrel",
      Finish: "Mill / colour-painted head",
      "Size Range": "3.2 mm to 6.4 mm diameter, multiple grip ranges",
      Standard: "DIN 7337 / ISO 15983",
      Application:
        "Blind (single-access) joining of sheet metal, cladding and panel assemblies",
    },
  },
  {
    id: "saddle-washers",
    name: "Saddle Washers",
    img: "assets/product-saddle-washers.png",
    variants: "Spec sheet",
    desc: "Profiled crown washers for trapezoidal and corrugated sheet.",
    sku: "MP-SAD",
    spec: {
      Material: "Aluminium / galvanised steel",
      Finish: "Mill / colour-matched painted",
      "Size Range": "Profiled to suit trapezoidal & corrugated sheet profiles",
      Standard: "Manufacturer spec",
      Application:
        "Weatherproof crown-fixing of profiled roof and wall sheeting; spreads fixing load",
    },
  },
  {
    id: "shear-studs",
    name: "Shear Studs",
    img: "assets/product-shear-studs.png",
    variants: "Spec sheet",
    desc: "Weld-through composite studs with ceramic ferrules.",
    sku: "MP-STUD",
    spec: {
      Material: "Mild steel ML15AL with ceramic ferrule",
      Finish: "Bright / plain, copper-flash option",
      "Size Range": "13 mm to 25 mm dia · 50 mm to 200 mm length",
      Standard: "ISO 13918 / AWS D1.1",
      Application:
        "Composite steel-concrete construction; stud welding through profiled metal decking",
    },
  },
  {
    id: "color-caps",
    name: "Screw Colour Caps",
    img: "assets/product-color-caps.png",
    variants: "Spec sheet",
    desc: "Colour-matched snap-on caps for exposed hex screw heads.",
    sku: "MP-CAP",
    spec: {
      Material: "UV-stabilised nylon",
      Finish: "RAL colour-matched, full colour range",
      "Size Range": "To suit #12-#14 hex washer heads",
      Standard: "Manufacturer spec",
      Application:
        "Capping exposed screw heads for a finished, colour-matched appearance on roof and wall sheeting",
    },
  },
  {
    id: "filler-block",
    name: "Filler Block",
    img: "assets/product-filler-block.png",
    variants: "Spec sheet",
    desc: "Profile-matched closure strips for sheet ends at eaves and ridge.",
    sku: "MP-FILL",
    spec: {
      Material: "EPDM / closed-cell foam",
      Finish: "Black, profile-matched",
      "Size Range": "Cut to trapezoidal & corrugated sheet profiles",
      Standard: "Manufacturer spec",
      Application:
        "Closing profiled sheet ends at eaves and ridge against pests, dust and weather",
    },
  },
  {
    id: "butyl-tape",
    name: "Butyl Tape",
    img: "assets/product-butyl-tape.png",
    variants: "Spec sheet",
    desc: "Non-curing butyl sealant tape for sealing roof and wall sheet laps.",
    sku: "MP-BUTYL",
    spec: {
      Material: "Non-curing butyl rubber",
      Finish: "Grey",
      "Size Range": "Widths 9 mm to 25 mm, thickness from 1.5 mm",
      Standard: "Manufacturer spec",
      Application:
        "Sealing roof sheet side-laps and end-laps; vapour seal under flashings and ridge caps",
    },
  },
  {
    id: "purlin-tape",
    name: "Purlin Tape",
    img: "assets/product-purlin-tape.png",
    variants: "Spec sheet",
    desc: "Cloth-backed bedding tape laid along purlins before sheeting.",
    sku: "MP-PURLIN",
    spec: {
      Material: "Reinforced cloth / foil-backed adhesive tape",
      Finish: "Silver / grey",
      "Size Range": "Roll widths 48 mm to 75 mm",
      Standard: "Manufacturer spec",
      Application:
        "Bedding strip along steel purlins to cushion sheeting, reduce abrasion and limit thermal bridging",
    },
  },
  {
    id: "silicone",
    name: "Silicone Sealant",
    img: "assets/products/siliconesealant.png",
    variants: "Spec sheet",
    desc: "M POWER branded general-purpose silicone sealant.",
    sku: "MP-SIL-GP",
    spec: {
      Material: "Acetoxy-cure general-purpose silicone",
      Finish: "Clear / white / black",
      "Size Range": "280 ml cartridge",
      Standard: "ISO 11600 class",
      Application:
        "Glazing, sanitary and general construction joint sealing; M POWER branded, 50-year guarantee",
    },
  },
  {
    id: "cold-room",
    name: "Cold Room Accessories",
    img: "assets/products/cold-room.jpeg",
    variants: "5 sub-categories",
    desc: "Door hardware, curtains, railing, valves and flooring for walk-in cold rooms and freezers.",
    subs: [
      {
        name: "Door Hardware (Hinges & Lock Sets)",
        imgs: ["assets/products/door-hardware.jpeg", "assets/coldroom-pvc-lock.jpg"],
        app: "Walk-in cold room & freezer doors",
        sku: "MP-CR-DOOR",
        spec: {
          Material: "Stainless steel SS304 / chrome-plated zinc / PVC",
          Finish: "Polished SS / Chrome / PVC",
          Range:
            "Cam-lift hinges, lockable latch and handle sets, strikes, PVC hinge & lock",
          Standard: "Manufacturer spec",
          Application:
            "Latching and hinging for insulated walk-in cold-room and freezer doors",
        },
      },
      {
        name: "PVC Ribbed Curtain",
        img: "assets/coldroom-pvc-curtain.jpg",
        app: "Doorways and high-traffic openings",
        sku: "MP-CR-CURT",
        spec: {
          Material: "Flexible ribbed PVC",
          Finish: "Clear ribbed PVC",
          "Size Range": "2 mm × 200 mm × 50 m roll",
          Standard: "Manufacturer spec",
          Application:
            "Strip-curtain doorways for thermal separation at high-traffic openings",
        },
      },
      {
        name: "SS Railing",
        img: "assets/coldroom-railing.jpg",
        app: "Curtain mounting at doorways",
        sku: "MP-CR-RAIL",
        spec: {
          Material: "Stainless steel",
          Finish: "Polished SS",
          "Size Range": "Wall / lintel mounted, cut to opening width",
          Standard: "Manufacturer spec",
          Application:
            "Overhead railing and brackets to hang and slide PVC ribbed curtains",
        },
      },
      {
        name: "Pressure Port Valve",
        img: "assets/coldroom-pressure-valve.jpg",
        app: "Cold room and freezer panels",
        sku: "MP-CR-PPV",
        spec: {
          Material: "ABS / nylon body, heated option available",
          Finish: "White",
          "Size Range": "Standard wall-mount port",
          Standard: "Manufacturer spec",
          Application:
            "Equalises pressure between cold room and ambient; prevents door-seal lock and panel stress",
        },
      },
      {
        name: "Aluminium Anti-Skid Plates",
        img: "assets/coldroom-checkered-plate.jpg",
        app: "Cold room floors and ramps",
        sku: "MP-CR-PLATE",
        spec: {
          Material: "Aluminium chequered (tread) plate",
          Finish: "Mill aluminium, 5-bar pattern",
          "Size Range": "Cut to floor / ramp size",
          Standard: "Manufacturer spec",
          Application:
            "Anti-skid flooring and ramp surfacing for cold room and freezer traffic areas",
        },
      },
    ],
  },
  {
    id: "threaded-rods",
    name: "Threaded Rods & Nuts",
    img: "assets/product-threaded-rods.png",
    variants: "Spec sheet",
    desc: "Full-thread rod, nuts and washers for MEP and services support.",
    sku: "MP-THR",
    spec: {
      Material: "Carbon steel grade 4.8 / 8.8, stainless SS304 & SS316",
      Finish: "Zinc plated / hot-dip galvanised",
      "Size Range": "M3 to M20 · standard lengths to 3 m",
      Standard: "DIN 975 / DIN 976",
      Application:
        "MEP services support, suspended ductwork, bracketry and general anchoring",
    },
  },
];

/* ============================================================
   BUILD PRODUCT GRID + ACCORDION DETAIL PANELS
   ============================================================ */
(function buildProducts() {
  const grid = document.getElementById("prodGrid");
  const chev =
    '<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.6 4.6 16 12l-7.4 7.4-1.4-1.4L13.2 12l-6-6z"/></svg>';

  function specTable(spec, sku) {
    let rows = "";
    for (const k in spec) {
      rows += `<tr><th>${k}</th><td>${spec[k]}</td></tr>`;
    }
    const skuRow = sku
      ? `<tr><th>SKU Ref</th><td><span class="sku-badge">${sku}</span></td></tr>`
      : "";
    return `<table class="spec"><tbody>${rows}${skuRow}</tbody></table>`;
  }

  function mediaHTML(item) {
    const list = item.imgs && item.imgs.length ? item.imgs : [item.img];
    const dual = list.length > 1 ? " dual" : "";
    const alt = item.name || item.desc || "";
    const shots = list
      .map(
        (src) =>
          `<div class="dp-shot"><img src="${src}" alt="${alt}" loading="lazy"></div>`,
      )
      .join("");
    return `<div class="dp-media${dual}">${shots}</div>`;
  }

  /* Catalogue pages per SKU (assets/brochure/pNN.jpg) */
  const CATALOGUE_PAGES = {
    "MP-SDS-SS304": [5, 7, 8],
    "MP-SDS-C1022A": [9, 10],
    "MP-SDS-SS410": [11, 12],
    "MP-RIV": [13],
    "MP-SAD": [14],
    "MP-STUD": [15],
    "MP-CAP": [16],
    "MP-FILL": [17],
    "MP-BUTYL": [18, 19],
    "MP-PURLIN": [20],
    "MP-SIL-GP": [21],
    "MP-CR-DOOR": [22],
    "MP-CR-CURT": [24],
    "MP-CR-RAIL": [24],
    "MP-CR-PPV": [23],
    "MP-CR-PLATE": [23],
    "MP-THR": [25],
  };

  function actionsHTML(item) {
    const pages = CATALOGUE_PAGES[item.sku] || [];
    const more = pages.length
      ? `<button type="button" class="btn btn--blue dp-more" data-title="${item.name}" data-pages="${pages.join(",")}">More</button>`
      : "";
    const wa =
      "https://wa.me/971509325396?text=" +
      encodeURIComponent(
        "Hello M POWER, please share the TDS (technical data sheet) for: " +
          item.name,
      );
    return `<div class="dp-actions">${more}<a class="btn btn--blue-outline" href="${wa}" target="_blank" rel="noopener">TDS</a></div>`;
  }

  function detailPanelHTML(p) {
    // multi-sub categories -> sublist + panel; single -> direct spec
    if (p.subs) {
      const btns = p.subs
        .map(
          (s, i) =>
            `<button data-sub="${i}" class="${i === 0 ? "active" : ""}">${s.name}</button>`,
        )
        .join("");
      const panels = p.subs
        .map(
          (s, i) => `
        <div class="detail-panel" data-panel="${i}">
          ${mediaHTML(s)}
          <div class="dp-info">
            <h3>${s.name}</h3>
            <p class="dp-app">${s.app}</p>
            ${specTable(s.spec, s.sku)}
            ${actionsHTML(s)}
          </div>
        </div>`,
        )
        .join("");
      return `
        <div class="detail-inner">
          <div class="subcat-list">
            <h4>Sub-Categories</h4>
            ${btns}
            <p class="subnote">Tap a sub-type to jump to its specification.</p>
          </div>
          <div class="detail-panels">${panels}</div>
        </div>`;
    }
    return `
      <div class="detail-inner" style="grid-template-columns:1fr;">
        <div class="detail-panel">
          ${mediaHTML(p)}
          <div class="dp-info">
            <h3>${p.name}</h3>
            <p class="dp-app">${p.desc}</p>
            ${specTable(p.spec, p.sku)}
            ${actionsHTML(p)}
          </div>
        </div>
      </div>`;
  }

  PRODUCTS.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "pcard reveal";
    card.setAttribute("aria-expanded", "false");
    card.innerHTML = `
      <div class="pcard-media"><img src="${p.img}" alt="${p.name}" width="400" height="220" loading="lazy"></div>
      <div class="pcard-body">
        <h3>${p.name}</h3>
        <div class="pcard-variants">${p.variants}</div>
        <p class="pcard-desc">${p.desc}</p>
        <button class="pcard-explore" aria-controls="detail-${p.id}" aria-expanded="false">
          Explore ${chev}
        </button>
      </div>`;

    const detail = document.createElement("div");
    detail.className = "detail";
    detail.id = "detail-" + p.id;
    detail.setAttribute("role", "region");
    detail.innerHTML = detailPanelHTML(p);

    grid.appendChild(card);
    grid.appendChild(detail);

    const exploreBtn = card.querySelector(".pcard-explore");
    exploreBtn.addEventListener("click", () => {
      const isOpen = detail.classList.contains("open");
      // close any other open detail
      document.querySelectorAll(".detail.open").forEach((d) => {
        if (d !== detail) {
          d.classList.remove("open");
          const c = d.previousElementSibling;
          c.setAttribute("aria-expanded", "false");
          c.querySelector(".pcard-explore").setAttribute(
            "aria-expanded",
            "false",
          );
        }
      });
      detail.classList.toggle("open", !isOpen);
      card.setAttribute("aria-expanded", String(!isOpen));
      exploreBtn.setAttribute("aria-expanded", String(!isOpen));
      if (!isOpen) {
        setTimeout(
          () =>
            detail.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            }),
          150,
        );
      }
    });

    // sub-category switching
    if (p.subs) {
      const subBtns = detail.querySelectorAll(".subcat-list button");
      const panels = detail.querySelectorAll(".detail-panel");
      subBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = btn.getAttribute("data-sub");
          subBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const target = detail.querySelector(
            '.detail-panel[data-panel="' + i + '"]',
          );
          if (target)
            target.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
        });
      });
    }
  });
})();

/* ============================================================
   HERO CAROUSEL
   ============================================================ */
(function carousel() {
  const root = document.getElementById("carousel");
  const slides = Array.from(root.querySelectorAll(".slide"));
  const dotsWrap = document.getElementById("carDots");
  let i = 0,
    timer = null;
  const DELAY = 5000;

  slides.forEach((_, n) => {
    const d = document.createElement("button");
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", "Go to slide " + (n + 1));
    if (n === 0) d.classList.add("active");
    d.addEventListener("click", () => {
      go(n);
      reset();
    });
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.children);

  function go(n) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
    i = (n + slides.length) % slides.length;
    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }
  function next() {
    go(i + 1);
  }
  function prev() {
    go(i - 1);
  }
  function start() {
    timer = setInterval(next, DELAY);
  }
  function reset() {
    clearInterval(timer);
    start();
  }

  document.getElementById("carNext").addEventListener("click", () => {
    next();
    reset();
  });
  document.getElementById("carPrev").addEventListener("click", () => {
    prev();
    reset();
  });

  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", start);
  // keyboard
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      next();
      reset();
    }
    if (e.key === "ArrowLeft") {
      prev();
      reset();
    }
  });

  start();
})();

/* ============================================================
   STICKY HEADER border on scroll
   ============================================================ */
(function headerScroll() {
  const header = document.querySelector(".header");
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   MOBILE NAV
   ============================================================ */
(function mobileNav() {
  const burger = document.getElementById("hamburger");
  const nav = document.getElementById("mobileNav");
  const close = document.getElementById("mnClose");
  const open = () => {
    nav.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const shut = () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  burger.addEventListener("click", open);
  close.addEventListener("click", shut);
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", shut));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") shut();
  });
})();

/* ============================================================
   FORM VALIDATION + SUCCESS STATE (no reload)
   ============================================================ */
(function contactForm() {
  const form = document.getElementById("enquiryForm");
  const success = document.getElementById("formSuccess");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setInvalid(field, bad) {
    field.classList.toggle("invalid", bad);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    const checks = [
      ["f-name", (v) => v.trim().length > 0],
      ["f-email", (v) => emailRe.test(v.trim())],
      ["f-phone", (v) => v.trim().length >= 6],
      ["f-message", (v) => v.trim().length > 0],
    ];
    checks.forEach(([id, test]) => {
      const input = document.getElementById(id);
      const bad = !test(input.value);
      setInvalid(input.closest(".field"), bad);
      if (bad) ok = false;
    });

    if (!ok) {
      form
        .querySelector(".invalid input, .invalid textarea, .invalid select")
        ?.focus();
      success.classList.remove("show");
      return;
    }

    const submitBtn = form.querySelector(".form-submit");
    const data = new FormData(form);
    submitBtn.disabled = true;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Form submission failed: " + res.status);
        success.classList.add("show");
        form.reset();
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch(() => {
        const subject = encodeURIComponent(
          "M POWER Enquiry: " + (data.get("product") || "General"),
        );
        const body = encodeURIComponent(
          "Name: " +
            data.get("name") +
            "\n" +
            "Company: " +
            data.get("company") +
            "\n" +
            "Email: " +
            data.get("email") +
            "\n" +
            "Phone: " +
            data.get("phone") +
            "\n" +
            "Product of Interest: " +
            data.get("product") +
            "\n\n" +
            data.get("message"),
        );
        window.location.href =
          "mailto:info@rahjuae.com?subject=" + subject + "&body=" + body;
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });

  // clear error as user corrects
  form.querySelectorAll("input, textarea, select").forEach((el) => {
    el.addEventListener("input", () =>
      el.closest(".field").classList.remove("invalid"),
    );
  });
})();

/* ============================================================
   SCROLL-REVEAL (Intersection Observer)
   ============================================================ */
(function reveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  els.forEach((e) => io.observe(e));
})();

/* ============================================================
   CATALOGUE MODAL (More buttons)
   ============================================================ */
(function catalogueModal() {
  const modal = document.getElementById("pModal");
  const body = document.getElementById("pModalBody");
  const title = document.getElementById("pModalTitle");

  function open(name, pages) {
    title.textContent = name;
    body.innerHTML = pages
      .map(function (n) {
        const f =
          "assets/brochure/p" + String(n).trim().padStart(2, "0") + ".jpg";
        return (
          '<img src="' +
          f +
          '" alt="' +
          name +
          ' catalogue page" loading="lazy" width="953" height="1348">'
        );
      })
      .join("");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    modal.querySelector(".pmodal-close").focus();
  }
  function close() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    body.innerHTML = "";
  }

  // delegated: More buttons are rendered dynamically
  document.addEventListener("click", function (e) {
    const more = e.target.closest(".dp-more");
    if (more) {
      open(
        more.getAttribute("data-title"),
        more.getAttribute("data-pages").split(","),
      );
      return;
    }
    if (e.target.closest("[data-close]")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
})();

/* current year safety (footer already 2026 per brand) */
