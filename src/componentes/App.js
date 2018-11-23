import React, { Component } from 'react';
import Header from './header/Header';
import AgregarCita from './agregar-cita/AgregarCita';
import ListarCitas from './listar-citas/ListarCitas';

class App extends Component {

  state = {
    citas: {}
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = infoCita => {
    //crear copia state
    const citas = {...this.state.citas}
    //agregar al state
    citas[`cita${Date.now()}`] = infoCita;
    // modificar state
    this.setState({
      citas
    })
  }

  borrarCita = id => {
    //crea copia del state
    const citas = {...this.state.citas}
    //eliminar del state
    delete citas[id]
    //actualizar state
    this.setState({
      citas
    })
  }
  
  render() {
    return (
      <div className="container">
          <Header
            titulo='Administrador de Pacientes Veterinaria'
          />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita 
                crearCita={this.crearCita}
              />
            </div>
            <div className="col-md-6">
              < ListarCitas
                citas={this.state.citas}
                borrarCita={this.borrarCita}
              />
            </div>

          </div>
      </div>
    );
  }
}

export default App;
