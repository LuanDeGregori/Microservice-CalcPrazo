export class Erro{ 

    private _respostaPadrao  = []

    private _resposta = []

    constructor (){

    }

 

    model(code: number = 404, mensagem:string = "Error Not Implemented"){
   
        this._respostaPadrao = [{"code" : code,"msg": mensagem}]
        return this._respostaPadrao
    }

    list(lista){
        this._resposta.push({"code": 400})
        lista.forEach(element => {
            this._resposta.push( {"msg" : element})
        });
        return this._resposta;
    }

    err404(){
        return this._respostaPadrao = [{code : 404, msg: "Not Found"}]
    }
}