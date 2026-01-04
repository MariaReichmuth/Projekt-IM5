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

## Projektidee
*Que trouvons-nous là-bas?* ist ein interaktives Scrollytelling, das innere Konflikte und verdraengte Gedanken ueber eine urbane Metapher verhandelt: den Gullideckel als Grenze zwischen Oberflaeche und Untergrund.

Der zentrale Entscheid: Scrollen ist nicht nur Navigation, sondern Erzaehlbewegung. Die Geschichte entsteht durch Zooms, Ueberblendungen, Perspektivwechsel und einen bewussten Richtungswechsel (vertikal → horizontal). So wird der Abstieg in die Tiefe nicht „geschnitten“, sondern Schritt fuer Schritt erlebt.

---

## Kontext und Formatentscheid
Urspruenglich war das Projekt als Animationsvideo geplant. Waerend des Prozesses im Fach *Visualisieren V* haben wir uns jedoch bewusst umentschieden und das Format in Richtung Scrollytelling verschoben.

Der Grund war inhaltlich: Die Geschichte funktioniert nicht nur als Abfolge von Bildern, sondern als Bewegung durch einen Raum.  
Der Abstieg entlang der Leiter, das „Eintauchen“ und der spaetere Wechsel von vertikaler zu horizontaler Bewegung passten aus unserer Sicht wesentlich besser zu einer scrollgesteuerten Website als zu einem linearen Video. Durch das Scrollytelling wird das Thema Verdrängung nicht nur gezeigt, sondern interaktiv durchlaufen: Nutzer:innen „bewegen“ sich selbst in die Tiefe, statt dabei nur zuzuschauen.

Die Umstellung bedeutete zwar Zusatzaufwand (Re-Storyboard, technische Neuplanung), hat dem Projekt aber auch einen deutlichen Motivationsschub gegeben, weil Form und Inhalt danach besser zusammengepasst haben.

---

## Projektstruktur

Projekt-IM5/  
├─ index.html  
├─ style.css  
├─ script.js  
├─ README.md  
└─ sketch/  
&nbsp;&nbsp;&nbsp;├─ SVG-Illustrationen und Layer  
&nbsp;&nbsp;&nbsp;├─ PNG-Assets und Exportvarianten  
&nbsp;&nbsp;&nbsp;└─ GIF-Assets (Schritte, Zigi, Graffiti, Ratten)  

Alle visuellen Assets liegen im Ordner `sketch/` und werden ueber relative Pfade eingebunden.

---

## Kurzkonzept (Inhalt)
Das Scrollytelling beginnt an der Stadtoberflaeche: Zeit vergeht, Menschen bewegen sich, die Jahreszeiten wechseln. Der Gullideckel bleibt als stilles Zentrum unveraendert. Mit dem Scrollen wird der Blick immer enger und kippt schliesslich in den Untergrund.

In der Tiefe sammeln sich Dinge, die „kein Licht vertragen“: weggeworfene Objekte, Begriffe wie Angst oder Schuld, Spuren von inneren Zustaenden. Eine Ratte taucht als wiederkehrendes Motiv auf und begleitet die Bewegung durch den Kanal. Am Ende entsteht ein ruhiger Moment: ein Lichtschein von oben und der Blick nach oben – als offener Abschluss statt eindeutiger Aufloesung.

---

## Ziel und Fokus im Fach
Der Fokus lag auf der Verbindung von dramaturgischer Idee und technischer Umsetzung:

- Scroll als kontrollierbarer Erzaehlregler (Nutzer:innen bestimmen Tempo und Rhythmus)
- Ueberblendungen und Layering statt harter Schnitte
- Richtungswechsel (vertikal → horizontal) als bewusstes Interaktionsereignis
- technische Stabilitaet bei vielen uebereinanderliegenden Ebenen
- saubere Responsiveness (Komposition statt reines „Verkleinern“)

---

## Dramaturgie und Interaktion im Detail

### Kapitel 1: Oberflaeche → Einstieg in die Tiefe (vertikal, pinned)
Der Einstieg ist als pinned Abschnitt umgesetzt. Das heisst: Der Viewport bleibt stehen, waehrend das Scrollen innerhalb der Szene eine definierte Abfolge von Zustandswechseln steuert.

**Inhaltliche Beats und visuelle Umsetzung:**
- **Startframe:** Strassenoberflaeche mit Gullideckel als Mittelpunkt, Titel und Pfeil als Einstiegssignal.
- **Zeit vergeht:** Die Jahreszeiten wechseln sichtbar, waehrend der Gullideckel still bleibt. Dieser Gegensatz ist inhaltlich wichtig: oben ist Bewegung und Alltag, unten wird verdraengt und gesammelt.
- **Naeherruecken:** Der Blick zoomt kontrolliert auf den Gullideckel. Das ist kein „Kameracut“, sondern ein schrittweises Hineinziehen durch Skalierung und Ueberblendungen.
- **Ausloeser:** Ein Zigarettenstummel faellt in den Gullideckel. Dieser Moment markiert den Uebergang von aussen nach innen (Metapher fuer Sucht, Scham, Verdraengung).
- **Abstieg:** Der Blick folgt dem Weg in die Tiefe entlang der Leiter. Texte erscheinen als Gedanken-/Erzaehlbeats und verschwinden wieder, waehrend sich der Raum weiter „nach unten“ oeffnet.
- **Ankommen:** Der Stummel landet auf einem Muellhaufen. Weitere Objekte verdichten den Raum als Symbol fuer das, was sich im Innern ansammelt.
- **Uebergang:** Kurze Schwarzblenden ersetzen Filmschnitte und setzen die Perspektivwechsel bewusst als „Schwellenmomente“.

<p align="center">
  <img src="sketch/schritte.gif" width="60%">
</p>

---

### Kapitel 2: Tunnel → Kanal (Richtungswechsel, horizontaler Raum)
Nach dem Abstieg veraendert sich die Bewegungslogik: Nutzer:innen scrollen weiterhin vertikal, aber der Raum bewegt sich horizontal.

**Was dieser Richtungswechsel erzaehlerisch macht:**
- Im ersten Kapitel ist Scrollen gleichbedeutend mit Abstieg (Tiefe).
- Im zweiten Kapitel ist Scrollen gleichbedeutend mit Weg (Strecke).
- Der Bruch markiert eine neue Phase: nicht nur „unten ankommen“, sondern „unten weitergehen“.

**Inhaltliche Beats und visuelle Umsetzung:**
- **Tunnelphase:** dunkel → kurz heller → wieder dunkel. In dieser Phase erscheinen die Graffiti-Begriffe als Spuren innerer Zustaende.
- **Cut in den Kanal:** Der Raum oeffnet sich in eine horizontale Abfolge von Abschnitten (Slides).
- **Drei Stationen:** Pro Slide erscheint ein Textbeat (ruhig, zentral positioniert), der die Metapher weiterfuehrt.
- **Ratte als Begleitung:** Die Ratte tritt als wiederkehrendes Motiv auf, das den Raum „belebt“ und zugleich beobachtet.
- **Schluss:** Der Ablauf verlangsamt sich, der Raum kommt zur Ruhe, Footer und Schlussmotiv erscheinen.

<p align="center">
  <img src="sketch/graffiti.gif" width="70%">
</p>

---

## Visuelle Gestaltung (kurz, aber konkret)
Der Stil ist bewusst reduziert, damit Bewegung und Komposition wirken koennen.

- **Oben (Oberflaeche):** heller, offener, klare Formen, ruhige Typografie. Bewegung (Jahreszeiten, Schritte) bleibt subtil.
- **Unten (Kanal):** dunkler, dichter, unruhiger. Typografie wird expressiver, rot und „untergruendig“, teilweise wie Graffiti integriert.
- **Sprechblasen / Wolkenform:** Hinter Texten liegt eine transparente wolkenartige Form, um Lesbarkeit zu sichern, ohne die Szene vollflaechig zu „zukleben“.

---

## Technische Umsetzung

### Stack
- HTML / CSS / JavaScript (statisch)
- GSAP (Animation)
- ScrollTrigger (Scrollsteuerung, Pinning)

Illustrationen und GIFs wurden mit Procreate und Adobe Photoshop erstellt.  
Die Programmierung erfolgte mit punktueller Unterstuetzung durch ChatGPT.

---

## Technische Architektur (ausfuehrlich)

### 1) Layering statt Szenenwechsel
Das Projekt funktioniert wie eine Bühne aus Ebenen. Viele Elemente liegen exakt uebereinander und werden ueber Transparenz und Transformationswerte gesteuert.

**Typische Layer im Hero:**
- Hintergrund (Oberflaeche)
- Detail-Layer (Gullideckel)
- Kanalisation / Leiter / Muell
- saisonale Filter und Partikel
- GIF-Overlays (Schritte, Zigarette, Akzente)
- Textlayer (Intro, Leitertexte, Muelltext)
- Blackout-Layer als kurzer Uebergang

Dadurch entstehen weiche Uebergaenge, ohne dass neue Seiten geladen oder harte Cuts gesetzt werden muessen.

<p align="center">
  <img src="sketch/kanalisation1.svg" width="70%">
</p>

---

### 2) Pinning als Erzaehlmechanik (Kapitel 1)
Das Pinning sorgt dafuer, dass der Bildausschnitt stehen bleibt und der Scroll stattdessen den Fortschritt innerhalb der Szene steuert.  
Das ist wichtig, weil es das „Hineinziehen“ in den Gullideckel wie eine kontrollierte Kamerabewegung wirken laesst, obwohl es technisch aus Skalierungen und Ueberblendungen besteht.

**Warum das hier funktioniert:**
- Die Szene bleibt stabil und lesbar.
- Nutzer:innen koennen die Bewegung durch Scrollen fein dosieren.
- Rueckwaerts scrollen ist moeglich, ohne dass die Szene „zerfaellt“.

---

### 3) Horizontaler Track (Kapitel 2)
Der Kanal ist als Track aufgebaut, der mehrere Slides nebeneinander enthaelt.  
Beim Scrollen wird der Track seitlich verschoben, wodurch das Gefuehl entsteht, durch den Kanal zu gehen.

**Wichtig an diesem Aufbau:**
- Der Raum bleibt zusammenhaengend (gleicher Hintergrund, verschiedene Ausschnitte).
- Textbeats lassen sich pro Slide klar setzen.
- Die Bewegung bleibt ruhig, weil keine Spruenge zwischen „Seiten“ entstehen.

---

## Asset-Handling und Stabilitaet

### Preload im HTML + zusaetzliches Preload/Decode
Das Projekt nutzt viele grosse SVGs und mehrere GIFs. Wenn diese „nachladen“, sieht man es sofort (Pop-in, Ruckler).  
Darum werden zentrale Assets bereits im Head vorab geladen. Zusaetzlich werden die wichtigsten Bilder im Skript nochmals gesammelt und vor dem Start dekodiert.

**Warum doppelt?**
- Preload im HTML hilft frueh im Ladeprozess.
- Decode im JS hilft gegen das spaete „Entpacken“ von Bildern, das sonst mitten in der Animation passieren kann.

---

### Anti-Flicker und GPU-Fokus
Bei vielen Ebenen kann es zu visuellem Flackern kommen, gerade bei Opacity- oder Scale-Wechseln.  
Um das zu reduzieren, werden haeufige Anti-Flicker-Techniken eingesetzt und Animationen auf `transform` und `opacity` konzentriert.

---

## Responsiveness (nicht nur „kleiner“, sondern neu gesetzt)
Bei scrollygesteuerten Szenen reicht ein simples Skalieren nicht, weil Blickfuehrung und Komposition sonst kippen.

**Was konkret angepasst wurde:**
- Transform-Origin fuer Zoom im Hero (Mobile vs. Desktop)
- Positionierung/Abstaende von Texten je nach Viewport
- Groesse/Inset der Wolkenform fuers Lesen auf kleinen Screens
- Pfeilposition: Mobile viewportbasiert, Desktop relativ zum Titelcontainer
- Mobile-Crop-Regeln fuer Ratte 2/3 (Offsets links/rechts)

Ziel war: gleiche Dramaturgie auf allen Screens, aber eine Komposition, die jeweils „stimmt“.

---

## Motion Preferences und Override (wichtig)
Ein Scrollytelling lebt davon, dass Bewegung und Fortschritt direkt an Scroll gekoppelt sind.  
Wenn Systeme oder Umgebungen automatisch `prefers-reduced-motion` aktivieren (z. B. Citrix oder bestimmte Remote-Setups), wird die Animation in vielen Projekten unbrauchbar oder inkonsistent.

**Unser Umgang damit:**
- Wenn `prefers-reduced-motion` aktiv ist, startet das Scrollytelling standardmaessig nicht automatisch.
- Fuer Faelle, in denen Reduced Motion systemseitig erzwungen wird (z. B. Citrix), kann das Scrollytelling bewusst per URL-Parameter trotzdem aktiviert werden.

**Override:**
- `/?motion` aktiviert die vollstaendige Animation trotz aktivem Reduced Motion.

Damit bleibt die Arbeit in Umgebungen, die Reduced Motion „von aussen“ setzen, trotzdem vorfuehr- und beurteilbar.

---

## GIFs und bewegte Elemente (warum diese, warum so sparsam)

### Schritte (Oberflaeche)
Die Schritte sind bewusst anonym und repetitiv. Sie stehen fuer Alltag, Tempo und das Vorbeiziehen von Zeit.  
Das GIF laeuft als Hintergrundbewegung, ohne die Szene zu dominieren.

### Zigarettenstummel (Ausloeser und Leitmotiv)
Der Stummel ist der erzählerische Trigger: etwas scheinbar Kleines kippt in die Tiefe und zieht den Blick mit.  
Er taucht als Bewegung (GIF) und als Praesenz (statisch) auf, um die Erzaehlung zusammenzuhalten.

### Graffiti (innere Begriffe)
Die Begriffe sind als Graffiti in die Umgebung integriert, nicht als „Overlay-Message“.  
Damit wirken sie wie Spuren im Raum und nicht wie eine separate Ebene, die aufgesetzt wirkt.

### Ratte (3 Zustände)
Die Ratte ist Leitmotiv und Begleiterin:
- **Ratte 1:** macht sichtbar, dass der Raum unten „lebt“ und reagiert.
- **Ratte 2:** vermittelt Bewegung durch den Kanal und reagiert auf Scrollrichtung.
- **Ratte 3:** markiert das Ende als ruhiger Zustand (Blick zum Licht).

---

## Technischer Kniff: Ratte 2 (Richtung + GIF-Restart)
Ratte 2 liegt als fixed Overlay ueber dem Kanal, damit sie wie eine Figur wirkt, die „mitgeht“, waehrend der Raum vorbeizieht.

Sie reagiert auf Scrollrichtung (Spiegelung/Seitenwechsel), damit sich Vorwaerts- und Rueckwaertsbewegung glaubwuerdig anfuehlen.  
Zusaetzlich wird das GIF periodisch neu gestartet (u. a. durch DOM-Ersatz und Cache-Busting), damit der Loop nicht unguenstig „aus dem Takt“ laeuft oder sichtbar festhaengt.

---

## Stolpersteine und Learnings (aus der Umsetzung)

### Timing und Rueckwaerts-Scroll
Das aufwaendigste war nicht „eine Animation bauen“, sondern das Timing so zu setzen, dass Vorwaerts und Rueckwaerts sauber funktionieren.  
Bei gescrubbten Abläufen fallen kleine Fehler sofort auf: Texte blitzen, Ueberblendungen wirken hektisch oder Zustände bleiben haengen.

**Was geholfen hat:**
- klare Beats definieren (wann ist ein Element wirklich „drin“ oder „draussen“)
- so wenig gleichzeitige Uebergänge wie moeglich
- kurze Blackouts nur dort, wo der Perspektivwechsel wirklich ein Schnitt-Ersatz sein soll

---

### Skizzen stimmen nicht automatisch im Scroll-Raum
Mehrere Ideen haben auf Papier funktioniert, aber nicht als Scrollbewegung.  
Ein Moment, der im Video einfach „2 Sekunden“ dauern darf, muss im Scrollen eine Strecke und ein Gefuehl bekommen. Das merkt man erst, wenn man es im Browser testet.

**Lerneffekt:**
- frueher prototypisieren (Rhythmus zuerst, Illustrationen danach finalisieren)
- lieber schneller mit Platzhaltern testen als spaet mit fertigen Assets umplanen

---

### Performance und visuelle Stabilitaet
Das Projekt hat viele Layer und grosse Assets. Schon kleine Stoerungen (Pop-in, Flackern) wirken im Scrollytelling ueberproportional stoerend.

**Was wir dafuer gemacht haben:**
- konsequentes Preloading wichtiger Assets
- Decode vor Start, damit Bilder nicht mitten im Scroll „nachziehen“
- Anti-Flicker-Settings fuer die relevanten Ebenen

---

### Typografie: Ausdruck vs. Lesbarkeit
Die Schriftwahl unten ist atmosphaerisch passend, aber nicht die komfortabelste.  
Wir haben bewusst getestet (auch mit aelteren Personen), ob die Texte trotzdem lesbar bleiben. Die Sprechblasen helfen dabei stark, weil sie Hintergrundkontrast und Fokus schaffen.

---

## Fazit
*Que trouvons-nous là-bas?* zeigt, dass Scrollen mehr sein kann als Navigation.

Durch die Kopplung von Scrollbewegung, Bild und Text entsteht eine ruhige, kontrollierte Erzaehlung, in der Nutzer:innen Tempo und Rhythmus selbst bestimmen.  
Die technische Umsetzung ist dabei kein Selbstzweck, sondern traegt die Metapher: Der Uebergang zwischen Oberflaeche und Tiefe wird nicht geschnitten, sondern erlebt.
