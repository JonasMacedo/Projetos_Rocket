import {describe, before, after, it } from "node:test"
import {deepStrictEqual, strictEqual} from 'node:assert'

const BASE_URL = 'http://localhost:3035'

describe('API WorkFlow', ()=>{
    let _server = {}

    before(async ()=>{
        //import dinamico
        _server = (await import('./api.js')).app
        await new Promise(res => _server.once('listening', res))
    })

    after(done => _server.close(done))

    it('Recebido usuario e senha nao autorizado', async()=>{
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
})
