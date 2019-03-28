import {Request, Response} from "express";
const axios = require('axios');
const env = require('../config/env_vars')

export async function Test(request: Request, response: Response) {

    var items = request.body.request.order.items
    var peso = 0;
    var metro3 =0; 

    for(var i=0;i < items.length;i++) {
        var product = items[i].product
        metro3 += parseInt(product.length) * parseInt(product.width) * parseInt(product.height) * parseInt(items[i].quantity)
        peso += parseInt(product.weight)
    }
    metro3 = metro3 / 1000000

    var data;
    if(request.body.request.additionalProperties.dynamicProperties != 0){
        data = request.body.request.additionalProperties.dynamicProperties[0].value
    }else{
        var date = new Date()
        data = date.getDate() +"/"
        if(date.getMonth() < 10){
            data += "0" + (date.getMonth() + 1)  
        }else{
            data += (date.getMonth() + 1)
        }
        data += "/" + date.getFullYear()
    }


    var value = request.body.request.order.orderTotal
    var cep = request.body.request.address.postalCode
    
    var client = env.client;

    var url = env.url
    url += client.tip + client.cnpj + client.mun + client.est + client.seg
    url += peso + "/"             //peso total
    url += value + ".00/"         
    url += metro3 + "/"              //metros cubicos
    url += cep + "/"         
    url += client.fil            
    url += data + "/"         
    url += client.user           

    //console.log(url)

    var res = await axios.get(url, {})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })

    response.send(res)
}