// spring shirt

var shirtImg = new Array();
shirtImg[0] = "IMG_4623.jpg";
shirtImg[1] = "IMG_4627.jpg";
shirtImg[2] = "IMG_4625.jpg";


getSpringShirt(shirtImg, "");

function getSpringShirt(imgAr, path) {
    path = path || 'clothes/top'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}