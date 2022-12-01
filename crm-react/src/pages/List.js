import './List.css';
function List(){
return(<table>
    <caption>Tablas Responsive Sin Bootstrap</caption>
    <thead>
      <tr>
        <th>nombre</th>
        <th>email</th>
        <th>Apellidos</th>
      </tr>
    </thead>
    <tbody>
    <tr>
     <td data-label="name">ahmed</td>
     <td data-label="email">ahmed@yahoo.com</td>
     <td data-label="fullName">ahmed hassan</td> 
    </tr>
    <tr>
     <td data-label="name">mohamed</td>
     <td data-label="email">mohamed@yahoo.com</td>
     <td data-label="fullName">mohamed ahmed</td>   
    </tr>
    <tr>
     <td data-label="name">abdo</td>
     <td data-label="email">abdo@yahoo.com</td>
     <td data-label="fullNme">abdo ali</td>
    </tr>
    <tr>
     <td data-label="name">karim</td>
     <td data-label="email">karim@yahoo.com</td>
     <td data-label="fullName">karim hassan</td>
    </tr>
    </tbody>
  </table>)



}