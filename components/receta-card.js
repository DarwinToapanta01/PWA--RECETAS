// Web Component personalizado para mostrar una receta
class RecetaCard extends HTMLElement {
  static get observedAttributes() {
    return ['nombre', 'ingredientes', 'pasos'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: none;
          border-radius: 16px;
          padding: 1.5em 1.2em;
          margin: 1.5em 0;
          background: linear-gradient(120deg, #e0ffe0 60%, #b2f7ef 100%);
          box-shadow: 0 4px 16px #0002;
          transition: transform 0.15s;
        }
        .card:hover {
          transform: scale(1.025);
          box-shadow: 0 8px 24px #0003;
        }
        h2 {
          color: #388e3c;
          margin-top: 0;
          margin-bottom: 0.5em;
          font-size: 1.4em;
          letter-spacing: 1px;
        }
        p {
          margin: 0.5em 0;
          font-size: 1em;
        }
        b {
          color: #388e3c;
        }
      </style>
      <div class="card">
        <h2>${this.getAttribute('nombre') || ''}</h2>
        <p><b>Ingredientes:</b> ${this.getAttribute('ingredientes') || ''}</p>
        <p><b>Pasos:</b> ${this.getAttribute('pasos') || ''}</p>
      </div>
    `;
  }
}

customElements.define('receta-card', RecetaCard);
