var css = 'img.wp-smiley, img.emoji { display: inline !important; border: none !important; box-shadow: none !important; height: 1em !important; width: 1em !important; margin: 0 .07em !important; vertical-align: -0.1em !important; background: none !important; padding: 0 !important; }.ht_plug_con.nt_mb_class { width: 100%; text-align: center; }video { z-index: 100; } .ht_plug_con.nt_mb_class [class*="wp-image-"],.ht_plug_con.nt_mb_class .ht_img, .ht_img_nt { height: auto; max-width: 100%; } ',
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
// This is required for IE8 and below.
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}

head.appendChild(style);



.ht_plug_con.nt_mb_class {
    width: 100%;
    text-align: center;
}


.ht_plug_con.nt_mb_class [class*="wp-image-"], .ht_plug_con.nt_mb_class .ht_img, .ht_img_nt {
    height: auto;
    max-width: 100%;
}