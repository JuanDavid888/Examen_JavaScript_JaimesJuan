class NavBar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerHTML = `
            .nav-container {
                width: 100%;
                padding: 1rem 0;
            }

            .barrita {
                display: flex;
                flex-direction: row;
                width: 100%;
            }

            .barrita .nav1 {
                display: flex;
                flex-direction: row;
                width: 30%;
            }
            .nav1 img{
                width: 13%;
                object-fit: contain;
            }

            .nav1 h2 {
                font-size: 115%;
                margin-left: 3%
            }

            .barrita .nav2 {
                display: flex;
                width: 70%;
                justify-content: end;
                gap: 5%;
            }
            
            .nav2 button {
                margin-top: 1.5%;
                height: 2rem;
                border: none;
                cursor: pointer;
            }
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