# COURS UDEMY


## CSS :
Tout le css est traité en postCSS.

**Système BEM :**

Accronyme pour Block Element Modifier. Plutot que d'utiliser une feuille de style unique avec des designations en cascade *(ex: ul li a {blabla: bli;})*, on prefere donner de nombreuses classes aux elements avec des noms explicites qui peuvent ainsi être réutilisées dans tout le projet. (Système de *modificateurs* ou *modifiers* en anglais)
```
<h3 class="headline headline--centered headline--orange headline--small headline--narrow headline--light">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
```





**Organisation :**
- Tout est logé dans un dossier *styles* classique.

- À la racine de ce dossier, un fichier *styles.css* qui ne comprend que des imports des différentes feuilles de style (sans l'extension *.css* qui ne semble pas obligatoire).
```
@import "normalize.css";
@import "base/_global";
@import "base/_variables";
@import "modules/_btn";
```
- Un dossier base avec les styles de base dont les fichiers sont précédés d'un underscore. ```
_global.css
```

- Un dossier modules avec des styles qui peuvent être appliqués à plusieurs éléments. Les fichiers sont ici aussi précédés d'un underscore
