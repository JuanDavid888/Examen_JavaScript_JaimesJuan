class WelcomeCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                width: 90%;
                margin-left: 5%;
                margin-bottom: 5%;
                border-radius: 0.6rem;
                background: linear-gradient(90grad,rgb(72, 21, 190), rgb(226, 151, 12));
            }

            .mainCard {
                width: 67%;
                font-family: Arial;
                color: white;
                padding: 0.5rem 1rem 3rem 1rem;
            }

            .mainCard h1 {
                font-size: 180%
            }

            .mainCard p {
                font-size: 90%
            }

            .mainCard button {
                margin-top: 2%;
                height: 2rem;
                border: none;
                border-radius: 0.25rem;
                cursor: pointer;
            }

            .mainCard .buttonMain1 {
                background: white;
            }

            .container .mainCard .buttonMain1:hover {
                background: black;
                color: white;
            }

            .mainCard .buttonMain2 {
                margin-left: 2%;
                color: white;
                background:#9e6ccc;
            }

            .container .mainCard .buttonMain2:hover {
                background: black;
                color: white;
            }
            
            @media screen and (min-width: 700px) {
                .container {
                    width: 80%;
                    margin-left: 10%;
                    border-radius: 0.6rem;
                    background: linear-gradient(90grad,rgb(72, 21, 190), rgb(226, 151, 12));
                }
            }
        `;
        const container = document.createElement("div");
        container.classList.add("container");

        const mainCard = document.createElement('div')
        mainCard.classList.add('mainCard')
        mainCard.innerHTML = `
        <div class="container-info">
            <h1>Ferias de Emprendimiento BucaraEmprende</h1>
            <p>Registra y visualiza la información de eventos de emprendimientos en Bucaramanga y su área metropolitana</p>
            <div class="container-buttons">
                <button id="button1" class="buttonMain1">Ver eventos</button>
                <button id="button2" class="buttonMain2">Registrar evento</button>
            </div>
        </div>
        `;

        container.appendChild(mainCard)
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define("news-info", WelcomeCard);
export { WelcomeCard };