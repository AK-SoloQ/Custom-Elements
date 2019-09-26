/*const cards = document.querySelectorAll('.card')
const btns = document.querySelectorAll('.btn.btn-primary')
btns.forEach(btn => {
      btn.addEventListener('click', ()=>{
            console.log(`btn `,{btn} ,` is clicked`)
      })
})
cards.forEach((card,index) => {
      card.addEventListener('mouseover', () => {
            card.classList.remove('bg-warning')
            card.classList.remove('text-white')
            card.classList.add('bg-info')
      })
      card.addEventListener('mouseout',()=>{
            if(index === 0)
            {
                  card.classList.add('bg-warning')
                  card.classList.add('text-white')
            }
            card.classList.remove('bg-info')
      })
}) */
// CustomElement and Class

class Card extends HTMLElement {
      constructor() {
            super()
            this.users = ['ahmed','saddem', 'omar']
            this.div = document.createElement('div')
            this.div.classList.add('row', 'justify-content-center')
            this.cards = this.users.map(user => {
                  let _div = document.createElement('div')
                  _div.classList.add('card','text-white','bg-warning', 'mb-3' ,'col-lg-3','col-md-4' ,'col-sm-6')
                  _div.innerHTML = `
                        <img src="https://www.fillmurray.com/640/360" class="card-img-top" alt="...">
                        <div class="card-body">
                              <h5 class="card-title">${user}</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                    content.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>`
                  return _div
            })
            console.log( this.cards )
            this.cards.forEach(card => {
                  this.div.appendChild(card)
            })
            this.appendChild(this.div)
      }
}
customElements.define('my-card', Card)
