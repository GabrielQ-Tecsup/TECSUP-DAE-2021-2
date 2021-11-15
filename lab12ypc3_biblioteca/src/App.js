import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} 
from "reactstrap";

const dataPrestamo = [
  { id: 1, libro: "HTML BASICO 2", cliente: "Gabriel Omar", fecini: "2021-11-14", fecfin: "2021-12-14" },
  { id: 2, libro: "JAVASCRIPT BASICO 1", cliente: "Juan Perez", fecini: "2021-11-14", fecfin: "2021-12-14" },
  { id: 3, libro: "CSS BASICO 2", cliente: "Andrea Quispe", fecini: "2021-11-14", fecfin: "2021-12-14" },
  { id: 4, libro: "JAVA BASICO 1", cliente: "Jeremy Pereira", fecini: "2021-11-14", fecfin: "2021-12-14" },
  { id: 5, libro: "PYTHON BASICO 1", cliente: "Angel Santos", fecini: "2021-11-14", fecfin: "2021-12-14"},
  { id: 6, libro: "MYSQL BASE DE DATOS BASICO 1", cliente: "Fabricio Guerra", fecini: "2021-11-14", fecfin: "2021-12-14" },
];

class App extends React.Component {
  state = {
    data: dataPrestamo,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      libro: "",
      cliente: "",
      fecini: "",
      fecfin: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].libro = dato.libro;
        arreglo[contador].cliente = dato.cliente;
        arreglo[contador].fecini = dato.fecini;
        arreglo[contador].fecfin = dato.fecfin;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Está Seguro que desea Eliminar el Prestamo numero "+dato.id+" ?");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="info" onClick={()=>this.mostrarModalInsertar()}>Crear Nuevo Prestamo</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Libro</th>
                <th>Nombre Del Cliente</th>
                <th>Fecha de Inicio</th>
                <th>Fecha Final</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.libro}</td>
                  <td>{dato.cliente}</td>
                  <td>{dato.fecini}</td>
                  <td>{dato.fecfin}</td>
                  <td>
                    <Button
                      color="success"
                      onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Prestamo</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Libro: 
              </label>
              <input
                className="form-control"
                name="libro"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.libro}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre Del Cliente: 
              </label>
              <input
                className="form-control"
                name="cliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cliente}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha de Inicio: 
              </label>
              <input
                className="form-control"
                name="fecini"
                type="date"
                onChange={this.handleChange}
                value={this.state.form.fecini}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha Final: 
              </label>
              <input
                className="form-control"
                name="fecfin"
                type="date"
                onChange={this.handleChange}
                value={this.state.form.fecfin}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.editar(this.state.form)}>Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}>Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Agregar Nuevo Prestamo</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Libro: 
              </label>
              <input
                className="form-control"
                name="libro"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre Del Cliente: 
              </label>
              <input
                className="form-control"
                name="cliente"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha de Inicio: 
              </label>
              <input
                className="form-control"
                name="fecini"
                type="date"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha Final: 
              </label>
              <input
                className="form-control"
                name="fecfin"
                type="date"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}>Agregar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}>Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;