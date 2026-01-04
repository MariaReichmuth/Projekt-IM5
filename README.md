<!-- Titelbild -->
<p align="center">
  <img src="sketch/titelbild.png" alt="Que trouvons-nous là-bas – Titelbild" width="100%">
</p>

# Que trouvons-nous là-bas?
### Interaktive Medien – Scrollytelling (2025)

**Maria Reichmuth, Ricarda Schirato (MMP23CV)**

**Artefakt:** projektim05.mariareichmuth  
**Praesentationsvideo:** [Link einfügen]

---

## Projektidee in einem Satz
Ein responsives Scrollytelling, bei dem der Scroll nicht nur Navigation ist, sondern das Erzaehlen selbst uebernimmt: Zooms, Ueberblendungen, Perspektivwechsel und ein bewusster Richtungswechsel (vertikal → horizontal) sind direkt an die Scrollbewegung gekoppelt.

---

## Projektstruktur

Projekt-IM5/  
├─ index.html  
├─ style.css  
├─ script.js  
├─ README.md  
└─ sketch/  
&nbsp;&nbsp;&nbsp;├─ SVG-Assets  
&nbsp;&nbsp;&nbsp;├─ PNG-Assets  
&nbsp;&nbsp;&nbsp;└─ GIF-Assets  

Alle visuellen Assets (Illustrationen, PNGs, GIFs) sind im Ordner `sketch/` gebuendelt und werden ueber relative Pfade eingebunden.

---

## Fokus im Fach Interaktive Medien
Der Schwerpunkt dieses Projekts lag auf Interaktionsdesign und technischer Umsetzung.

- Scroll als dramaturgisches Werkzeug (scrubbed Animation statt Autoplay)
- Ruhige Uebergaenge ohne harte Schnitte
- Richtungswechsel als bewusster Interaktionsmoment
- Stabilitaet und Performance bei komplexem Layering
- Responsiveness und Reduced Motion

---

## Interaktionsablauf

### Kapitel 1: Vertikal (Hero – pinned)
Der Einstieg ist als pinned Section umgesetzt. Der sichtbare Bildausschnitt bleibt fixiert, waehrend der Scroll die Erzaehlbewegung steuert.

- Zoom in den Gullideckel durch Skalierung mehrerer Layer
- Layer-Wechsel (Strasse → Detail → Kanalisation) via weichen Ueberblendungen
- Ein- und Ausblenden von Texten als Erzaehlbeats
- Schwarzblenden als Uebergaenge
- Vertikaler Abstieg entlang einer Leiter mit konstantem Leitmotiv

<p align="center">
  <img src="sketch/schritte.gif" width="60%">
</p>

---

### Kapitel 2: Horizontal (Kanal – Track)
Nach dem Abstieg wird der Scroll horizontal interpretiert, obwohl weiterhin vertikal gescrollt wird.

- Horizontaler Track mit mehreren Szenen
- Seitliche Bewegung erzeugt das Gefuehl des Vorwaertsgehens
- Kontinuierlicher Raum statt klassischer Szenenwechsel

<p align="center">
  <img src="sketch/graffiti.gif" width="70%">
</p>

---

## Technische Umsetzung

### Stack
- HTML / CSS / JavaScript (statisch)
- GSAP ScrollTrigger

Illustrationen und GIFs wurden mit Procreate und Adobe Photoshop erstellt.  
Die Programmierung erfolgte mit punktueller Unterstuetzung durch ChatGPT.

---

## Zentrale gestalterisch-technische Prinzipien

### Scroll als Erzaehlachse
Die Scrollposition bestimmt Tempo, Rhythmus und Fortschritt der Erzaehlung. Nutzer:innen kontrollieren die Bewegung selbst.

---

### Layering statt Szenenwechsel
- Mehrere visuelle Ebenen uebereinander
- Sichtbarkeit ueber Transparenz gesteuert
- Keine harten Schnitte, sondern kontinuierliche Transformation

<p align="center">
  <img src="sketch/kanalisation1.svg" width="70%">
</p>

---

### Performance & Stabilitaet
- Bewusste Reduktion gleichzeitiger Bewegungen
- Fokus auf visuelle Ruhe
- Vermeidung von Pop-ins und Flackern

---

## Responsiveness
Das Projekt ist fuer unterschiedliche Bildschirmgroessen ausgelegt.

- Angepasste Positionierungen und Abstaende fuer Mobile und Desktop
- Unterschiedliche Gewichtung von Bild und Text je nach Viewport
- Fokus auf Lesbarkeit und visuelle Klarheit

---

## Reduced Motion
Bewegung wird bewusst reduziert, wenn Nutzer:innen dies bevorzugen.

- Systemeinstellung „prefers reduced motion“ wird respektiert
- Animationen werden stark vereinfacht oder uebersprungen
- Finale Bildzustaende werden direkt angezeigt
- Optionaler manueller Override ueber URL-Parameter

---

## Animierte Elemente (GIFs)

- **schritte.gif** – Alltagsfluss an der Oberflaeche
- **zigarette.gif / Zigi2.gif** – wiederkehrender Trigger
- **graffiti.gif** – visuelle Spur innerer Zustaende
- **ratte.gif, ratte2.gif, ratte3.gif** – wiederkehrendes Motiv in drei Entwicklungsstufen

<p align="center">
  <img src="sketch/ratte.gif" width="40%">
</p>

### Technischer Kniff – Ratte
- Fixiertes Overlay ueber der Szene
- Reaktion auf Scrollrichtung durch Spiegelung und Positionswechsel
- Bewusster Einsatz als leitendes Symbol

---

## Learnings & Stolpersteine

### Timing
Das exakte Abstimmen von Ein- und Ausblendungen sowie das Verhalten beim Rueckwaertsscrollen erwies sich als besonders anspruchsvoll.

### Skizze vs. Umsetzung
Mehrere Ideen funktionierten in der Skizze, aber nicht im gescrubbten Scroll-Kontext. Frueheres Prototyping im Browser haette Iterationen reduziert.

### Performance
Schon kleine visuelle Instabilitaeten wirken im Scrollytelling stark stoerend. Reduktion und saubere Vorbereitung der Assets waren entscheidend.

### Reduktion
Weniger Bewegung erzeugt mehr Wirkung. Animation wurde gezielt und sparsam eingesetzt.

---

## Fazit
Scrollen kann mehr sein als Navigation.

Durch die direkte Kopplung von Scrollbewegung und Erzaehlung entsteht eine ruhige, kontrollierte Interaktion, bei der Nutzer:innen Tempo und Rhythmus selbst bestimmen.

Technik ist hier kein Selbstzweck, sondern traegt die Geschichte.
