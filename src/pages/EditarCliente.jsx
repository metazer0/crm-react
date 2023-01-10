import { useNavigate, Form, useLoaderData } from "react-router-dom";
import { obtenerCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId)

    if(Object.values(cliente).length === 0){
      throw new Response('',{
        status: 404,
        statusText: '404 - El Cliente no fue encontrado(a)!'
      })
    }
    
    return cliente
 
}

function EditarCliente() {

  const navigate = useNavigate()

  const cliente = useLoaderData()

  console.log(cliente)

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
    <p className="mt-4">
      Modificar datos de un cliente
    </p>

    <div className="flex justify-end">
      <button
        className="bg-blue-700 text-white px-3 py-1 font-bold uppercase rounded-md mb-10"
        onClick={() => navigate(-1)}
      >
        Regresar
      </button>
    </div>

    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
      {/* repasar esto */}
      {/* {errores?.length &&
        errores.map((error, i) => <Error key={i}>{error}</Error>)} */}
      <Form method="post" noValidate>
        <Formulario cliente = {cliente} />
        <input
          type="submit"
          className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-xl cursor-pointer"
          value="Registrar CLiente"
        />
      </Form>
    </div>
  </> 
  )
}

export default EditarCliente