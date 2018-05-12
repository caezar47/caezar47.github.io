var btn_site = $('.card__item.is--site[href="#"]');
var btn_github = $('.card__item.is--github[href="#"]');
btn_site.removeAttr("target");
btn_site.on("click", function () {
    alert("Извините сайт снят с размещения");
})
btn_github.removeAttr("target");
btn_github.on("click", function () {
    alert("Извините проекта не размещен на github");
})
 