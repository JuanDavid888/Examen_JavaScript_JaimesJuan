class NavBar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerHTML = `
            
        `

        const container = document.createElement("div");
        container.classList.add("nav-container");

        const navContent = document.createElement('nav')
        navContent.classList.add('barrita')
        navContent.innerHTML = `
        <div class="nav1">
            <img src="../img/tareas.png" alt="tareas">
            <h2>BucaraEmprende</h2>
        </div>
        <div class="nav2">
            <button>Inicio</button>
            <button>Eventos</button>
            <button>Registrar evento</button>
        </div>
        `;
        container.appendChild(navContent)
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define("nav-bar", NavBar);
export { NavBar };