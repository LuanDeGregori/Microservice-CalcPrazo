import { Request } from "express";
import {} from 'express-validator';

export class ShippingServices{


    valida(request: Request){

        request.assert("request", "No Request").notEmpty();
        request.assert("request.address.postalCode", "PostalCode Invalid").notEmpty().isLength({ min: 8 ,max :8});
        request.assert("request.order.items", "No Items").notEmpty();
        var items = request.body.request.order.items
        for(var i=0;i < items.length;i++) {
            request.assert(`request.order.items[${i}].product.length`, `Product ${i+1}: Length Invalid`).notEmpty();
            request.assert(`request.order.items[${i}].product.width`, `Product ${i+1}: Width Invalid`).notEmpty();
            request.assert(`request.order.items[${i}].product.weight`, `Product ${i+1}: Weight Invalid`).notEmpty();
            request.assert(`request.order.items[${i}].product.height`, `Product ${i+1}: Height Invalid`).notEmpty();
            request.assert(`request.order.items[${i}].quantity`, `Product ${i+1}: Quantity Invalid`).notEmpty();
        }
        request.assert("request.order.orderTotal", "No Total Price").notEmpty();


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