# Entrega 5
## Instruccions exercici Nivell 3
### Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

Cal que creem el fitxer amb la funció que l'origina a l'exercici 1 amb el contingut que volguem amb:

`escriuFrase({missatge})`

El nom del fitxer ja vindrà determinat i per codificar-lo cridem la funció:

`file2HexAndb64('Entrega5_1.txt')`

Un cop s'hagin generat els dos fitxers, que tindran de nom Entrega5_1Hex.txt i Entrega_1b64.txt, els encriptarem usant la mateixa funció dues vegades, una per a cada fitxer. Haurem d'establir una contrasenya que cal recordar per a poder desencriptar els fitxers.

`encriptarFitxer('Entrega5_1b64.txt', contrasenya);`

`encriptarFitxer('Entrega5_1Hex.txt', contrasenya);`

Això haurà generat els fitxers encriptats, i haurà esborrat els fitxers codificats. Per desencriptar-los i descodificar-los, alhora, obtenint així el fitxer original, cridarem dues vegades (per a cada fitxer encriptat) la funció, usant naturalment la mateixa contrasenya que hem usat per encriptar:

`decipherDecode('Entrega5_1base64.enc', contrasenya);`

`decipherDecode('Entrega5_1hex.enc', contrasenya);`

Al final tindrem: El fitxer original de l'exercici 1, els dos fitxers encriptats (que no se m'ha demanat esborrar-los al procés), els dos fitxers finals que han de ser iguals al fitxer original.