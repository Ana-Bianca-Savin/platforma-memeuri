Pentru realizarea siteului, am folosit:
    Pentru frontend: HTML, CSS, JavaScript, Bootstrap, React 
    Pentru backend: JavaScript (NodeJS, împreună cu Express), MongoDB, Mongoose, Postman,

Frontend

Pentru ca aveam aproape 0 experienta cand am inceput acest proiect, am folosit mai multe tutoriale. Unul dintre cele mai utile, care m-a invatat baza React-ului a fost https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&ab_channel=TheNetNinja care m-a ajutat sa fac setup-ul necesar. Apoi, pentru Bootstrap, am urmarit tutorialul https://www.youtube.com/watch?v=Jyvffr3aCp0&ab_channel=WebDevSimplified, care mi-a raspuns la majoritatea intrebarilor, invatand despre grid sistem.

Am creat folder-ul Assets, in care am pus toate png-urile, de care am avut nevoie.

La primul task, am reusit sa realizez un navbar care deschide modalele de lodgare si de creare cont, cand utilizatorul apasa pe butoanele corespunzatoare. Aici, am descoperit cat de folositoare sunt clasele din Bootstrap.

Am implementat in intregime task-ul al doilea, realizand landing page-ul. Aici, au aparut multe probleme cu spatierea, pe care am reusit sa le rezolv, dupa ce mentorul mi-a explicat diferenta dintre padding si margins. Landing page-ul este format din multe portiuni mai mici, pe care le-am implementat separat, pe rand: Description (partea ce contine descrierea site-ului), UploadMEME (partea ce contine chenarul mov si permite user-ului sa incarce un meme), MostViewedMEMES (partea la care trebuie sa aficam cele trei meme-uri) si footer-ul. In implementarea tuturor, m-am folosit de sistemul de grid pe care il pune la dispozitie Bootstrap-ul. O proprietate foarte folositoare a Bootstrap-ului, care m-a ajutat este flexboxul.  

Task-ul trei a reprezentat o adevarata provocare. Am incercat sa implementez totul asemenea casutei de upload a meme-urilor, care se afla pe landing page. Am avut probleme cu centrarea, dar dupa ce am folosit proprietatile corecte ale claselor din Bootstrap, am reusit sa rezolv problema.

In cadrul, task-ului patru, am reusit sa implementez doar butonul de Upload care duce utilizatorul la sectiunea din pagina unde poate sa incarce meme-uri, folosind un OnClick event.

Task-ul cinci a fost unul din task-urile mai usoare de implementat, odata ce am inteles cum sa folosesc liniile si coloanele din Bootstrap, footer-ul reprezentand o sectiune a landing page-ului.

Pentru task-ul sase, am incercat sa fac site-ul sa fie cat mai responsive la fiecare pas. In acest sens, am folosit clasele din Bootstrap care, de multe ori, se ocupa automat de responsiveness. De asemenea, am adaugat margini si padding in mai multe locuri pentru a face site-ul sa fie cat mai responsive.



Backend

Nu aveam absolut niciun fel de experienta legata de backend cand am inceput proba. Chiar daca exista mult mai putine lucruri care pot merge gresit aici, decat la frontend, inceputul a fost mai greu. Dupa cateva tutoriale si explicatii, am reusit sa inteleg ce trebuie sa fac practic.

Pentru organizare, am creat folder-ul models ce va contine schemele necesare si folder-ul routes ce va contine endpoint-urile din rutele MEMES si Users. De asemenea am folosit dorenv, pentru a putea crea environment variabels pentru usurinta codului.

Pentru primul task, am creat doua file-uri in folderul models. Acestea contin schema unui user, respectiv, a unui meme, specifinad tipul de date al fiecarui field.

Pentru a crea REST API-ul de la task-ul al doilea, mai intai, mentorul ne-a explicat ce este un REST API. Dupa ce am inteles despre ce trebuie sa fac, am urmat tutorialul https://www.youtube.com/watch?v=fgTGADljAeg&ab_channel=WebDevSimplified, care a facut ca totul sa devina mult mai simplu decat era inainte. Mentorul este cel care mi-a explicat cum fac legatura intre MongoDB, Postman si codul meu, cand nu reuseam sa fac acest lucru. In file-ul MEMES.js in care am scris API-ul, pe langa structura clasica a unui API, am si o functie care sa gaseasca meme-l cautat de user dupa id. Am folosit acest lucrcu, pentru a ma ocupa de eventualele erori care pot aparea atunci cand un user incearca sa caute un meme, intr-un mod mai elegant, decat a rescrie codul pentru fiecare endpoint care are nevoie de id.

Pentru sistemul de authentification de la task-ul trei, am definit doua endpoint-uri: unul de register si unul de login. Pentru register, am folosit bcrypt pentru a retine hashed passwords in baza de date.  Pentru login, compar parola data cu cea din baza de date folosind functia compara a bcrypt-ului. In cazul in care un utilizator se logheaza cu succes, este generat un token JWT.

Pentru input verification-ul de la task-ul al patrulea, am folosit Joi. Astfel, in folder-ul models, am creat doua alte fisiere, ce contin schema joi pentru user, respectiv pentru meme. Astfel am modificat endpoint-ul de register de la task-ul anterior si endpoint-urile cu ajotorur carora se posteaza si updateaza meme-uri de la task-ul doi, pentru a returna erorile corespunzatoare.