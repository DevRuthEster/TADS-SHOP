'use server'

import { stringifyFormData } from "@/lib/helpers"
import { error } from "console"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type': 'application/json'
}

export type MarcaFormState = {
    nome: string;
}

export async function criarMarca(prevState: {}, formData: FormData) {
    let response = await fetch(`${API_URL}/marca`, {
        headers,
        method: 'POST',
        body: stringifyFormData(formData)
    })
    //console.log(await response.json())
    return prevState
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(id: number) {
    let response = await fetch(`${API_URL}/marca/${id}`, {
        method: 'DELETE',
    })
    if (response.status !== 204) {
        return {
            sucesso: false,
            mensagem: 'Erro ao excluir a marca'
        }
    }
    revalidatePath('/cadastro/marcas/')

    return {
        sucesso: true,
        mensagem: 'Marca excluída com sucesso!'
    }

}

