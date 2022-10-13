import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export function action(){
  console.log('submit al form')
}

function NuevoCliente() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-4">
        LLena todos los campos para registar un nuevo cliente
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
        <Form method="post" action="/clientes/nuevo">
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-xl"
            value="Registrar CLiente"
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
