
const right_buttons = document.getElementsByClassName('right-buttons')[0];
const language_toggle = `
<button id="language-toggle" class="icon-button" type="button"
        title="Change language" aria-label="Change language"
        aria-haspopup="true" aria-expanded="false"
        aria-controls="language-list">
    <span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg></span>
</button>
<ul id="language-list" class="theme-popup" aria-label="Languages" role="menu">
  <li role="none"><button role="menuitem" class="theme">
      <a id="en">English</a>
  </button></li>
  
  <li role="none"><button role="menuitem" class="theme">
      <a id="ja">日本語</a>
  </button></li>
  
  <li role="none"><button role="menuitem" class="theme">
      <a id="ko">한국어</a>
  </button></li>
  
</ul>
`;
right_buttons.insertAdjacentHTML('afterbegin', language_toggle);

let langToggle = document.getElementById("language-toggle");
let langList = document.getElementById("language-list");
langToggle.addEventListener("click", (event) => {
    langList.style.display = langList.style.display == "block" ? "none" : "block";
});
let lang = document.documentElement.lang;
let selectedLang = document.getElementById(lang);
if (selectedLang) {
    selectedLang.parentNode.classList.add("theme-selected");
}

// The path to the root, taking the current
// language into account.
var full_path_to_root;
if (lang == "en") {
    full_path_to_root = `${path_to_root}`;
} else {
    full_path_to_root = `${path_to_root}../`;
}
let components = (path_to_root.match(/\//g) ?? []).length + 1;
let path = window.location.pathname.split('/').slice(-components).join('/');
for (let lang of langList.querySelectorAll("a")) {
    if (lang.id == "en") {
        lang.href = `${full_path_to_root}${path}`;
    } else {
        lang.href = `${full_path_to_root}${lang.id}/${path}`;
    }
}
