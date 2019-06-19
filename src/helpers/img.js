function preLoadImg({ src, error, success }) {
    let img = new Image();
    img.src = src;
    img.onload = function() {
        success(src);
    }
    img.onerror = function() {
        error(src);
    }
}

export {
	preLoadImg
}