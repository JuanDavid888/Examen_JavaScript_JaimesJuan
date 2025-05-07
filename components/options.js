class optionsCards extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerHTML = `
            
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