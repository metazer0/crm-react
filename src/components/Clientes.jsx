import { useNavigate } from "react-router-dom";

function Clientes({ cliente }) {
  const navigate = useNavigate();

  const { id, nombre, telefono, email, empresa } = cliente;

  return (
    <>
      <tr className="border-b">
        <td className="p-5 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>

        <td className="p-5">
          <p className="text-gray-600">
            {" "}
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p className="text-gray-600">
            {" "}
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            {telefono}
          </p>
        </td>

        <td className="p-5 flex gap-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-800 uppercase font-bold text-xs"
            onClick={() => navigate(`/clientes/${id}/edit`)}
          >
            Editar
          </button>
          <button
            type="button"
            className="text-red-600 hover:text-red-800 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default Clientes;
