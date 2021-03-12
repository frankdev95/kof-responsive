if(document.readyState !== 'loading') {
    initCode();
} else {
    document.addEventListener('DOMContentLoaded', () => {
       initCode();
    });

}

function initCode() {
    // MEDIA QUERIES
    let mqTabPort = window.matchMedia("(min-width: 56.25em)");
    let mqPhone = window.matchMedia("(min-width: 37.5em)");

    // NAVIGATION
    let navigation = document.querySelector('.navigation');
    let navCheckbox = document.querySelector('.sub__checkbox');

    // MAIN CONTENT
    let background = document.querySelector('.background');
    let main = document.querySelector('.main');
    let mainContent = document.querySelector('main .main__content');
    let mainMediaContainer = document.querySelector('.main__media-container');
    let mainFresh = document.querySelector('.main__fresh');
    let mainCta = document.querySelector('.main__cta');

    let urlHeight = window.outerHeight - window.innerHeight;
    let screenHeight = screen.height - urlHeight;
    background.style.height = screenHeight + "px";
    main.style.height = screenHeight + "px";

    function mediaQueries() {
        if(mqPhone.matches) { // if greater than 600px
            mainCta.appendChild(mainFresh);
            navCheckbox.checked = false;
        } else {
            mainMediaContainer.insertBefore(mainFresh, document.querySelector('.main__navigation-btns'));
        }

        if(mqTabPort.matches) { // if greater than 900px
            mainContent.insertBefore(navigation, document.querySelector('.main__heading'));
        }
    }

    mediaQueries();
    mqTabPort.addEventListener('change', mediaQueries);
    mqPhone.addEventListener('change', mediaQueries);
}