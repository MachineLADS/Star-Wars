const request = require('supertest')

it ('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.films).toBeDefined()
   expect(resposta.body.vehicles.length).toBeGreaterThan(0)
   expect(resposta.body.name).toBe('Luke Skywalker')
})

it ('Deve visualizar informações de cadastro, quando buscar por especies', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.species).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar por um veiculo', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.vehicles).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar por uma nave', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.starships).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar pelo ano de criação', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.created).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar pela edição', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.edited).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar pela url', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.url).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar pela cor do olho', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.eye_color).toBeDefined()
  
})

it ('Deve visualizar informações de cadastro, quando buscar pela altura', async () =>{
    const resposta = await request('https://swapi.dev/api').get('/people/1')
   expect(resposta.status).toBe(200)
   expect(resposta.body.height).toBeDefined()
  
})

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999')

    expect(resposta.status).toBe(404)
    expect(resposta.body.detail).toBe('Not found')
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    })
})