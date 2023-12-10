
const api = new APIManager()
const render = new Renderer()

api.makeData().then(data=>{
    
    render.display(data)
})

$(".buttons").on("click",()=>{
  
    api.data.freinds=[]
    api.makeData().then(data=>{
        
        render.display(data)
    })
})
