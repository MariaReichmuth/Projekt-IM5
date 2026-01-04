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
*Que trouvons-nous là-bas?* ist ein interaktives Scrollytelling, das sich mit inneren Konflikten und verdraengten Gefuehlen des Menschen auseinandersetzt. Ausgangspunkt ist eine urbane Metapher: der Gullideckel als Grenze zwischen Oberflaeche und Untergrund, zwischen dem Sichtbaren und dem, was darunter liegt.

Durch eine scrollbasierte Interaktion wird der Blick schrittweise von einer belebten Stadtoberflaeche in einen dunklen, inneren Raum gefuehrt. Illustration, Animation, Typografie und Scrollbewegung greifen dabei ineinander und formen eine lineare, ruhige Erzaehlung. Ziel ist es nicht, das Thema Verdrängung zu erklaeren, sondern es über Bewegung, Raum und Zeit erfahrbar zu machen.

---

## Projektidee und konzeptueller Ansatz
Im Zentrum des Projekts steht die Frage, was sich unter der Oberflaeche befindet – nicht nur im physischen, sondern auch im inneren Sinn. Der Gullideckel fungiert dabei als visuelles Leitmotiv und als erzählerische Schwelle. Er trennt oben und unten, Aussen und Innen, Alltag und Inneres.

Das Scrollen übernimmt in dieser Arbeit nicht nur die Navigation, sondern wird selbst zum erzählerischen Mittel. Je weiter gescrollt wird, desto tiefer bewegt sich der Blick in die Geschichte hinein. Der spaetere Richtungswechsel von einer vertikalen in eine horizontale Bewegung erweitert diesen Abstieg zu einem inneren Weg durch einen Raum.

---

## Formatentscheidung: Vom Animationsfilm zum Scrollytelling
Zu Beginn war das Projekt als klassischer Animationsfilm konzipiert. Im Verlauf der inhaltlichen Auseinandersetzung zeigte sich jedoch, dass die Metapher des Abtauchens, des langsamen Übergangs und der inneren Bewegung durch eine interaktive Form wesentlich staerker getragen wird.

Im Fach *Visualisieren* fiel deshalb die bewusste Entscheidung, von einem linearen Animationsfilm zu einer Scrollytelling-Website zu wechseln. Der Abstieg entlang einer vertikalen Scrollbewegung und der spaetere horizontale Weg durch den Kanal liessen sich so nicht nur darstellen, sondern aktiv erleben. Nutzer:innen bestimmen Tempo und Rhythmus selbst, wodurch der innere Prozess nicht konsumiert, sondern durchlaufen wird.

---

## Projektstruktur
Das Projekt ist bewusst uebersichtlich und modular aufgebaut. Die Website besteht aus einer statischen HTML-Struktur, einem zentralen Stylesheet, einem JavaScript-File sowie einem separaten Ordner für alle visuellen Assets. Illustrationen, PNGs und GIFs sind im Ordner `sketch/` gebuendelt und werden ausschliesslich über relative Pfade eingebunden. Diese klare Trennung erleichterte sowohl die Entwicklung als auch spaetere Anpassungen.

---

## Hilfsmittel und Arbeitsweise

### Gestalterische Werkzeuge
Die visuellen Assets wurden überwiegend selbst erstellt und bewusst auf das Scrollytelling hin gedacht.

Illustrationen und Bildlayer entstanden in Procreate. Bereits beim Zeichnen wurde darauf geachtet, dass Elemente sauber getrennt, skalierbar und übereinanderlegbar sind. Viele Motive wurden nicht als abgeschlossene Bilder, sondern als Ebenen konzipiert, die spaeter technisch animiert oder ueberblendet werden konnten.

Die animierten GIFs, etwa die Schritte an der Oberflaeche, der fallende Zigarettenstummel, das Graffiti oder die verschiedenen Rattenzustände, wurden in Adobe Photoshop umgesetzt. Die Animationen sind bewusst kurz gehalten und ruhig geloopt, damit sie sich harmonisch in den Scrollfluss einfügen und nicht vom eigentlichen Erzaehlrhythmus ablenken.

Erste Ideen zu Bildaufbau, Raum und Dramaturgie entstanden in Form von Handskizzen. Diese dienten weniger als exakte Bauplaene, sondern als Denkwerkzeug, um Blickfuehrung, Abfolgen und Uebergaenge zu erproben. Auf ein klassisches Wireframe-Tool wurde verzichtet, da viele Entscheidungen zu Timing und Raumgefühl erst direkt im Browser sinnvoll beurteilt werden konnten.

---

### Programmier-Hilfsmittel
Die Website ist bewusst statisch mit HTML, CSS und JavaScript umgesetzt. Der Verzicht auf Frameworks ermoeglichte volle Kontrolle über DOM-Struktur, Layering und Performance, was für ein komplexes Scrollytelling entscheidend war.

Zentrales Werkzeug für Animationen ist die GreenSock Animation Platform (GSAP), ergaenzt durch das Plugin ScrollTrigger. Diese Kombination erlaubt es, visuelle Veraenderungen direkt an die Scrollposition zu koppeln, Abschnitte zu pinnen und Animationen in beide Scrollrichtungen kontrolliert ablaufen zu lassen.

ChatGPT (Version 5.1 und 5.2) wurde begleitend als technischer Sparringspartner eingesetzt. Unterstuetzt hat es insbesondere bei der Strukturierung komplexer Timelines, beim Debugging von Timing- und Scrollproblemen, bei Performance-Optimierungen sowie bei der Entwicklung robuster Sonderloesungen wie dem GIF-Restart oder dem Motion-Override. Die inhaltlichen Entscheidungen, die Dramaturgie und die visuelle Logik stammen dabei stets aus dem Projektteam.

---

## Technische Umsetzung – detailliert

### Grundarchitektur
Das Scrollytelling ist in zwei klar getrennte Hauptkapitel gegliedert: einen vertikalen Einstieg (Hero) und eine Sequenz aus Tunnel und horizontalem Kanal. Beide Kapitel besitzen eigene ScrollTrigger-Logiken, sind jedoch visuell und inhaltlich miteinander verbunden.

Diese Trennung ermoeglichte eine bessere Kontrolle über die jeweiligen Timelines, ein gezieltes Refresh-Verhalten bei Resize-Ereignissen sowie eine saubere Handhabung von Reverse-Scroll.

---

## Kapitel 1 – Vertikales Scrollytelling (Hero)
Der erste Abschnitt ist als fixierter, sogenannter pinned Bereich umgesetzt. Waerend der sichtbare Bildausschnitt stehen bleibt, steuert die Scrollbewegung den Fortschritt innerhalb einer GSAP-Timeline. Die Scroll-Laenge wird dabei kuenstlich verlaengert, um eine ruhige und kontrollierte Annäherung zu ermoeglichen.

Der Hero besteht aus zahlreichen exakt uebereinanderliegenden Ebenen: Strassenoberflaeche, Gullideckel-Detail, Kanalisation, Leiter, Muellhaufen, saisonale Filter, Partikeleffekte, GIF-Overlays, Textebenen sowie Blackout-Layer. Alle Ebenen verbleiben permanent im DOM und werden ausschliesslich über Transparenz, Skalierung und Position gesteuert. Es werden keine Elemente dynamisch ein- oder ausgehaengt, um Layout-Spruenge zu vermeiden.

Die Jahreszeiten wechseln zyklisch und unabhaengig vom Scrollen. Waerend sich Zeit sichtbar veraendert, bleibt der Gullideckel selbst unveraendert. Dieser Kontrast zwischen Bewegung und Stillstand verstaerkt seine Rolle als Schwelle.

Texte erscheinen punktuell als Gedankenfragmente. Sie sind zeitlich exakt auf die Scrollposition abgestimmt und verschwinden wieder bewusst, um dem Bildraum Platz zu lassen. Der Zigarettenstummel fungiert als visuelles Leitmotiv, das den Abstieg begleitet und schliesslich auf dem Muellhaufen landet.

---

## Kapitel 2 – Tunnel und horizontaler Kanal
Nach dem Abstieg veraendert sich die Bewegungslogik grundlegend. Obwohl weiterhin vertikal gescrollt wird, bewegt sich der Raum horizontal. Technisch wird dies durch einen breiten Track mit mehreren nebeneinanderliegenden Slides umgesetzt, der seitlich verschoben wird.

Die Tunnelphase dient als Uebergang zwischen den beiden Bewegungslogiken. Kurze Lichtwechsel, das Einblenden von Graffiti und eine bewusste Reduktion von Text markieren den Wechsel vom Abstieg zu einem inneren Weg.

Der Kanal selbst besteht aus mehreren leicht versetzten Ausschnitten derselben Umgebung. Texte erscheinen nacheinander als gedankliche Stationen. Zwischen ihnen entstehen bewusst ruhige Pausen, die dem Raum Zeit geben, zu wirken.

---

## Die Ratte als globales Overlay
Die Ratte ist keine Hintergrundfigur, sondern eine eigenstaendige Beobachterin. Sie liegt als fixiertes Overlay über der gesamten Szene und entzieht sich damit der normalen Raumlogik.

Sie erscheint in drei klar getrennten Zustaenden: als Ankunft in der Tiefe, als bewegte Begleiterin im Kanal und schliesslich als ruhige Figur, die zum Licht blickt. Um eine saubere Bewegung sicherzustellen, wird das zentrale Ratten-GIF regelmaessig neu gestartet. Dies geschieht über einen gezielten DOM-Ersatz des Bildelements in Kombination mit Cache-Busting, wodurch die Animation auch bei Richtungswechseln stabil bleibt.

---

## Performance, Preload und Stabilität
Aufgrund der hohen Anzahl übereinanderliegender Ebenen war Performance ein zentrales Thema. Wichtige Assets werden bereits im HTML-Head vorgeladen und vor Initialisierung der Animationen decodiert. Dadurch werden Pop-ins und spaetes Nachladen vermieden.

Zusaetzlich kommen Anti-Flicker-Massnahmen zum Einsatz. Es werden ausschliesslich GPU-freundliche Animationen verwendet, klassische Problemstellen wie Layout-Reflows werden vermieden. Diese Massnahmen sind fuer Nutzer:innen kaum sichtbar, tragen aber wesentlich zur ruhigen Wirkung des Scrollytellings bei.

---

## Motion Preferences und bewusster Override
Ein Scrollytelling ist grundsaetzlich bewegungsbasiert. In Umgebungen, in denen `prefers-reduced-motion` automatisch aktiv ist, etwa in Citrix-Systemen, kann das Erlebnis stark eingeschraenkt oder unbrauchbar werden.

Deshalb wurde bewusst eine Override-Logik umgesetzt. Bei aktivem Reduced Motion startet das Scrollytelling standardmaessig nicht automatisch. Ueber den URL-Parameter `/?motion` kann die vollstaendige, animierte Version jedoch bewusst aktiviert werden. So bleibt die Arbeit auch in restriktiven Systemumgebungen erlebbar.

---

## Learnings
Im Verlauf des Projekts zeigte sich, dass scrollbasierte Dramaturgie ein hohes Mass an Praezision erfordert. Timing muss nicht nur vorwaerts, sondern auch beim Rueckwaertsscrollen funktionieren. Viele Ideen, die auf Papier schluessig wirkten, entfalteten ihre Wirkung erst – oder scheiterten – im realen Scroll-Kontext.

Performance erwies sich nicht als Nebenaspekt, sondern als Voraussetzung für Immersion. Bereits kleine visuelle Stoerungen wirken im Scrollytelling stark.

Die Entscheidung für das Scrollytelling-Format erwies sich als zentral. Erst durch den Wechsel vom Animationsfilm zur interaktiven Website konnten Abstieg, Richtungswechsel und innere Bewegung in dieser Form erzählerisch umgesetzt werden.

---

## Fazit
Die technische Umsetzung von *Que trouvons-nous là-bas?* ist kein Selbstzweck, sondern traegt die Erzaehlung.

Scrollbewegung, Layering und Richtungswechsel formen gemeinsam einen Raum, der nicht geschnitten, sondern durchlaufen wird. Der Weg nach unten ist keine Szene – er ist eine Bewegung.
