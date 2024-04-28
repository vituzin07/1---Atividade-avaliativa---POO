   export class ItemMenu{
    private opcao: string
    private textoDaOpcao: string
    constructor(op = this.opcao, txtDOpc = this.textoDaOpcao){
        this.opcao = op
        this.textoDaOpcao = txtDOpc
    }
    getopcao(): string{
        return this.opcao
    }
    gettextoDaOpcao(){
        return this.textoDaOpcao
    }

}

export class Menu {
    private itens : ItemMenu [] = []
   
    constructor(){
        let opcao1 = new ItemMenu("1 - Atacar")
        this.itens.push(opcao1)
        let opcao2 = new ItemMenu("2 - Ataque especial")
        this.itens.push(opcao2)
        let opcao3 = new ItemMenu("3 - Tomar poção de Cura de HP")
        this.itens.push(opcao3)
        let opcao4 = new ItemMenu("4 - tomar poção que restaura MP")
        this.itens.push(opcao4)
        let opcao5 = new ItemMenu("5 - Defender")
        this.itens.push(opcao5)
        
    }
    imprimirMenu(): string {
        console.log("Opções do menu:");
        this.itens.forEach(item => {
            console.log(`${item.getopcao} - ${item.gettextoDaOpcao}`)
        })
        const opcaoSelec: string = prompt("Escolha uma opção:")
        return opcaoSelec;
    }
}

class Coliseu {
    private monstro:string;
}

class Monstro {
    private hp:number
    private frcatk:number
    private frcdef:number
    receberDano(dano:number){
        const reduzido = dano - this.frcdef
        if(reduzido < 0){
            return this.hp
        }

  
    this.hp -= reduzido
    if (this.hp < (25/100)*this.hp) {
        
        const reduzidometade = reduzido/2
      
        this.frcatk*= (10/100)
   
        this.frcdef *= (30/100)
        return this.hp - reduzidometade
    }
    if (this.hp <= 0) {
        console.log("Monstro derrotado")
    }
    return this.hp;
}
    ataque(): number {
        return this.frcatk  

 }
}
class Equipamento {
    nome: string;
    aumatk: number;
    aumdef  : number;

}
class Lutador {
    hp: number;
    mp: number;
    ataque: number;
    defesa: number;
    equipamentos: { cabeca:"Capacete Viking" ; corpo: "Vestido de Fada" ; mao: "Besta de Precisão" }

}
