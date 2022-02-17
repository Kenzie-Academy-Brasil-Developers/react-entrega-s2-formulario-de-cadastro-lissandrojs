import React from "react"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
const Form =()=>{
    const schema = yup.object().shape({
        name:yup.string().required("Campo obrigatorio"),
        email: yup.string().required("Email obrigatorio").email("Email invalido"),
        password:yup.string().required("Campo Obrigatorio").max(8),
        confirmSenha:yup.string().oneOf([yup.ref("password")], "Senhas desiguais").required("Campo obrigatorio")
    }

    )
    const{register,handleSubmit, formState:{erros}} = useForm({
        resolver:yupResolver(schema)
    })

  
        const onForm = (data)=> console.log(data)
    return(
        <div>
            <form onSubmit={handleSubmit(onForm)}>
                <input type="text" placeholder="Nome"{...register("name")} />
                <input type="text" placeholder="E-mail" {...register("email")}/>
                <input type="password" placeholder="Senha"{...register("password")}/>
                <input type="password" placeholder="Confirmar Senha"{...register("confirmSenha")}/>
                <button>Cadastrar</button>

            </form>

        </div>
    )
}
export default Form