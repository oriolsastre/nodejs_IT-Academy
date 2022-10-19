# Entrega 5
## Instruccions exercici Nivell 3
### Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

Cal que creem el fitxer amb la funció que l'origina a l'exercici 1 amb el contingut que volguem amb:

`escriuFrase(` _{missatge}_ `)`

El nom del fitxer ja vindrà determinat i per codificar-lo cridem la funció:

`file2HexAndb64('Entrega5_1.txt')`

Un cop s'hagin generat els dos fitxers, que tindran de nom Entrega5_1Hex.txt i Entrega_1b64.txt, els encriptarem usant la mateixa funció dues vegades, una per a cada fitxer. Haurem d'establir una contrasenya que cal recordar per a poder desencriptar els fitxers.

`encriptarFitxer('Entrega5_1b64.txt', contrasenya);`

`encriptarFitxer('Entrega5_1Hex.txt', contrasenya);`