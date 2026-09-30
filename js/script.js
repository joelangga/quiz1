const menuButton = document.getElementById("profileMenuButton");
const closeButton = document.getElementById("profileCloseButton");
const drawer = document.getElementById("profileMobileDrawer");
const backdrop = document.getElementById("profileDrawerBackdrop");


function openProfileMenu() {

    drawer.classList.add("open");

    menuButton.classList.add("open");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.style.overflow = "hidden";
}


function closeProfileMenu() {

    drawer.classList.remove("open");

    menuButton.classList.remove("open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.style.overflow = "";
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        openProfileMenu
    );

}


if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeProfileMenu
    );

}


if (backdrop) {

    backdrop.addEventListener(
        "click",
        closeProfileMenu
    );

}