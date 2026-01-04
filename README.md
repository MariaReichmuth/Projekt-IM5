<!-- Titelbild -->
<p align="center">
  <img src="sketch/titelbild.png" alt="Que trouvons-nous là-bas – Titelbild" width="100%">
</p>

# Que trouvons-nous là-bas?
### Interaktive Medien – Scrollytelling (2025)

**Maria Reichmuth, Ricarda Schirato (MMP23CV)**

**Artefakt:** projektim05.mariareichmuth  
**Präsentationsvideo:** [Link einfügen]

---

## Projektidee in einem Satz
Ein responsives Scrollytelling, bei dem der Scroll nicht nur Navigation ist, sondern das Erzählen selbst übernimmt: Zooms, Überblendungen, Perspektivwechsel und ein bewusster Richtungswechsel (vertikal → horizontal) sind direkt an die Scrollbewegung gekoppelt.

---

## Projektstruktur

Projekt-IM5/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ sketch/
├─ *.svg
├─ *.png
└─ *.gif

yaml
Code kopieren

Alle visuellen Assets (Illustrationen, PNGs, GIFs) sind im Ordner `sketch/` gebündelt und werden über relative Pfade eingebunden.

---

## Fokus im Fach Interaktive Medien
Der Schwerpunkt dieses Projekts lag auf Interaktionsdesign und technischer Umsetzung.

- Scroll als dramaturgisches Werkzeug (scrubbed Animation statt Autoplay)
- Ruhige Übergänge ohne harte Schnitte
- Richtungswechsel als bewusster Interaktionsmoment
- Stabilität und Performance bei komplexem Layering
- Responsiveness und Reduced Motion

---

## Interaktionsablauf

### Kapitel 1: Vertikal (Hero – pinned)
Der Einstieg ist als pinned section umgesetzt. Der sichtbare Bildausschnitt bleibt fixiert, während der Scroll eine GSAP-Timeline scrubbt.

- Zoom in den Gullideckel durch Skalierung mehrerer Layer
- Layer-Wechsel (Strasse → Detail → Kanalisation) via Crossfades
- Ein- und Ausblenden von Texten als Erzählbeats
- Schwarzblenden als Übergänge
- Vertikaler Abstieg entlang einer Leiter mit konstantem Leitmotiv

<p align="center">
  <img src="sketch/schritte.gif" width="60%">
</p>

---

### Kapitel 2: Horizontal (Kanal – pinned Track)
Nach dem Abstieg wird der Scroll horizontal interpretiert, obwohl weiterhin vertikal gescrollt wird.

- Horizontaler Track mit mehreren Slides
- Seitliche Verschiebung des Tracks (`xPercent`)
- Gefühl des Vorwärtsgehens durch den Kanal

<p align="center">
  <img src="sketch/graffiti.gif" width="70%">
</p>

---

## Technische Umsetzung

### Stack
- HTML / CSS / JavaScript (statisch)
- GSAP
- GSAP ScrollTrigger

Illustrationen und GIFs wurden mit Procreate und Adobe Photoshop erstellt.  
Die Programmierung wurde mit Unterstützung von ChatGPT umgesetzt.

---

## Zentrale technische Prinzipien

### Scroll = Timeline
Alle Animationen laufen in GSAP-Timelines mit `scrub: true`. Die Scrollposition steuert direkt den Animationsfortschritt.

### Layering statt Szenenwechsel
- Übereinanderliegende SVGs, Overlays und GIFs
- Steuerung über `opacity` / `autoAlpha`
- Keine harten Schnitte

<p align="center">
  <img src="sketch/kanalisation1.svg" width="70%">
</p>

---

### Performance & Stabilität
- Preload und Decode zentraler Assets
- Anti-Flicker-Massnahmen (`translateZ(0)`, `backface-visibility`, `will-change`)
- Fokus auf GPU-freundliche Properties (`transform`, `opacity`)

---

### Responsiveness

```js
ScrollTrigger.matchMedia({
  "(max-width: 767px)": () => {
    // Mobile Setup
  },
  "(min-width: 768px)": () => {
    // Desktop Setup
  }
});
Unterschiedliche Transform-Origins, Positionierungen und Textabstände für Mobile und Desktop.

Reduced Motion
prefers-reduced-motion: reduce wird respektiert

Animationen werden nicht gescrubbt

Finale Zustände werden direkt gesetzt

Optionaler Override über ?motion

Animierte Elemente (GIFs)
schritte.gif – Alltagsfluss an der Oberfläche

zigarette.gif / Zigi2.gif – Trigger und Leitmotiv

graffiti.gif – visuelle Spuren innerer Zustände

ratte.gif, ratte2.gif, ratte3.gif – wiederkehrendes Motiv in drei Zuständen

<p align="center"> <img src="sketch/ratte.gif" width="40%"> </p>
Technischer Kniff – Ratte 2
Fixed Overlay über der Szene

Reaktion auf Scrollrichtung (Spiegelung / Position)

Periodischer Neustart des GIFs durch DOM-Ersatz und Cache-Busting

Learnings & Stolpersteine
Timing
Das exakte Abstimmen von Ein- und Ausblendungen sowie das Verhalten beim Reverse-Scroll war der zeitintensivste Teil der Umsetzung.

Skizze vs. Scroll
Mehrere Ideen funktionierten auf Papier, aber nicht im gescrubbten Scroll-Kontext. Früheres Testen direkt im Browser hätte Iterationen reduziert.

Performance
Bereits kleine visuelle Instabilitäten (Pop-in, Flackern) wirken im Scrollytelling stark störend. Preloading und Anti-Flicker-Massnahmen erwiesen sich als essenziell.

Reduktion
Zu viele gleichzeitige Animationen schwächen die Wirkung. Bewegung wurde bewusst reduziert und gezielt eingesetzt.

Fazit
Scrollen kann mehr sein als Navigation.
Durch die direkte Kopplung von Scrollposition und Animation entsteht eine ruhige, kontrollierte Interaktion, bei der Nutzer:innen Tempo und Rhythmus selbst bestimmen.

Technik dient hier nicht als Effekt, sondern als tragendes erzählerisches Mittel.
