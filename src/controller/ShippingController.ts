import {Request, Response} from "express";
import {getManager} from "typeorm";
const axios = require('axios');
const env = require('../config/env_vars')

export async function Test(request: Request, response: Response) {

    var items = request.body.request.order.items

    var peso;
    var m3; 
    
    
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

    console.log(data)


    var value = request.body.request.order.orderTotal
    var cep = request.body.request.address.postalCode
    var client = env.client;

    var url = env.url
    url += client.tip + client.cnpj + client.mun + client.est + client.seg
    url += "5/"                  //peso total
    url += value + ".00/"            //valor total
    url += "0.025/"              //metros cubicos
    url += cep + "/"          //cep destino
    url += client.fil            //filial
    url += data + "/"         //data dd/mm/aaaa
    url += client.user           //usuario jameff

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