# React Masterclass Progetto Finale 

### Requisiti Progetto
Per questo progetto, utilizzerai tutto ciò che hai imparato in questo corso per creare una SPA React che:
* Ha almeno 4 pagine
* Si integra con una web API esterna
* Effettua richieste API in risposta alle interazioni dell'utente
* Condivide i dati all'interno dell'applicazione utilizzando l'API Context o ogni altra Global state management libraries a scelta
* Utilizza una soluzione di styling o una libreria di componenti a scelta
* Utilizza un Backend as a Service (BaaS) per autenticare utenti e salvare dati per gli utenti. 
* Viene distribuito sul Web

### Nome Progetto
* AulabGamerHub

### Descrizione Progetto 
* Piattaforma che mostra videogiochi, e da la possibilitá ai suoi utenti autenticati di comunicare tra di loro, scegliere i giochi migliori/preferiti e lasciare reviews su quelli più usati. 

### Features Progetto 
* API
  * 'https://api.rawg.io/api/docs'
* Pages
  * Home Page - Lista dei giochi disponibili e ricerca tra i giochi
  * Filter Page - Lista dei giochi secondo un filtro specifico 
  * Single Game Page - Mostra dettagli sullo specifico gioco, se autenticato utente puó selezionarlo tra i preferiti e puo lasciare un commento sul gioco. 
  * Login Page - Possibilitá di autenticazione ( email, OAuth ( discord ) )
  * Register Page - Possibilitá di registrare Utente con Email
  * Account Page - Dettaglio profilo Utente, Lista giochi preferiti 
  * Settings Page - Aggiornamento profilo Utente
* API + User Interaction
  * [x] Utenti possono cercare un gioco con una query
  * [x] Utenti possono cliccare su un gioco per vederne il dettaglio e eventuali reviews 
  * [x] Utenti possono filtrare su un gioco basandosi su un parametro
  * Utenti loggati possono lasciare una review su un gioco specifico
  * Utenti loggati creare una lista di giochi preferiti 
  * Utenti loggati possono rimuovere un gioco dai preferiti
  * Uteni loggati possono chattare live su un gioco specifico
* Context API / Global state management library
  * Utenti loggati possono condividere dati all'interno dell'applicazione
