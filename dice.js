class App{
    runApplication(){
        console.log("no nigga");
        let button= document.getElementById("rollButton")
        button.addEventListener('click', ()=>{
            let stat1 = this.rollstat();
            let stat2 = this.rollstat();
            let stat3 = this.rollstat();
            let stat4 = this.rollstat();
            let stat5 = this.rollstat();
            let stat6 = this.rollstat();
            console.log(stat1,stat2,stat3,stat4,stat5,stat6)
            let head1 = document.getElementById("s1");
            head1.innerHTML= "str "+ stat1;
            let head2 = document.getElementById("s2");
            head2.innerHTML= "dex "+ stat2;
            let head3 = document.getElementById("s3");
            head3.innerHTML= "con " + stat3;
            let head4 = document.getElementById("s4");
            head4.innerHTML= "wis " + stat4;
            let head5 = document.getElementById("s5");
            head5.innerHTML= "int " + stat5;
            let head6 = document.getElementById("s6");
            head6.innerHTML=  "cha " + stat6;    
        })
    }
    rolldice(){
        return Math.floor(Math.random() * 6+1);
    }
    rollstat(){
        let d1 = this.rolldice();
        let d2 = this.rolldice();
        let d3 = this.rolldice();
        let d4 = this.rolldice();
        let diceArray = [d1, d2,d3,d4];
        
        diceArray.sort();
        
        let som = diceArray[1] + diceArray[2] + diceArray[3] 
        console.log(som);
        return som;
    }

}
let app = new App();
app.runApplication();
