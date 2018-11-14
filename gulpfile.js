const Gulp = require("gulp");
const BrowserSync = require("browser-sync").create();
const Sass = require("gulp-sass");
const Delete = require("del");
const Css = require("gulp-clean-css");
const PostCss = require("gulp-postcss");
const Autoprefixer = require("autoprefixer");
const DeleteDuplicateCss = require("postcss-discard-duplicates");
const Run = require("run-sequence");
const HtmlMinify = require("gulp-htmlmin");
const Image = require("gulp-imagemin");

/*
* TODO: Crée un fichier css en utilisant SASS sur le fichier ./src/sass/main.scss
*/
Gulp.task("createCss", () => {
    return Gulp.src("./src/sass/main.scss")
        .pipe(Sass())
        .pipe(Gulp.dest("src/"))
        .pipe(BrowserSync.reload({ stream: true }));
});

/*
* TODO: Exécute des instructions(second paramétre) à chaque fois que le fichier nommé dans watch est modifié.
* @param [liste de tâches à exécuter avant que la tâche default soit lancée]
*/
Gulp.task("default", ["liveBrowser", "createCss"], () => {
    Gulp.watch("./src/**/*.html", BrowserSync.reload);
    Gulp.watch("./src/**/*.scss", ["createCss"]);
    Gulp.watch("./src/**/*.js", BrowserSync.reload);
});

/*
* TODO: Supprime le fichier dist/
*/
Gulp.task("deleteFolder", () => {
    return Delete.sync("docs");
});

/*
* TODO:  Utilise Autoprefixer et postcss-discard-duplicates pour formater le CSS
*/
Gulp.task("formateCss", () => {
    return Gulp.src("./src/main.css")
        .pipe(PostCss([Autoprefixer, DeleteDuplicateCss]))
        .pipe(Gulp.dest("docs/"));
});

/*
* TODO: Build and minifie les images perso/
*/
Gulp.task("minifyImgPerso", () => {
    return Gulp.src("./src/img/projects/perso/*.png")
        .pipe(Image())
        .pipe(Gulp.dest("dist/img/projects/perso"));
});

/*
* TODO: build and minifie les images pro/
*/
Gulp.task("minifyImgPro", () => {
    return Gulp.src("./src/img/projects/pro/*.png")
        .pipe(Image())
        .pipe(Gulp.dest("dist/img/projects/pro"))
});

/*
* TODO: build and minify the index.html file
*/
Gulp.task("minifyIndexFile", () => {
    return Gulp.src("./src/index.html")
        .pipe(HtmlMinify())
        .pipe(Gulp.dest("docs/"));
});

/*
* TODO: Build and minifie les fichiers HTML présents dans le dossier pages/
*/
Gulp.task("minifyOtherHtmlFile", () => {
    return Gulp.src("./src/pages/*.html")
        .pipe(HtmlMinify())
        .pipe(Gulp.dest("docs/pages/"));
});

/*
* TODO: Lance un serveur qui rafraichit automatiquement les pages.
*/
Gulp.task("liveBrowser", () => {
    BrowserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

/*
* TODO: Minifie le fichier CSS et l'ajoute dans le fichier dist/
*/
Gulp.task("minifyCss", () => {
    return Gulp.src("./src/main.css")
        .pipe(Css())
        .pipe(Gulp.dest("docs/"));
});

/*
* TODO: Ensemble de tâches executés l'une à la suite de l'autre
*/
Gulp.task("build", callback => {
    return Run("deleteFolder", "minifyIndexFile", "minifyOtherHtmlFile", "minifyImgPerso", "minifyImgPro", "formateCss", "minifyCss", callback);
});