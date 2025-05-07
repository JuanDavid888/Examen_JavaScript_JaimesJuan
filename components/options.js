class optionsCards extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                width: 80%;
                margin-left: 10%;
                margin-bottom: 5%;
            }
            .container-info {
                width: 80%;
                margin-left: 10%;
                margin-bottom: 3%;
                text-align: center;
            }
            .container-cards {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
                gap: 1.5rem;
                padding: 2rem;
                justify-content: center;
            }
            .card {
                display: flex;
                flex-direction: column;
                text-align: center;
                padding: 0.5rem 0.5rem;
                border: 2px solid rgb(212, 211, 211);
                cursor: pointer;
            }
            .card:hover {
                transform: scale(1.03);
            }
            .card img {
                width: 35%;
                margin-left: 33%;
                margin-bottom: 10%;
            }
        `;
        const container = document.createElement("div");
        container.classList.add("container");

        const cards = document.createElement('div')
        cards.classList.add('Cards')
        cards.innerHTML = `
        <div class="container-info">
            <h2>Características principales</h2>
            <p>Nuestra plataforma está diseñada para facilitar la gestión y promoción de eventos de emprendimiento</p>
        </div>
        <div class="container-cards">
            <div class="card">
                <img src="../img/gestion.png" alt="tareas">
                <strong>Gestión de eventos</strong>
                <p>Registra fácilmente todos los detalles de tus eventos de emprendimiento</p>
            </div>
            <div class="card">
                <img src="../img/emprendedores.png" alt="tareas">
                <strong>Directorio de emprendedores</strong>
                <p>Asocia emprendedores a eventos especificos y gestiona sus productos</p>
            </div>
            <div class="card">
                <img src="../img/catalogo.png" alt="tareas">
                <strong>Catálogo de productos</strong>
                <p>Registra y muestra los productos o servicios ofrecidos por cada emprendedor</p>
            </div>
            <div class="card">
                <img src="../img/visibilidad.png" alt="tareas">
                <strong>Visibilidad</strong>
                <p>Destaca eventos, emprendedores y sus productos para mayor alcance</p>
            </div>
        </div>
        `;
        container.appendChild(cards)
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define("info-actions", optionsCards);
export { optionsCards };