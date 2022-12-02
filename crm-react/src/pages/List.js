import { Link } from 'react-router-dom';
import './List.css';
export function List() {
  //TODO pasar por parámetros: 1.titulo de tabla, ids para lista contacto y para borrar
  return (<div>   <table>
    <caption>Tabla oportunidades</caption>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Dirección</th>
        <th>Teléfono</th>
        <th>Contactos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Antonio</td>
        <td>antonio.arenas@solera.com</td>
        <td>C/Tharsis, 26</td>
        <td>638453173</td>
        <td><Link to={`/contactos/${1}`}>Ver contactos</Link></td>
        <td><button>Editar</button></td>
        <td><button>Borrar</button></td>
      </tr>

    </tbody>
  </table>
    <button>Crear</button>
  </div>)



}