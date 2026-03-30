// ── Alpine data ──────────────────────────
function appData() {
  return {
    darkMode: true,
    activeFilter: "all",
    currentPage: 1,
    perPage: 6,

    categories: [
      { value: "all", label: "✦ All Apps" },
      { value: "fungsi", label: "⚙ Fungsi" },
      { value: "company-profile", label: "🖨 Company Profile" },
      { value: "experimental", label: "⚗ Experimental" },
    ],

    apps: [
      // ── Fungsi ──
      {
        name: "KWH Calculator",
        description: "Hitung per-KWH yang didapat dari pembelian perpaket PLN",
        category: "fungsi",
        icon: "fa-solid fa-bolt",
        link: "https://yusma1122.github.io/Kalkulator-Biaya-Kwh/",
      },
      {
        name: "Text Tools",
        description:
          "Bersihkan teks dari spasi berlebih, karakter aneh, dan format yang tidak diinginkan hanya dalam satu klik.",
        category: "fungsi",
        icon: "fa-solid fa-font",
        link: "https://yusma1122.github.io/text-tools/",
      },
      {
        name: "Badminton Score Counter",
        description:
          "Hitung skor permainan bulu tangkis menggunakan wireless device untuk mempermudah.",
        category: "fungsi",
        icon: "fa-solid fa-table-tennis-paddle-ball",
        link: "https://yusma1122.github.io/badminton-score-counter/",
      },
      {
        name: "Time Value Calculator",
        description:
          "Aplikasi untuk menghitung nilai waktu dan jam kerja yang setara dengan biaya sebuah pembelian.",
        category: "fungsi",
        icon: "fa-solid fa-clock",
        link: "https://yusma1122.github.io/money-time/",
      },
      {
        name: "Smart Upgrade Evaluator",
        description:
          "Hitung apakah upgrade gadget benar-benar layak—berdasarkan biaya per hari, umur pakai, dan manfaat fitur baru.",
        category: "fungsi",
        icon: "fa-solid fa-chart-line",
        link: "https://yusma1122.github.io/Kalkulator-Keputusan-Ganti-Gadget/",
      },
      {
        name: "WhatsApp Link Generator Pro",
        description: "Generate link untuk wa.me whatsapp web.",
        category: "fungsi",
        icon: "fa-brands fa-whatsapp",
        link: "https://yusma1122.github.io/wa-link-generator/",
      },
      {
        name: "Zakat Calkulator",
        description: "Hitung zakat harta mu menggunakan app sederhana ini.",
        category: "fungsi",
        icon: "fa-solid fa-hand-holding-dollar",
        link: "https://yusma1122.github.io/hitung-zakat/",
      },
      {
        name: "Battery Charging Analyzer",
        description:
          "Prediksi durasi charge batre sepeda listrik dengan data csv guna untuk maintenance yang lebih baik",
        category: "fungsi",
        icon: "fa-solid fa-battery-half",
        link: "https://yusma1122.github.io/battery-charging-analyzer/",
      },
      {
        name: "Waris Calculator",
        description:
          "Hitung nominal waris anda untuk membaginya sesuai syariat islam.",
        category: "fungsi",
        icon: "fa-solid fa-scale-balanced",
        link: "https://yusma1122.github.io/kalkulator-waris/",
      },
      {
        name: "Name Picker",
        description:
          "Mengambil nama acak dalam skema kloter untuk mempermudah undian berbasis digital.",
        category: "fungsi",
        icon: "fa-solid fa-shuffle",
        link: "https://yusma1122.github.io/name-picker/",
      },
      {
        name: "Osce Timer Schedule",
        description:
          "Timer OSCE yang dilengkapi dengan fitur skejul mudah digunakan dan praktis.",
        category: "fungsi",
        icon: "fa-solid fa-stopwatch",
        link: "https://yusma1122.github.io/osce-timer/",
      },
      {
        name: "Time Refliection",
        description:
          "Refleksi waktu yang telah berlalu untuk menumbuhkan rasa syukur.",
        category: "fungsi",
        icon: "fa-solid fa-hourglass-half",
        link: "https://yusma1122.github.io/islamic-age-reflection/",
      },
      {
        name: "Electric Bike Cost Calculator",
        description:
          "Analisis lengkap biaya operasional dan ROI untuk investasi e-bike Anda.",
        category: "fungsi",
        icon: "fa-solid fa-bicycle",
        link: "https://yusma1122.github.io/biaya-sepeda-listrik/",
      },

      // ── Experimental ──
      {
        name: "Lumivox Spectrum App",
        description:
          "App Spectrum Maker dengan media tools lengkap, mulai dari pengolahan foto hingga penyesuaian spektrum.",
        category: "experimental",
        icon: "fa-solid fa-wave-square",
        link: "https://yusma1122.github.io/lumivox/",
      },
      {
        name: "Prompt Craft",
        description:
          "Jadi webdev tanpa harus ngoding !! ayo generate prompt mu disini dengan promt yang terstruktur",
        category: "experimental",
        icon: "fa-solid fa-wand-magic-sparkles",
        link: "https://yusma1122.github.io/Promt-Craft/",
      },
      {
        name: "Clock Day Simulation",
        description:
          "Simulasi jam analog dengan tema perubahan hari didalamnya",
        category: "experimental",
        icon: "fa-solid fa-clock",
        link: "https://yusma1122.github.io/adaptive-clock/",
      },
      {
        name: "Finger Calculator | Mediapipe",
        description: "Kalkulator menghitung angka dengan input jari.",
        category: "experimental",
        icon: "fa-solid fa-calculator",
        link: "https://yusma1122.github.io/hand-gesture-calculator/",
      },
      {
        name: "Finger Counter | Mediapipe",
        description: "Komputer mendeteksi jari jari yang kita ajukan.",
        category: "experimental",
        icon: "fa-solid fa-hand",
        link: "https://yusma1122.github.io/finger-counter/",
      },
      {
        name: "Pinch Morse | Mediapipe",
        description:
          "Menerjemahkan kode morse dengan cubitan jari menggunakan mediapipe dari google",
        category: "experimental",
        icon: "fa-solid fa-hand",
        link: "https://yusma1122.github.io/mediapipe-morse-code/",
      },
      {
        name: "Fruit Ninja | Mediapipe",
        description:
          "Bermain game memotong buah menggunakan jempol seperti fruit ninja !",
        category: "experimental",
        icon: "fa-solid fa-apple-whole",
        link: "https://yusma1122.github.io/mediapipe-fruit-ninja/",
      },
      {
        name: "Air Drawing | Mediapipe",
        description:
          "Bermain game menggambar menggunakan jarimu, bebas untuk menggambar apa aja!",
        category: "experimental",
        icon: "fa-solid fa-pen",
        link: "https://yusma1122.github.io/mediapipe-air-drawing/",
      },
      {
        name: "Pich Countdown",
        description: "Cubit untuk menghitung mungdur.",
        category: "experimental",
        icon: "fa-solid fa-hourglass-start",
        link: "https://yusma1122.github.io/futuristic-countdown/",
      },
      {
        name: "Sunset Direction",
        description:
          "Membantu mencari tahu arah sunset dengan menggunakan HP berbasis GPS.",
        category: "experimental",
        icon: "fa-solid fa-sun",
        link: "https://yusma1122.github.io/sunset-direction/",
      },
      {
        name: "Item Pass Counter",
        description: "Menghitung benda yang lewat pada kamera.",
        category: "experimental",
        icon: "fa-solid fa-box",
        link: "https://yusma1122.github.io/item-counter/",
      },
      {
        name: "Color Detector",
        description: "Deteksi warna pada sebuah kamera webcam.",
        category: "experimental",
        icon: "fa-solid fa-eye-dropper",
        link: "https://yusma1122.github.io/color-detector/",
      },
      {
        name: "OSRM Route Demo",
        description:
          "Eksperimen menggunakan data OSRM untuk penentu rute jalan pada OpenstreetMap",
        category: "experimental",
        icon: "fas fa-route",
        link: "https://yusma1122.github.io/OSRM/",
      },

      // ── Company Profile ──
      {
        name: "CV. Peninsula Abadi",
        description:
          "Perusahaan bergerak dibidang Teknologi Informasi service.",
        category: "company-profile",
        icon: "fa-solid fa-building",
        link: "https://yusma1122.github.io/peninsula/",
      },
      {
        name: "Musium Wasaka",
        description: "Tempat rekreasi musium di banjarmasin",
        category: "company-profile",
        icon: "fa-solid fa-landmark",
        link: "https://yusma1122.github.io/wasaka-museum/",
      },
    ],

    get filteredApps() {
      if (this.activeFilter === "all") return this.apps;
      return this.apps.filter((a) => a.category === this.activeFilter);
    },

    get totalPages() {
      return Math.ceil(this.filteredApps.length / this.perPage);
    },

    get pageStart() {
      return (this.currentPage - 1) * this.perPage + 1;
    },

    get pageEnd() {
      return Math.min(
        this.currentPage * this.perPage,
        this.filteredApps.length,
      );
    },

    get pagedApps() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredApps.slice(start, start + this.perPage);
    },

    // Generate page buttons with ellipsis for large page counts
    get pageButtons() {
      const total = this.totalPages;
      const cur = this.currentPage;
      if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
      const pages = [];
      pages.push(1);
      if (cur > 3) pages.push("…");
      for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++)
        pages.push(i);
      if (cur < total - 2) pages.push("…");
      pages.push(total);
      return pages;
    },

    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      const wrapper = document.getElementById("cards-wrapper");
      wrapper.classList.add("fading");
      setTimeout(() => {
        this.currentPage = page;
        wrapper.classList.remove("fading");
        // Smooth scroll to top of apps section
        document
          .getElementById("apps")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    },

    // Reset to page 1 when filter changes
    setFilter(val) {
      this.activeFilter = val;
      this.currentPage = 1;
    },
  };
}

// ── AOS init ─────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 600,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });
});

// ── Scroll-to-top button ─────────────────
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 300);
});

// ── Particle canvas ───────────────────────
(function () {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [];

  function isDark() {
    return document.documentElement.classList.contains("dark");
  }

  function getColors() {
    return isDark()
      ? { dot: "45,212,191", line: "56,189,248" }
      : { dot: "13,148,136", line: "6,182,212" };
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset();
  }

  Particle.prototype.reset = function () {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.useDot = Math.random() > 0.5;
  };

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  };

  function init() {
    resize();
    particles = Array.from({ length: 90 }, () => new Particle());
  }

  function drawConnections() {
    const DIST = 120;
    const colors = getColors();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          const opacity = (1 - d / DIST) * (isDark() ? 0.2 : 0.15);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${colors.line},${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const colors = getColors();
    particles.forEach((p) => {
      p.update();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.useDot ? colors.dot : colors.line},${p.alpha})`;
      ctx.fill();
    });
    drawConnections();
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
  });
  init();
  draw();
})();
