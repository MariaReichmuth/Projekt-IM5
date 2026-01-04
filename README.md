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

## Abstract
Das interaktive Scrollytelling *Que trouvons-nous là-bas?* untersucht innere Konflikte des Menschen anhand einer urbanen Metapher: dem Gullideckel als Grenze zwischen Oberfläche und Untergrund.

Durch Scroll-Interaktion wird der Blick von einer lebendigen Stadtoberfläche in einen dunklen Raum gelenkt, der verdrängte Gedanken und Emotionen symbolisiert. Fotografie, Illustration, Animation, Typografie und Scrollbewegung werden zu einer linearen, immersiven Erzählform verbunden.

Ziel der Arbeit ist es, innere Hürden und Traumata nicht erklärend darzustellen, sondern durch Bewegung, Raum und Zeit erfahrbar zu machen. Viele Entscheidungen entstanden dabei nicht am Reissbrett, sondern erst im Prozess – oft genau dann, wenn etwas nicht so funktionierte wie gedacht.

---

## Projektidee
Im Zentrum des Projekts steht die Frage, was sich unter der Oberfläche verbirgt – sowohl im physischen als auch im inneren Sinn.

Der Gullideckel fungiert als visuelle und erzählerische Schwelle. Er trennt das Oben vom Unten, das Äussere vom Inneren. Das Scrollen übernimmt dabei nicht nur die Navigation, sondern das Erzählen selbst. Je weiter gescrollt wird, desto tiefer taucht man in die Geschichte ein.

Ein bewusster Richtungswechsel von vertikalem zu horizontalem Scrollen markiert einen neuen inneren Zustand. Diese Entscheidung war keine rein formale Spielerei, sondern ergab sich aus der Erkenntnis, dass sich innere Prozesse nicht nur als Abstieg, sondern auch als Weg durch einen Raum beschreiben lassen.

---

## Formatentscheidung: Vom Animationsfilm zum Scrollytelling
Ursprünglich war das Projekt als klassischer Animationsfilm konzipiert. Während der Arbeit im Fach *Visualisieren* merkten wir jedoch relativ schnell, dass sich unser Thema zwar gut erzählen, aber nur schwer **erleben** lässt, wenn alles zeitlich vorgegeben ist.

Der Wechsel zum Scrollytelling erfolgte deshalb bewusst – und zugegebenermassen auch etwas spontan. Erst durch die Scroll-Interaktion wurde klar, wie gut sich der Abstieg, das Verweilen und der spätere horizontale Weg mit dem Thema der inneren Tiefe verbinden lassen. Nutzer:innen bestimmen Tempo und Rhythmus selbst. Die Geschichte wird nicht abgespielt, sondern durchlaufen.

---

## Projektstruktur

Projekt-IM5/  
├─ index.html  
├─ style.css  
├─ script.js  
├─ README.md  
└─ sketch/  
&nbsp;&nbsp;&nbsp;├─ SVG-Illustrationen  
&nbsp;&nbsp;&nbsp;├─ PNG-Assets  
&nbsp;&nbsp;&nbsp;└─ GIF-Animationen  

Alle visuellen Assets sind im Ordner `sketch/` gebündelt und werden über relative Pfade eingebunden. Diese klare Trennung erwies sich später als enorm hilfreich, insbesondere beim Preloading und Debugging.

---

## Hilfsmittel und Arbeitsweise

### Gestalterische Werkzeuge
Die visuellen Assets wurden überwiegend selbst erstellt und von Anfang an auf das Scrollytelling hin gedacht – zumindest so weit, wie wir es zu diesem Zeitpunkt bereits verstanden haben.

- **Procreate**  
  Erstellung der Illustrationen (SVG-Exports) sowie einzelner Bildlayer. Schon beim Zeichnen wurde versucht, Ebenen sauber zu trennen und so anzulegen, dass sie sich später skalieren und übereinanderlegen lassen. Dass sich manche Entscheidungen erst im Browser als suboptimal herausstellten, gehörte allerdings ebenfalls dazu.

- **Adobe Photoshop**  
  Erstellung und Feinschliff der animierten GIFs (Schritte, Zigarette, Graffiti, Ratten). Die Animationen wurden bewusst kurz gehalten und ruhig geloopt, was sich später als grosser Vorteil für das Scrollytelling erwies.

- **Handskizzen**  
  Erste Skizzen entstanden analog. Sie dienten weniger als exakte Baupläne, sondern als Denkstütze für Dramaturgie, Blickführung und Übergänge. Viele dieser Skizzen wurden später mehrfach überarbeitet – meistens, weil wir im Code merkten, dass etwas so nicht funktionieren konnte.

Ein klassisches Wireframe-Tool wurde bewusst nicht eingesetzt. Stattdessen arbeiteten wir früh direkt im Browser, da Timing, Raumgefühl und Scroll-Längen erst dort wirklich greifbar wurden.

---

### Programmier-Hilfsmittel
- **HTML / CSS / JavaScript**  
  Die Website ist statisch umgesetzt, ohne Frameworks. Diese Entscheidung gab uns volle Kontrolle über DOM-Struktur, Layering und Performance – verlangte aber auch, dass wir uns intensiv mit Details auseinandersetzten, die man sonst gerne auslagert.

- **GSAP (GreenSock Animation Platform)**  
  Zentrales Werkzeug für sämtliche Animationen.

- **GSAP ScrollTrigger**  
  Steuerung aller Animationen über die Scrollposition, inklusive Pinning, Scrubbing und Richtungsabfrage.

- **ChatGPT (v5.1 / v5.2)**  
  Eingesetzt als technischer Sparringspartner, unter anderem bei:
  - Strukturierung komplexer Timelines  
  - Debugging von Timing- und Scrollproblemen  
  - Performance-Optimierung  
  - Entwicklung robuster Lösungen (z. B. GIF-Restarts, Motion-Override)

ChatGPT diente dabei nicht als Ersatz für konzeptionelle Entscheidungen, sondern eher als jemand, der geduldig mitdenkt, wenn man zum dritten Mal am selben Scroll-Bug hängt.

---

## Technische Umsetzung – detailliert

### Grundarchitektur
Das Projekt ist in zwei klar getrennte Hauptabschnitte gegliedert:

1. **Hero / Kapitel 1 (vertikal, pinned)**  
2. **Sequenz / Kapitel 2 (Tunnel → Kanal, horizontal interpretiert)**

Diese Trennung entstand nicht nur aus dramaturgischen Gründen, sondern auch aus praktischen: kleinere Timelines, besser kontrollierbares Refresh-Verhalten und weniger unvorhersehbares Scroll-Verhalten beim Zurückscrollen.

---

## Kapitel 1 – Vertikales Scrollytelling (Hero)

### Pinning als erzählerische Grundlage
Der erste Abschnitt ist als **pinned Section** umgesetzt. Der sichtbare Bildausschnitt bleibt fixiert, während das Scrollen den Fortschritt innerhalb der Szene steuert.

Technisch:
- Fixierung des Abschnitts beim Eintritt  
- künstlich verlängerte Scroll-Länge  
- GSAP-Timeline mit `scrub`

Inhaltlich:
- kein klassischer Szenenwechsel  
- stattdessen ein kontinuierliches Hineinzoomen und Abtauchen

<p align="center">
  <img src="anhang/stummelreinwerfen.png" alt="Storyboard: Zigarettenstummel wird eingeworfen" width="70%">
</p>

---

### Layer-Struktur im Hero
Der Hero besteht aus vielen exakt übereinanderliegenden Ebenen:

- Hintergrund (Strassenoberfläche)
- Detail-Layer (Gullideckel)
- Kanalisation
- Leiter
- Müllhaufen
- saisonale Filter und Partikeleffekte
- GIF-Overlays
- Textlayer
- Blackout-Layer

Alle Elemente bleiben permanent im DOM und werden ausschliesslich über Transparenz, Skalierung und Position gesteuert. Diese Entscheidung verhinderte viele Layout-Sprünge – auch wenn sie uns anfangs einige graue Haare beschert hat.

---

### Zeit, Stillstand und Kontrast (Jahreszeiten)
Die Jahreszeiten laufen bewusst unabhängig vom Scrollen.

Technisch:
- zyklischer Wechsel per Timer  
- Überblendung über Opacity und Filter

Inhaltlich:
- oben vergeht Zeit automatisch  
- der Gullideckel bleibt unverändert

Dieser Kontrast entstand eher aus einer inhaltlichen Überlegung – und stellte sich erst später als technisch elegant heraus.

---

### Abstieg und Text-Timing
Texte erscheinen als punktuelle Gedankenfragmente.

- Jede Textpassage ist eine eigene Ebene  
- exakt an Scrollposition gekoppelt  
- verschwindet wieder zugunsten der Bildwirkung  

Beim Abstieg bewegt sich nicht die Kamera, sondern der Raum. Der Zigarettenstummel bleibt als Leitmotiv erhalten.

<p align="center">
  <img src="anhang/kanalreinscrollen.png" alt="Storyboard: Abstieg in die Kanalisation" width="70%">
</p>

---

## Kapitel 2 – Tunnel und horizontaler Kanal

### Umdeutung der Scrollbewegung
Nach dem Abstieg wird die Scrollbewegung neu interpretiert. Obwohl weiterhin vertikal gescrollt wird, bewegt sich der Raum horizontal.

Technisch:
- horizontaler Track mit Slides  
- seitliche Verschiebung (`xPercent`)  
- vertikale Scrollbewegung steuert horizontale Bewegung  

Dieser Moment war einer der Punkte, an dem wir erst beim Testen merkten, wie stark sich Raumwahrnehmung allein durch Bewegungslogik verändern lässt.

---

### Tunnelphase
Der Tunnel fungiert als Übergangsraum:

- dunkel → kurz hell → wieder dunkel  
- Graffiti als temporäre Ebene  
- reduzierte Textpräsenz  

<p align="center">
  <img src="anhang/rattelauft.png" alt="Storyboard: Ratte läuft durch den Kanal" width="70%">
</p>

---

### Horizontaler Kanal und Textbeats
Der Kanal besteht aus mehreren Slides mit leicht versetzten Ausschnitten derselben Umgebung.

- kurze Textbeats  
- bewusste Pausen  
- zusammenhängender Raum  

---

## Globale Ratte – komplexes Overlay

### Warum ein globales Overlay?
Die Ratte ist keine Hintergrundfigur, sondern eine eigenständige Beobachterin.

- fixed über der gesamten Szene  
- unabhängig vom Scrollfluss  

---

### Drei Zustände, eine Figur
1. **Ratte 1** – Ankommen  
2. **Ratte 2** – Bewegung, reagiert auf Scrollrichtung  
3. **Ratte 3** – Ruhe, Blick zum Licht  

<p align="center">
  <img src="anhang/rattestatisch.png" alt="Storyboard: ruhende Ratte" width="55%">
</p>

---

### GIF-Restart als technischer Kniff
Damit Ratte 2 nicht „aus dem Takt“ läuft:

- DOM-Ersatz des `<img>`  
- Cache-Busting  
- Restart nur im sichtbaren Zustand  

Diese Lösung entstand erst nach mehreren eher unschönen Experimenten.

---

## Performance, Preload und Stabilität
Durch viele Layer wäre spätes Laden sofort sichtbar gewesen.

Massnahmen:
- Preload im HTML-Head  
- zusätzliches Decode vor Animationsstart  

Ziel:
- kein Pop-in  
- stabile Bildkomposition  

---

## Motion Preferences und bewusster Override
Ein Scrollytelling lebt von Bewegung. In Umgebungen mit automatisch aktiviertem `prefers-reduced-motion` (z. B. Citrix) wird das Erlebnis jedoch stark eingeschränkt.

Deshalb:
- Animationen starten dort nicht automatisch  
- bewusster Override möglich

**URL-Override:**  
`/?motion` erzwingt das volle Scrollytelling

---

## Zentrale Learnings
- Scroll-Dramaturgie braucht präziseres Timing als klassische Animation  
- Reverse-Scroll muss aktiv mitgedacht werden  
- Der Browser ist das ehrlichste Testwerkzeug  
- Performance entscheidet über Immersion  
- Erst das Scrollytelling machte Abstieg und Richtungswechsel erzählerisch sinnvoll  

---

## Fazit
Die technische Umsetzung ist kein Selbstzweck, sondern Teil der Erzählung.

Der Weg nach unten ist kein Schnitt –  
er ist eine Bewegung.
