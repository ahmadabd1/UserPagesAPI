
class Renderer {
    constructor(){
        this.sourceuser = $("#template-user-container").html()
        this.templateuser = Handlebars.compile(this.sourceuser)

        this.sourceFreinds = $("#template-friends-container").html()
        this.templateFreinds = Handlebars.compile(this.sourceFreinds)

        this.sourceQoute = $("#template-quote-container").html()
        this.templateQoute = Handlebars.compile(this.sourceQoute)

        this.sourcePokemon = $("#template-pokemon-container").html()
        this.templatepokemon = Handlebars.compile(this.sourcePokemon)

        this.sourceAboutMe = $("#template-meat-container").html()
        this.templateAboutMe = Handlebars.compile(this.sourceAboutMe)    
    }
    display(showData) {
        $(".user-container").empty()
        $(".quote-container").empty()
        $(".pokemon-container").empty()
        $(".meat-container").empty()
        $(".friends-container").empty()
        
        this.diplayUserInfo(showData),
        this.displayFriendsList(showData),
        this.displayQoute(showData),
        this.displayPokemon(showData),
        this.displayAboutMe(showData)
        
    }
    diplayUserInfo(data) {
        let someHTML = this.templateuser(data.mainUser) 
        $(".user-container").append(someHTML)
    }
    displayFriendsList(data){
        let someHTML = this.templateFreinds({freinds:data.freinds}) 
        $(".friends-container").append(someHTML)
    }
    displayQoute(data){
        let someHTML = this.templateQoute({quote:data.quote}) 
        $(".quote-container").append(someHTML)
    }
    displayPokemon(data){
        let someHTML = this.templatepokemon(data.pokemon) 
        $(".pokemon-container").append(someHTML)
    }
    displayAboutMe(data){
        let someHTML = this.templateAboutMe(data.aboutMe) 
        $(".meat-container").append(someHTML)
    }
}

