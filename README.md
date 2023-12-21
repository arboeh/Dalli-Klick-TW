# Dalli-Klick-TW
## (Dalli-Klick-Tailwind)
Ein schnell zusammen-gehacktes Dalli-Klick Spiel des legendären Quizmasters Hans Rosenthal, das im Browser spielbar ist.   
Allerdings __ohne__ Punktesystem.
Optimiert mit Tailwind CSS. Läuft in jedem Browser.

### Abhängigkeiten
- python3
- pip
- Web-Browser

### Installation
```
git clone https://github.com/arboeh/Dalli-Klick-TW
cd Dalli-Klick-TW
pip install -r requirements.txt
```

### Ausführen
Um das Dalli-Klick Spiel zu starten benötigt man ein Verzeichnis,
das die Bilder enthält, die erraten werden sollen.   
Zum Starten folgendes ausführen:
```
./main.py <VERZEICHNIS MIT BILDERN>
```
Danach ist das Spiel unter [http://127.0.0.1:5000](http://127.0.0.1:5000)
zu erreichen.

### Benutzen
![](./screenshots/scrot1.png)
![](./screenshots/scrot2.png)
![](./screenshots/scrot3.png)
![](./screenshots/scrot4.png)
Das Bild, das erraten werden muss befindet sich oben in dem schwarzen Kasten und ist mit bunten Quadraten überdeckt.
Darunter befinden sich drei Buttons.
Um nach und nach mehr vom Bild zu zeigen auf `Freilegen` drücken. Dies entfernt je ein farbiges Quadrat über dem Bild.   
Um alle Quadrate auf einmal zu entfernen auf `Lösen` drücken.    
Zum nächsten Bild kann man über den Button `Nächstes Bild` gelangen.

### Pläne
- Automatisierter Ablauf des "Freilegens" mit Pause-Funktion
- Hintergrundmelodie beim "Freilegen"

### Medien
Die hier abgebildeten, bzw. verwendeten Medien unterliegen der Creative Commons Lizenz (CC).
- "Hans-Rosenthal-Elf"
  - Link: https://commons.wikimedia.org/wiki/File:Gedenktafel_Waldschulallee_34_%28Westend%29_Hans_Rosenthal%E2%80%93Elf.jpg
  - User: OTFW (https://commons.wikimedia.org/wiki/User:OTFW)
  - Originaldatei: https://upload.wikimedia.org/wikipedia/commons/4/49/Gedenktafel_Waldschulallee_34_%28Westend%29_Hans_Rosenthal%E2%80%93Elf.jpg