gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

document.addEventListener("DOMContentLoaded", () => {
  bootstrap().catch((err) => {
    console.error("Bootstrap error:", err);
    initSeasonCycle();
    initHero();
    initSeqChapter();
    ScrollTrigger.refresh();
  });
});

async function bootstrap() {
  // ✅ Best option: Accessibility behalten, aber Override möglich via ?motion
  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const forceMotion = new URLSearchParams(window.location.search).has("motion"); // ?motion

  await preloadAndDecodeImages([
    // Hero
    ".hero__image--base",
    ".hero__image--detail",
    ".hero__image--canal",
    ".hero__image--ladder",
    ".hero__image--trash",
    ".hero__steps-gif",
    ".hero__cigarette-gif",
    ".hero__zigi2-gif",
    ".hero__zigi",
    ".hero__arrow",

    // Seq
    ".seq__img",
    ".seq__graffiti-gif",
    ".seq__bg",

    // Global ratte
    ".ratte-global__gif"
  ]);

  initSeasonCycle();

  // ✅ läuft normal, ausser reduce-motion ist an UND kein override gesetzt ist
  if (!prefersReduce || forceMotion) {
    initHero();
    initSeqChapter();
  } else {
    setReducedMotionStates();
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* =========================================================
   Preload + Decode
   ========================================================= */

async function preloadAndDecodeImages(selectors) {
  const imgs = selectors
    .map((sel) => Array.from(document.querySelectorAll(sel)))
    .flat()
    .filter((el) => el && el.tagName === "IMG");

  await Promise.all(
    imgs.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((res, rej) => {
        img.addEventListener("load", res, { once: true });
        img.addEventListener("error", rej, { once: true });
      });
    })
  );

  await Promise.all(
    imgs.map((img) => {
      if (typeof img.decode === "function") {
        return img.decode().catch(() => null);
      }
      return Promise.resolve();
    })
  );
}

function setReducedMotionStates() {
  const seqBlackout = document.querySelector(".seq__blackout");
  const hscroll = document.querySelector(".seq__hscroll");
  if (seqBlackout) seqBlackout.style.opacity = "0";
  if (hscroll) hscroll.style.opacity = "1";

  const footer = document.querySelector(".footer");
  if (footer) footer.style.opacity = "1";

  const ghost = document.querySelector(".hero__tunnel-ghost");
  if (ghost) ghost.style.opacity = "1";

  showRatte3({ restart: true });
}

/* =========================================================
   GLOBAL RATTE CONTROL (mutual exclusive)
   ========================================================= */

let ratteMode = "none"; // "none" | "ratte1" | "ratte2" | "ratte3"

let ratte2LoopTimer = null;
const RATTE2_SWAP_MS = 2600;

function stopRatte2Loop() {
  if (ratte2LoopTimer) {
    clearInterval(ratte2LoopTimer);
    ratte2LoopTimer = null;
  }
}

function startRatte2Loop() {
  stopRatte2Loop();
  ratte2LoopTimer = setInterval(() => {
    if (ratteMode !== "ratte2") return;
    seamlessRestartRatte2();
  }, RATTE2_SWAP_MS);
}

function seamlessRestartRatte2() {
  const old = document.getElementById("ratte2");
  if (!old) return;
  if (!old.classList.contains("is-visible")) return;

  const parent = old.parentNode;
  if (!parent) return;

  const cls = old.className;
  const base = old.dataset.baseSrc || old.getAttribute("src") || "";
  const cleanBase = base.split("?")[0];
  old.dataset.baseSrc = cleanBase;

  const neu = document.createElement("img");
  neu.id = "ratte2";
  neu.alt = "";
  neu.className = cls;
  neu.dataset.baseSrc = cleanBase;

  neu.style.opacity = "0";

  const url = `${cleanBase}?v=${Math.floor(performance.now())}`;

  neu.onload = () => {
    if (ratteMode !== "ratte2") return;
    parent.replaceChild(neu, old);
    neu.style.opacity = "";
  };

  neu.onerror = () => {};
  neu.src = url;
}

function restartGif(imgEl) {
  if (!imgEl) return;
  const base = imgEl.dataset.baseSrc || imgEl.getAttribute("src") || "";
  const cleanBase = base.split("?")[0];
  imgEl.dataset.baseSrc = cleanBase;
  imgEl.setAttribute("src", `${cleanBase}?v=${Math.floor(performance.now())}`);
}

function forceHide(el) {
  if (!el) return;
  el.classList.remove("is-visible", "is-mirrored", "is-right");
  el.style.opacity = "";
}

function hideGlobalRatte() {
  const wrap = document.querySelector(".ratte-global");
  const r1 = document.getElementById("ratte1");
  const r2 = document.getElementById("ratte2");
  const r3 = document.getElementById("ratte3");
  if (!wrap || !r1 || !r2 || !r3) return;

  stopRatte2Loop();

  wrap.style.opacity = "0";
  forceHide(r1);
  forceHide(r2);
  forceHide(r3);
  ratteMode = "none";
}

function showRatte1() {
  const wrap = document.querySelector(".ratte-global");
  const r1 = document.getElementById("ratte1");
  const r2 = document.getElementById("ratte2");
  const r3 = document.getElementById("ratte3");
  if (!wrap || !r1 || !r2 || !r3) return;

  stopRatte2Loop();

  wrap.style.opacity = "1";
  forceHide(r2);
  forceHide(r3);

  r1.classList.add("is-visible");
  ratteMode = "ratte1";
}

function showRatte2(opts = {}) {
  const wrap = document.querySelector(".ratte-global");
  const r1 = document.getElementById("ratte1");
  const r2 = document.getElementById("ratte2");
  const r3 = document.getElementById("ratte3");
  if (!wrap || !r1 || !r2 || !r3) return;

  forceHide(r3);

  wrap.style.opacity = "1";
  forceHide(r1);
  r2.classList.add("is-visible");

  ratteMode = "ratte2";

  if (opts.restart) seamlessRestartRatte2();
  startRatte2Loop();
}

function showRatte3(opts = {}) {
  const wrap = document.querySelector(".ratte-global");
  const r1 = document.getElementById("ratte1");
  const r2 = document.getElementById("ratte2");
  const r3 = document.getElementById("ratte3");
  if (!wrap || !r1 || !r2 || !r3) return;

  stopRatte2Loop();
  forceHide(r2);
  forceHide(r1);

  wrap.style.opacity = "1";
  r3.classList.add("is-visible");
  r3.classList.remove("is-mirrored", "is-right");

  ratteMode = "ratte3";
  if (opts.restart) restartGif(r3);
}

/* =========================================================
   Jahreszeiten-Cycle
   ========================================================= */

function initSeasonCycle() {
  const seasons = Array.from(document.querySelectorAll(".season"));
  if (!seasons.length) return;

  let current = 0;
  const interval = 8000;
  const fadeDuration = 1200;

  seasons.forEach((s, i) => s.classList.toggle("is-active", i === 0));

  setInterval(() => {
    const prev = current;
    const next = (current + 1) % seasons.length;

    seasons[next].classList.add("is-active");
    setTimeout(() => seasons[prev].classList.remove("is-active"), fadeDuration);

    current = next;
  }, interval);
}

/* =========================================================
   HERO (unverändert)
   ========================================================= */

function initHero() {
  const heroSection          = document.querySelector(".hero--full");
  const heroImageBase        = document.querySelector(".hero__image--base");
  const heroImageDetail      = document.querySelector(".hero__image--detail");
  const heroImageCanal       = document.querySelector(".hero__image--canal");
  const heroImageLadder      = document.querySelector(".hero__image--ladder");
  const heroImageTrash       = document.querySelector(".hero__image--trash");
  const seasonLayer          = document.querySelector(".season-layer");
  const heroTitleInner       = document.querySelector(".hero__title-inner");

  const heroIntroText1       = document.querySelector(".hero__intro-text--1");
  const heroIntroText2       = document.querySelector(".hero__intro-text--2");
  const heroIntroText3       = document.querySelector(".hero__intro-text--3");
  const heroTrashText        = document.querySelector(".hero__trash-text");

  const heroDetailOverlay    = document.querySelector(".hero__detail-overlay");
  const heroCigaretteOverlay = document.querySelector(".hero__cigarette-overlay");
  const heroZigi2Overlay     = document.querySelector(".hero__zigi2-overlay");
  const heroBlackout         = document.querySelector(".hero__blackout");

  const heroZigi             = document.querySelector(".hero__zigi");
  const ladderText1          = document.querySelector(".hero__ladder-text--1");
  const ladderText2          = document.querySelector(".hero__ladder-text--2");
  const ladderText3          = document.querySelector(".hero__ladder-text--3");

  const heroGhost            = document.querySelector(".hero__tunnel-ghost");

  if (
    !heroSection || !heroImageBase || !heroImageDetail || !heroImageCanal ||
    !heroImageLadder || !heroImageTrash || !seasonLayer || !heroTitleInner ||
    !heroIntroText1 || !heroIntroText2 || !heroIntroText3 || !heroTrashText ||
    !heroDetailOverlay || !heroCigaretteOverlay || !heroZigi2Overlay || !heroBlackout ||
    !heroZigi || !ladderText1 || !ladderText2 || !ladderText3 || !heroGhost
  ) return;

  const setupHero = (transformOrigin) => {
    gsap.set(
      [heroImageBase, heroImageDetail, heroImageCanal, heroImageLadder, heroImageTrash, seasonLayer],
      { transformOrigin, scale: 1 }
    );

    gsap.set(heroZigi, { autoAlpha: 0 });
    gsap.set([ladderText1, ladderText2, ladderText3, heroTrashText], { autoAlpha: 0 });
    gsap.set(heroImageTrash, { autoAlpha: 0 });
    gsap.set(heroBlackout, { autoAlpha: 0 });
    gsap.set(heroZigi2Overlay, { autoAlpha: 0 });
    gsap.set(heroGhost, { autoAlpha: 0, y: 10 });

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "+=180%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    heroTl.to(heroTitleInner, { autoAlpha: 0, y: -40, duration: 0.4, ease: "power2.out" }, 0);

    heroTl.to([heroImageBase, seasonLayer], { scale: 2, duration: 1.0, ease: "power2.out" }, 0);
    heroTl.fromTo(heroIntroText1, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.2);
    heroTl.to(heroIntroText1, { autoAlpha: 0, y: -10, duration: 0.4, ease: "power2.out" }, 0.9);

    heroTl.to(heroImageBase, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, 0.9);
    heroTl.to(heroImageDetail, { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" }, 0.9);
    heroTl.to(heroDetailOverlay, { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" }, 0.9);
    heroTl.fromTo(heroIntroText2, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, 1.1);

    heroTl.to(heroIntroText2, { autoAlpha: 0, duration: 0.25, ease: "power2.out" }, 1.7);
    heroTl.to(heroDetailOverlay, { autoAlpha: 0, duration: 0.25, ease: "power2.out" }, 1.7);

    heroTl.set([heroImageDetail, seasonLayer], { transformOrigin: "47% 93%" }, 1.7);
    heroTl.to([heroImageDetail, seasonLayer], { scale: 12, duration: 0.9, ease: "power2.inOut" }, 1.7);
    heroTl.to(heroBlackout, { autoAlpha: 1, duration: 0.12, ease: "power2.inOut" }, 1.9);

    heroTl.add("cutToCanal", 2.02);
    heroTl.set([heroImageDetail, seasonLayer], { autoAlpha: 0 }, "cutToCanal");
    heroTl.set(heroImageCanal, { autoAlpha: 1, scale: 1 }, "cutToCanal");

    heroTl.fromTo(heroCigaretteOverlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: "power2.out" }, "cutToCanal");
    heroTl.to(heroBlackout, { autoAlpha: 0, duration: 0.12, ease: "power2.inOut" }, "cutToCanal");

    heroTl.fromTo(heroIntroText3, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, "cutToCanal+=0.08");
    heroTl.to(heroIntroText3, { autoAlpha: 0, y: -10, duration: 0.35, ease: "power2.out" }, "cutToCanal+=0.85");

    heroTl.add("toLadder", 3.0);
    heroTl.to(heroBlackout, { autoAlpha: 1, duration: 0.10, ease: "none" }, "toLadder");
    heroTl.set([heroImageCanal, heroCigaretteOverlay, heroIntroText3], { autoAlpha: 0 }, "toLadder");

    heroTl.fromTo(heroImageLadder, { autoAlpha: 0, scale: 1.05 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power2.inOut" }, "toLadder+=0.05");
    heroTl.to(heroBlackout, { autoAlpha: 0, duration: 0.12, ease: "none" }, "toLadder+=0.18");
    heroTl.fromTo(heroImageLadder, { yPercent: 0 }, { yPercent: -66, duration: 2.0, ease: "none" }, "toLadder+=0.35");

    heroTl.add("ladderStart", "toLadder+=0.10");
    heroTl.set(heroZigi, { autoAlpha: 1, yPercent: -10 }, "ladderStart");

    heroTl.fromTo(ladderText1, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, "ladderStart");
    heroTl.to(heroZigi, { yPercent: 25, duration: 0.8, ease: "power2.inOut" }, "ladderStart+=0.10");
    heroTl.to(ladderText1, { autoAlpha: 0, y: -10, duration: 0.35, ease: "power2.out" }, "ladderStart+=0.85");

    heroTl.fromTo(ladderText2, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, "ladderStart+=0.95");
    heroTl.to(heroZigi, { yPercent: 55, duration: 0.8, ease: "power2.inOut" }, "ladderStart+=0.95");
    heroTl.to(ladderText2, { autoAlpha: 0, y: -10, duration: 0.35, ease: "power2.out" }, "ladderStart+=1.70");

    heroTl.fromTo(ladderText3, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, "ladderStart+=1.80");
    heroTl.to(heroZigi, { yPercent: 85, duration: 0.8, ease: "power2.inOut" }, "ladderStart+=1.80");

    heroTl.add("toTrash", "ladderStart+=2.65");
    heroTl.to(ladderText3, { autoAlpha: 0, y: -10, duration: 0.25, ease: "power2.out" }, "toTrash");
    heroTl.set(heroZigi, { autoAlpha: 0 }, "toTrash");

    heroTl.to(heroBlackout, { autoAlpha: 1, duration: 0.10, ease: "none" }, "toTrash+=0.05");
    heroTl.set(heroImageLadder, { autoAlpha: 0 }, "toTrash+=0.18");
    heroTl.set(heroImageTrash,  { autoAlpha: 1 }, "toTrash+=0.18");
    heroTl.to(heroBlackout, { autoAlpha: 0, duration: 0.10, ease: "none" }, "toTrash+=0.24");

    heroTl.fromTo(heroTrashText, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, "toTrash+=0.28");

    heroTl.to(heroZigi2Overlay, { autoAlpha: 1, duration: 0.12, ease: "power2.out" }, "toTrash+=0.22");
    heroTl.to(heroZigi2Overlay, { autoAlpha: 0, duration: 0.20, ease: "power2.inOut" }, "toTrash+=0.75");

    heroTl.add("heroEnd", "toTrash+=1.05");
    heroTl.to(heroTrashText, { autoAlpha: 0, duration: 0.18, ease: "power2.out" }, "heroEnd");
    heroTl.to(heroBlackout, { autoAlpha: 1, duration: 0.10, ease: "power2.inOut" }, "heroEnd+=0.03");

    heroTl.to(heroGhost, { autoAlpha: 1, y: 0, duration: 0.40, ease: "power2.out" }, "heroEnd+=0.08");
  };

  ScrollTrigger.matchMedia({
    "(max-width: 767px)": () => setupHero("12% 100%"),
    "(min-width: 768px)": () => setupHero("40% 100%")
  });
}

/* =========================================================
   Kapitel 2: Tunnel -> Kanal (unverändert)
   ========================================================= */

function initSeqChapter() {
  const section = document.querySelector("#section-02-seq");
  if (!section) return;

  const heroGhost = document.querySelector(".hero__tunnel-ghost");
  const footer = document.querySelector(".footer");
  if (footer) gsap.set(footer, { autoAlpha: 0 });

  const blackout = section.querySelector(".seq__blackout");

  const dark = section.querySelector(".seq__img--dark");
  const darkM = section.querySelector(".seq__img--dark-muell");
  const light = section.querySelector(".seq__img--light");
  const lightM = section.querySelector(".seq__img--light-muell");
  const graffiti = section.querySelector(".seq__graffiti");
  const tunnelText = section.querySelector(".seq__text--tunnel");

  const hscroll = section.querySelector(".seq__hscroll");
  const track = section.querySelector(".seq__track");

  const canalText1 = section.querySelector(".seq__text--canal-1");
  const canalText2 = section.querySelector(".seq__text--canal-2");
  const canalText3 = section.querySelector(".seq__text--canal-3");

  if (!blackout || !dark || !darkM || !light || !lightM || !graffiti || !tunnelText || !hscroll || !track) return;

  hideGlobalRatte();

  gsap.set(blackout, { autoAlpha: 1 });
  gsap.set([dark, darkM], { autoAlpha: 0 });
  gsap.set([light, lightM, graffiti, tunnelText], { autoAlpha: 0 });

  gsap.set(hscroll, { autoAlpha: 0 });
  gsap.set(track, { xPercent: 0 });
  gsap.set([canalText1, canalText2, canalText3], { autoAlpha: 0 });

  const CUT_TO_CANAL_T = 1.33;
  const HSCROLL_START_T = 1.55;
  const SHIFT_1_T = HSCROLL_START_T;
  const SHIFT_2_T = HSCROLL_START_T + 0.95;

  const END_TRIGGER_PROGRESS = 0.995;

  let lastReverse = null;
  let footerShown = false;

  function setRatte2ReverseLook(isReverse) {
    const r2 = document.getElementById("ratte2");
    if (!r2) return;
    r2.classList.toggle("is-mirrored", !!isReverse);
    r2.classList.toggle("is-right", !!isReverse);
  }

  function hardHideCanalTexts() {
    if (canalText1) gsap.set(canalText1, { autoAlpha: 0 });
    if (canalText2) gsap.set(canalText2, { autoAlpha: 0 });
    if (canalText3) gsap.set(canalText3, { autoAlpha: 0 });
  }

  function showFooterSmooth(show) {
    if (!footer) return;
    if (show && !footerShown) {
      footerShown = true;
      gsap.to(footer, { autoAlpha: 1, duration: 0.55, ease: "power2.out" });
    } else if (!show && footerShown) {
      footerShown = false;
      gsap.to(footer, { autoAlpha: 0, duration: 0.18, ease: "power2.inOut" });
    }
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + window.innerWidth * 2.35,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,

      onEnter: () => {
        if (heroGhost) gsap.to(heroGhost, { autoAlpha: 0, duration: 0.35, ease: "power2.inOut" });
        lastReverse = null;
        hideGlobalRatte();
        setRatte2ReverseLook(false);
        showFooterSmooth(false);
      },

      onLeaveBack: () => {
        if (heroGhost) gsap.to(heroGhost, { autoAlpha: 1, duration: 0.25, ease: "power2.out" });
        lastReverse = null;
        hideGlobalRatte();
        setRatte2ReverseLook(false);
        showFooterSmooth(false);
      },

      onUpdate: (self) => {
        const reverse = self.direction === -1;
        const atEnd = self.progress >= END_TRIGGER_PROGRESS;

        if (atEnd) {
          hardHideCanalTexts();
          if (ratteMode !== "ratte3") showRatte3({ restart: true });
          showFooterSmooth(true);
          return;
        }

        showFooterSmooth(false);

        if (ratteMode === "ratte3") {
          forceHide(document.getElementById("ratte3"));
          ratteMode = "none";
        }

        const canalVisible = parseFloat(getComputedStyle(hscroll).opacity || "0") > 0.5;

        if (!canalVisible) {
          if (ratteMode !== "none") hideGlobalRatte();
          setRatte2ReverseLook(false);
          lastReverse = null;
          return;
        }

        const t = tl.time();
        if (t >= HSCROLL_START_T) {
          if (ratteMode !== "ratte2") showRatte2({ restart: true });

          if (lastReverse === null || lastReverse !== reverse) {
            setRatte2ReverseLook(reverse);
            seamlessRestartRatte2();
            lastReverse = reverse;
          } else {
            setRatte2ReverseLook(reverse);
          }
          return;
        }

        if (ratteMode !== "ratte1") showRatte1();
        setRatte2ReverseLook(false);
        lastReverse = null;
      }
    }
  });

  tl.set([dark, darkM], { autoAlpha: 1 }, 0);
  tl.to(blackout, { autoAlpha: 0, duration: 0.08, ease: "power2.inOut" }, 0);

  tl.set(tunnelText, { autoAlpha: 0 }, 0);

  tl.to(light, { autoAlpha: 1, duration: 0.30, ease: "power1.inOut" }, 0.40);
  tl.to(graffiti, { autoAlpha: 1, duration: 0.18, ease: "power1.out" }, 0.50);
  tl.to(lightM, { autoAlpha: 1, duration: 0.16, ease: "power1.out" }, 0.52);

  tl.to(lightM, { autoAlpha: 0, duration: 0.15, ease: "power1.inOut" }, 0.96);
  tl.to(graffiti, { autoAlpha: 0, duration: 0.16, ease: "power1.inOut" }, 0.97);
  tl.to(light, { autoAlpha: 0, duration: 0.22, ease: "power1.inOut" }, 0.98);

  tl.to(blackout, { autoAlpha: 1, duration: 0.08, ease: "power2.inOut" }, 1.30);
  tl.set([dark, darkM], { autoAlpha: 0 }, CUT_TO_CANAL_T);
  tl.set(hscroll, { autoAlpha: 1 }, CUT_TO_CANAL_T);
  tl.to(blackout, { autoAlpha: 0, duration: 0.08, ease: "power2.inOut" }, 1.34);

  tl.call(() => {
    showRatte1();
    setRatte2ReverseLook(false);
    lastReverse = null;
    showFooterSmooth(false);
  }, null, CUT_TO_CANAL_T + 0.01);

  tl.to(canalText1, { autoAlpha: 1, duration: 0.14, ease: "power2.out" }, CUT_TO_CANAL_T + 0.06);

  tl.call(() => {
    showRatte2({ restart: true });
    setRatte2ReverseLook(false);
    lastReverse = false;
  }, null, HSCROLL_START_T);

  tl.to(track, { xPercent: -100, duration: 0.95, ease: "none" }, SHIFT_1_T);
  tl.to(canalText1, { autoAlpha: 0, duration: 0.10, ease: "power2.out" }, SHIFT_1_T + 0.05);
  tl.to(canalText2, { autoAlpha: 1, duration: 0.14, ease: "power2.out" }, SHIFT_1_T + 0.12);

  tl.to(track, { xPercent: -200, duration: 0.95, ease: "none" }, SHIFT_2_T);
  tl.to(canalText2, { autoAlpha: 0, duration: 0.10, ease: "power2.out" }, SHIFT_2_T + 0.05);
  tl.to(canalText3, { autoAlpha: 1, duration: 0.14, ease: "power2.out" }, SHIFT_2_T + 0.12);

  tl.to(canalText3, { autoAlpha: 0, duration: 0.18, ease: "power2.out" }, SHIFT_2_T + 0.85);
}
