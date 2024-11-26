import {describe, before, after, it } from "node:test"
import {deepStrictEqual, strictEqual, ok} from 'node:assert'

const BASE_URL = 'http://localhost:3035'

describe('API WorkFlow', ()=>{
    let _server = {}
    let _globalToken = ''

    before(async ()=>{
        //import dinamico
        _server = (await import('./api.js')).app
        await new Promise(res => _server.once('listening', res))
    })

    after(done => _server.close(done))

    it('Devera receber Usuario não autorizado! E retornar erro.', async()=>{
        const data = {
            user: 'Jonas',
            password: '',
        }
        
        const request = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        
        strictEqual(request.status, 401)

        const response = await request.json()
        deepStrictEqual(response, {error:'usuario invalido!!'})
    })
    
    it('Devera receber um usuario validado pelo JWT!', async()=>{
        const data = {
            user: 'Jonas',
            password: '123',
        }
        
        const request = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        
        strictEqual(request.status, 200)
        
        const response = await request.json()
        // console.log({response} // para ver o Token gerado.
        ok(response.token, 'Token precisa ser apresentado.')
    })
    
    it('Devera restringir o acesso a usuario ñ validado pelo JWT!!', async()=>{
        
        const request = await fetch(`${BASE_URL}/`, {
            method: 'GET',
            headers:{
                authorization: ''
            }
        })
        
        strictEqual(request.status, 400)
        const response = await request.json()
        deepStrictEqual(response, {error:'Token invalido!!'})                
    })

})
