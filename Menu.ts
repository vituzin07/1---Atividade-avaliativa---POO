export class Menu {
    private itens : 
    constructor(){
        N
    }

    
export class ItemMenu{
    private opcao: string;
    private textoDaOpcao: string;
    constructor(op = this.opcao, txtDOpc = this.textoDaOpcao){
        this.opcao = op;
        this.textoDaOpcao = txtDOpc;
    }
    getopcao(): string{
        return this.opcao
    }
    gettextoDaOpcao(){
        return this.textoDaOpcao
    }

}
