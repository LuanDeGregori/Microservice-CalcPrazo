import {Request, Response} from "express";
import {getManager} from "typeorm";
const axios = require('axios');
const env = require('../config/env_vars')

export async function Test(request: Request, response: Response) {

    
    
    var client = env.client;

    var url = env.url
    url += client.tip + client.cnpj + client.mun + client.est + client.seg
    url += "5/"                  //peso total
    url += "100.00/"             //valor total
    url += "0.025/"              //metors cubicos
    url += "99010140/"           //cep destino
    url += client.fil            //filial
    url += "28/03/2019/"         //data dd/mm/aaaa
    url += client.user           //usuario jameff

    console.log(url)

    var teste = await axios.get(url, {})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })

    response.send(teste)
}