
const numberOfUsers = 7
const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUBER = 949;

class APIManager {
    constructor() {
        this.data = {
            mainUser: {},
            freinds: [],
            quote: "",
            pokemon: {},
            aboutMe: ""
        }
    }

    randomNumberPokemon() {
        return (Math.floor(Math.random() * (MAX_RANDOM_NUBER - MIN_RANDOM_NUMBER + 1)) + MIN_RANDOM_NUMBER)
    }
   
    promiseForUsers() {
        const usersPromise = $.get(`https://randomuser.me/api/?results=${numberOfUsers}`)
        return usersPromise
    }
    promiseRandomQuote() {
        const QuotePromise = $.get(`https://api.kanye.rest`)
        return QuotePromise
    }
    promisePokemon() {
        const pokemonPromise = $.get(`https://pokeapi.co/api/v2/pokemon/${this.randomNumberPokemon()}/`)
        return pokemonPromise
    }
    promiseAboutme(){
        const aboutMePromise = $.get("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
        return aboutMePromise
    }

    prepareUserMainAndFreinds(res) {
        this.data.mainUser.firstname = res.results[0].name.first
        this.data.mainUser.lastname = res.results[0].name.last
        this.data.mainUser.city = res.results[0].location.city
        this.data.mainUser.state = res.results[0].location.state
        this.data.mainUser.img = res.results[0].picture.large

        let fres = res.results.slice(1)
        for (let i = 0; i < fres.length; i++) {
            this.data.freinds.push(fres[i].name.first + " " + fres[i].name.last)
        }
    }

    prepareQouret(qout) {
        this.data.quote = qout.quote
    }

    preparePokemon(pokemon){
        this.data.pokemon.name = pokemon.name
        this.data.pokemon.img = pokemon.sprites.front_shiny
    }
    
    prepareAboutMe(aboutme){
        this.data.aboutMe = aboutme[0]
    }
    
    async makeData() {
        const pUsers = this.promiseForUsers()
        const pQuote = this.promiseRandomQuote()
        const pPokemon = this.promisePokemon()
        const pAboutMe =this.promiseAboutme()
        console.log(pAboutMe.then(data=>console.log(data)))
        return Promise.all([pUsers, pQuote,pPokemon,pAboutMe]).then(results => {
            this.prepareUserMainAndFreinds(results[0])
            this.prepareQouret(results[1])
            this.preparePokemon(results[2])
            this.prepareAboutMe(results[3])
            
            return this.data  
        })
    }
}





