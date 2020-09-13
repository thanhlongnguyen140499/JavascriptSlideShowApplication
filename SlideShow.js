window.onload = function () {

    var listNode = document.getElementById("list-node");
    var linkS = listNode.getElementsByTagName("a");

    for (let item of linkS) {
        let img = new Image();
        img.src = item.href;
        var count = 0;
        var timer = setInterval(function () {
            ++count;
            document.getElementById("image-show").src = img.src;
            document.getElementById("image-caption").innerText = count;
        }, 2000);
    }
};