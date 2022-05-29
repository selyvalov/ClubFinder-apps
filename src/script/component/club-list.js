import './club-item.js';

class ClubList extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set clubs(clubs){
        this._clubs = clubs;
        this.render();
    }

    renderError(message){
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML += `
        <style>
        .placeholder {
            font-weight: lighter; 
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>

        <h2 class="placeholder">${message}</h2>`;
    }
    
    render (){
        this.innerHTML = "";
        //perulangan : akan mendapatkan individual club pada saat itu juga kita buat element <club-item>
        //pada tiap <club-item> dibuat sebagai child dari <club-list>
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club
            this.shadowDOM.appendChild(clubItemElement);
        })
    }

    
}

//definisikan custom element yang dibuat agar digunakan DOM
customElements.define("club-list", ClubList);