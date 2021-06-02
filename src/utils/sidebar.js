export const bukaSidebar = (nav, ul, topnav) => {
    nav.classList.add("melebar");
    Array.from(ul.children).forEach(li => {
        const a = li.children[0];
        if (a.classList.contains('submenu'))
            a.classList.add('pl-12');

        a.classList.remove('justify-center');

        a.children[1].classList.remove('hidden');
        topnav.children[1].classList.remove('hidden');
    });
};

export const tutupSidebar = (nav, ul, topnav) => {
    nav.classList.remove("melebar");

    Array.from(ul.children).forEach(li => {
        const a = li.children[0];
        a.children[1].classList.add('hidden');
        topnav.children[1].classList.add('hidden');


        if (a.classList.contains('submenu'))
            a.classList.remove('pl-12');

        topnav.classList.add('justify-center');
        a.classList.add('justify-center');
    });
}

export const closeSidebar = (hamburger, closeBtn) => {
    closeBtn.classList.add('hidden');
    hamburger.classList.remove('hidden');
    document.querySelector('nav').classList.remove('melebar');
}

export const openSidebar = (hamburger, closeBtn) => {
    hamburger.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    document.querySelector('nav').classList.add('melebar')
}