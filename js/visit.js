function registerVisit(pageId) {
    $.ajax({
        type: "POST",
        url: "php/visit.php",
        data: {
            pageid: pageId
        }
    });
}