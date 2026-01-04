# Que trouvons-nous là-bas?
**Interaktive Medien – Scrollytelling (2025)**  
Maria Reichmuth, Ricarda Schirato (MMP23CV)

**Artefakt:** projektim05.mariareichmuth
**Präsentationsvideo:** [Link einfügen]

---

## 1) Projektidee in einem Satz
Ein responsives Scrollytelling, bei dem der Scroll nicht nur Navigation ist, sondern **das Erzählen übernimmt**: Zoom, Überblendungen, Perspektivwechsel und ein Richtungswechsel (vertikal → horizontal) werden direkt an die Scrollbewegung gekoppelt.

---

## 2) Fokus im Fach Interaktive Medien
In diesem Projekt ging es weniger um „Story erklären“, sondern um **Interaktionsdesign + technische Umsetzung**:

- Scroll als dramaturgisches Werkzeug (scrubbed Animation statt Autoplay)
- Ruhige Übergänge ohne harte Schnitte (Crossfades, Schwarzblenden)
- Richtungswechsel als Interaktionsmoment (vertikal → horizontal)
- Stabilität/Performance: Preload, Decode, Anti-Flicker-Massnahmen
- Responsiveness + `prefers-reduced-motion`

---

## 3) Interaktionsablauf (Was passiert beim Scrollen?)
### Kapitel 1: Vertikal (Hero – pinned)
Der Einstieg ist ein „pinned section“: Der sichtbare Bildausschnitt bleibt fix, während der Scroll eine Timeline scrubbt.

Dabei passieren u.a.:
- Zoom in den Gullideckel (Skalierung von Layern)
- Layer-Wechsel (Strasse → Detail → Kanal)
- Ein-/Ausblenden von Texten als Erzählbeats
- Schwarzblenden als Übergänge
- Abstieg entlang einer Leiter (Umgebung bewegt sich, Leitmotiv bleibt präsent)

### Kapitel 2: Horizontal (Kanal – pinned Track)
Nach dem Abstieg wird der Scroll **horizontal interpretiert**, obwohl Nutzer:innen weiterhin vertikal scrollen.
- Ein horizontaler Track mit mehreren Slides wird seitlich verschoben (`xPercent`)
- Dadurch entsteht das Gefühl, „durch den Kanal zu gehen“

---

## 4) Technische Umsetzung
### Stack
- HTML / CSS / JavaScript (statisch)
- GSAP (Animation)
- GSAP ScrollTrigger (Scroll-Steuerung, Pinning, MatchMedia)

### Zentrale Prinzipien
**a) Scroll = Timeline**
- GSAP Timelines laufen mit `scrub: true` → Scrollposition steuert Animationsfortschritt

**b) Layering statt Szenenwechsel**
- Mehrere übereinanderliegende Bilder (SVGs, Overlays, GIFs)
- Sichtbarkeit über `opacity/autoAlpha`, keine harten Cuts

**c) Performance / Stabilität**
- Preload + Decode von zentralen Assets vor Start (verhindert Pop-in/Flackern)
- Anti-Flicker CSS (`translateZ(0)`, `backface-visibility`, `will-change`)
- Fokus auf GPU-freundliche Properties (`transform`, `opacity`)

**d) Responsiveness**
- Unterschiedliche Transform-Origins/Positionierungen für Mobile/Desktop über `ScrollTrigger.matchMedia`

**e) Reduced Motion**
- `prefers-reduced-motion: reduce` wird respektiert
- Override möglich über `?motion`
- Im Reduced-Motion-Modus werden finale Zustände gesetzt, statt alles zu scrubben

---

## 5) Animierte Elemente (warum GIFs, wie eingesetzt)
GIFs werden gezielt als „Mini-Events“ eingesetzt, um Handlung/Atmosphäre zu verstärken, ohne die Szene permanent zu überladen:

- **schritte.gif**: Alltagsfluss an der Oberfläche
- **zigarette.gif / Zigi2.gif**: Trigger/Leitmotiv (kurz betont, dann zurückgenommen)
- **graffiti.gif**: Begriffe als visuelle Spuren im Tunnel
- **ratte.gif / ratte2.gif / ratte3.gif**: wiederkehrendes Motiv mit drei Zuständen

**Technischer Kniff (Ratte 2):**  
Ratte 2 liegt als **fixed Overlay** über der Szene und reagiert auf Scrollrichtung (Mirror/Position). Zusätzlich wird das GIF periodisch „seamless“ neu gestartet (Element ersetzen + Cache-Bust), damit der Loop stabil wirkt.

---

## 6) Projektstruktur
