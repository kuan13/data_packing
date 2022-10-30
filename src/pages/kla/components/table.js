import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const BasicExample = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Col1</th>
          <th>Col2</th>
          <th>Col3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>row1</td>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
        <tr>
          <td>row2</td>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
        <tr>
          <td>row3</td>
          <td colSpan={2}>val1</td>
          <td>val2</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;