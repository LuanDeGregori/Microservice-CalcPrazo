import { Request } from "express";
import {} from 'express-validator';

export class ShippingServices{


    valida(request: Request){

        request.assert("request", "No Request").notEmpty();
        request.assert("request.address.postalCode", "No postalCode").notEmpty().isLength({ min: 8 ,max :8});
        /* request.assert("endereco", "O endereco da request é obrigatório.").notEmpty();
        request.assert("telefone", "O telefone é obrigatorio e deve ter 10 ou 11 casas decimais. Ex: 5433334444 ou 54999999999").notEmpty().isLength({ min: 10 ,max :11});
        request.assert("cnpj", "O CNPJ é obrigatorio e deve ter 14 casas decimais sem pontos. Ex: 11222333444455").notEmpty().isLength({ min: 14 ,max :14});
        request.assert("horarioAtendimento", "O horário de atendimento da request é obrigatório.").notEmpty();
        request.assert("cidade", "O nome da cidade é obrigatório.").notEmpty();
        request.assert("estado", "O estado é obrigatório e deve conter somente 2 digitos. Ex: RS").notEmpty().isLength({ min: 2 ,max :2}); */

        var erro = request.validationErrors();
        if(erro){
            var erros = []
            erro.forEach(elemento =>{
                erros.push(elemento.msg)
            })
            return erros;
        }
        return null;
    }
}