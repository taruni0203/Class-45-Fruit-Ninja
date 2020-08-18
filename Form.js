class Form{
    constructor(){
        this.button = createButton("PLAY");
       // this.greeting = createElement('h2');
        this.title = createElement('h1');
    }
    display(){
        this.button.position(400,300);
        this.button.style("padding", "0px");
        this.button.style("font-size", "30px");
        this.button.style("background-color", "none");
        this.button.style("border", "none");
        this.button.style("color", "white");
        this.title.html("Fruit Ninja");
        this.title.style("color","white");
        this.title.style("font-size","80px");
        this.title.position(200,-50);
        
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            gameState =1;
        })
    }


    
//#593414
}
