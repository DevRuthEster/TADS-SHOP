'use server'

import { redirect } from "next/navigation"

export async function criarMarcas(formData:FormData){
let response =  await fetch('http://localhost:3002/marcas',{
    method:'POST'
    , body:JSON.stringify({nome:formData.get('nome')})
})

redirect('/cadastro/marcas/')
}

export async function deletarMarca(formData:FormData){
let response =   fetch('http://localhost:3002/marcas',{
    method:'DEETE'
    , body:JSON.stringify({nome:formData.get('id')})
})
redirect('/cadastro/marcas/')
} 