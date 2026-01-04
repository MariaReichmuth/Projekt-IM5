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
*Que trouvons-nous là-bas?* ist ein interaktives Scrollytelling, in dem das Scrollen selbst zur erzählerischen Bewegung wird.  
Durch Zooms, Ueberblendungen, Perspektivwechsel und einen bewussten Richtungswechsel von vertikal zu horizontal wird der Blick von einer urbanen Oberflaeche in einen inneren, dunklen Raum gefuehrt.

Der Gullideckel dient dabei als zentrales Bildmotiv und als Grenze zwischen Aussen und Innen, zwischen Sichtbarem und Verdraengtem.

---

## Projektstruktur

Projekt-IM5/  
├─ index.html  
├─ style.css  
├─ script.js  
├─ README.md  
└─ sketch/  
&nbsp;&nbsp;&nbsp;├─ SVG-Illustrationen und Layer  
&nbsp;&nbsp;&nbsp;├─ PNG-Assets  
&nbsp;&nbsp;&nbsp;└─ GIFs (Bewegung, Leitmotive)  

Alle visuellen Assets sind im Ordner `sketch/` gesammelt und werden ueber relative Pfade eingebunden.

---

## Konzeptueller Fokus
Der Fokus des Projekts liegt auf der Verbindung von Inhalt, Interaktion und technischer Umsetzung.  
Scrollen wird nicht als reine Navigation verstanden, sondern als aktiver Teil der Erzaehlung.

Im Zentrum stehen:
- eine ruhige, kontrollierte Scroll-Interaktion statt automatischer Animation
- fliessende Uebergaenge ohne harte Schnitte
- der bewusste Einsatz von Stillstand und Bewegung
- eine klare Trennung und zugleich Verbindung von „oben“ und „unten“

---

## Dramaturgie und Interaktion

### Kapitel 1: Vertikaler Einstieg
Der erste Abschnitt ist als fixierter (pinned) Bereich umgesetzt.  
Waerend der Bildausschnitt stehen bleibt, veraendert sich der Inhalt durch Scrollbewegung.

Der Einstieg zeigt eine Strassenoberflaeche mit einem Gullideckel im Zentrum. Waerend gescrollt wird, wechseln sichtbar die Jahreszeiten. Zeit vergeht, Bewegung findet statt – der Gullideckel selbst bleibt jedoch unveraendert. Dieser Kontrast bildet den Ausgangspunkt der Erzaehlung.

Mit weiterem Scrollen verlagert sich der Fokus langsam auf den Gullideckel. Ein Zigarettenstummel faellt hinein und markiert den Uebergang von der aeusseren zur inneren Ebene. Der Blick kippt nach unten, die Szene wechselt in die Tiefe der Kanalisation.

Der Abstieg erfolgt entlang einer Leiter. Texte erscheinen und verschwinden in ruhigen Abstaenden und begleiten die Bewegung. Kurze Schwarzblenden ersetzen klassische Schnitte und unterstuetzen den Perspektivwechsel.

<p align="center">
  <img src="sketch/schritte.gif" width="60%">
</p>

---

### Kapitel 2: Richtungswechsel und horizontaler Raum
Nach dem Abstieg veraendert sich die Bewegungslogik.  
Obwohl weiterhin vertikal gescrollt wird, bewegt sich der Raum horizontal.

Der Kanal ist als durchgehender Raum aufgebaut, der in mehrere nebeneinanderliegende Abschnitte unterteilt ist. Beim Scrollen verschiebt sich dieser Raum seitlich, wodurch das Gefuehl entsteht, sich durch den Kanal zu bewegen.

Texte erscheinen nacheinander als gedankliche Stationen. Eine Ratte begleitet den Weg als wiederkehrendes Motiv und reagiert auf die Scrollrichtung. Am Ende verlangsamt sich die Bewegung, der Raum kommt zur Ruhe, und der Blick richtet sich nach oben zum Licht.

<p align="center">
  <img src="sketch/graffiti.gif" width="70%">
</p>

---

## Technische Umsetzung

### Grundlagen
Die Website ist statisch mit HTML, CSS und JavaScript umgesetzt.  
Fuer Animationen und Scrollsteuerung wurde GSAP in Kombination mit ScrollTrigger eingesetzt.

Diese Kombination erlaubt es, visuelle Veraenderungen direkt an die Scrollposition zu koppeln und so eine lineare, kontrollierte Erzaehlung zu entwickeln.

Illustrationen und GIFs wurden mit Procreate und Adobe Photoshop erstellt.  
Die Programmierung erfolgte mit punktueller Unterstuetzung durch ChatGPT.

---

## Aufbau und technische Logik

### Arbeiten mit Layern
Anstelle klassischer Szenenwechsel arbeitet das Projekt mit uebereinanderliegenden Ebenen.  
Illustrationen, GIFs und Texte liegen exakt uebereinander und werden ueber Transparenz, Skalierung und Position gesteuert.

Dadurch entstehen fliessende Uebergaenge, ohne dass neue Seiten oder Szenen geladen werden muessen.  
Diese Arbeitsweise erwies sich als besonders geeignet, um innere Zustaende nicht abrupt, sondern allmaehlich sichtbar zu machen.

<p align="center">
  <img src="sketch/kanalisation1.svg" width="70%">
</p>

---

### Scroll als Erzaehlwerkzeug
Alle zentralen Animationen sind direkt an die Scrollbewegung gekoppelt.  
Je weiter gescrollt wird, desto tiefer bewegt sich der Blick in die Geschichte hinein.

Der Vorteil dieser Methode liegt darin, dass Nutzer:innen Tempo und Rhythmus selbst bestimmen koennen. Gleichzeitig bleibt die Erzaehlung klar strukturiert, da der Ablauf technisch definiert ist.

---

## Performance und Stabilitaet
Da viele visuelle Ebenen gleichzeitig im Einsatz sind, war Performance ein zentrales Thema.

Um visuelle Stoerungen zu vermeiden:
- werden wichtige Bilder vorab geladen
- werden Ebenen so vorbereitet, dass sie waehrend der Animationen nicht neu berechnet werden muessen
- kommen ausschliesslich GPU-freundliche Animationen zum Einsatz

Diese Massnahmen sind fuer Nutzer:innen kaum sichtbar, tragen jedoch wesentlich zu einer ruhigen und stabilen Darstellung bei.

---

## Responsiveness
Das Scrollytelling ist fuer verschiedene Bildschirmgroessen ausgelegt.

Mobile und Desktop unterscheiden sich nicht nur in der Groesse, sondern auch in der Komposition:
- Zoom-Punkte und Transformationsurspruenge sind angepasst
- Texte und Sprechblasen erhalten unterschiedliche Abstaende
- einzelne Motive (z. B. die Ratte) werden auf Mobile anders positioniert, um den Bildraum sinnvoll zu nutzen

Ziel war es, auf allen Geraeten dieselbe Geschichte zu erzaehlen, ohne sie einfach nur zu verkleinern.

---

## Reduced Motion
Nutzer:innen, die reduzierte Bewegung bevorzugen, erhalten eine vereinfachte Darstellung.

In diesem Modus:
- werden gescrubbte Animationen uebersprungen
- werden finale Zustände direkt angezeigt
- bleibt der inhaltliche Zusammenhang erhalten, ohne uebermaessige Bewegung

---

## Animierte Elemente als Bedeutungstraeger

Bewegte Elemente werden gezielt und sparsam eingesetzt.

- **Schritte:** stehen fuer Alltagsbewegung und Anonymitaet an der Oberflaeche  
- **Zigarettenstummel:** fungiert als Ausloeser der Geschichte und als Leitmotiv  
- **Graffiti:** macht unterdrueckte Gedanken und Gefuehle sichtbar  
- **Ratten:** begleiten die Erzaehlung als stille Beobachterinnen und Symbolfiguren  

Die Ratte erscheint in drei Zuständen: Ankommen, Bewegung und Ruhe.  
Sie ist weniger Tier als vielmehr Zeugin dessen, was im Verborgenen existiert.

---

## Herausforderungen und Learnings

Ein zentrales Problem war das Timing.  
Bei scrollgesteuerten Animationen muessen nicht nur Vorwaertsbewegungen stimmen, sondern auch das Verhalten beim Rueckwaertsscrollen. Kleine Ungenauigkeiten wirken hier sofort stoerend.

Zudem zeigte sich, dass viele Ideen auf Papier schluessig wirkten, im gescrubbten Scroll-Kontext jedoch nicht funktionierten. Erst im Browser wurde sichtbar, wie sich Zeit, Bewegung und Raum tatsaechlich anfuellen.

Auch Performance stellte eine Herausforderung dar. Schon minimale visuelle Artefakte koennen die Immersion stark beeintraechtigen. Preloading und saubere Layer-Strukturen erwiesen sich deshalb als essenziell.

Gestalterisch erforderte die Typografie eine bewusste Abwaegung zwischen Ausdruck und Lesbarkeit. Besonders im unteren, dunklen Bereich wurde eine Schrift eingesetzt, die atmosphaerisch stark ist, aber bewusst getestet werden musste.

---

## Fazit
*Que trouvons-nous là-bas?* zeigt, dass Scrollen mehr sein kann als Navigation.

Durch die enge Verknuepfung von Scrollbewegung, Bild und Text entsteht eine ruhige, dichte Erzaehlung, in der Technik nicht als Effekt, sondern als tragendes Mittel fungiert.  
Der Uebergang zwischen Oberflaeche und Tiefe wird nicht geschnitten, sondern Schritt fuer Schritt erlebt.
