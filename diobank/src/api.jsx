

const pessoa = {
    email : 'brenosill@hotmail.com',
    senha : '1234',
    nome : 'Breno',
    id : '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() =>[
       resolve(pessoa)
    ],3000)
})