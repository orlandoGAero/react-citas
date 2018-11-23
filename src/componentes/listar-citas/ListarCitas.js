import React, { Component } from 'react';
import Cita from '../cita/Cita';
import PropTypes from 'prop-types';

class ListarCitas extends Component {
    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus citas aqui'; 
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        {mensaje}
                    </h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map( cita => (

                            < Cita
                                key={cita}
                                id={cita}
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>    
        );
    }
}

ListarCitas.propTypes = {
    citas: PropTypes.object.isRequired
}
 
export default ListarCitas;