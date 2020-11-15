const hamburger = document.querySelector(".nav-icon")
const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
})
        
        
        
        
        
        
        
        
        /*hamburger.addEventListener("click", async () => {
            if (nav.style.display == "flex") {
                nav.style.setProperty("animation", "fadeOutRight 400ms", "important");
                await new Promise((resolve) => {
                    setTimeout(() => {
                        nav.style.setProperty("display", "none", "important");
                        nav.style.removeProperty("animation");
                        resolve();
                    }, 200);
                });
                return 0;                             
            } else {
                nav.style.setProperty("display", "flex", "important");
                nav.style.setProperty("animation", "fadeInRight 400ms", "important");
                await new Promise((resolve) => {
                    setTimeout(() => {
                        nav.style.removeProperty("animation");
                        resolve();
                    }, 400);
                });
                return 0;
            };
        });*/