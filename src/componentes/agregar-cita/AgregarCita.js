import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AgregarCita extends Component {

    //refs
    nombreRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    crearNuevaCita = e => {
        e.preventDefault();

        // crear objeto
        let nuevaCita = {
            nombre: this.nombreRef.current.value,
            propietario: this.propietarioRef.current.value,
            fecha: this.fechaRef.current.value,
            hora: this.horaRef.current.value,
            sintomas: this.sintomasRef.current.value
        }

        //agregar a props
        this.props.crearCita(nuevaCita);

        //reiniciar form
        e.currentTarget.reset();
    }

    render() {
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-9">
                                <input ref={this.nombreRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-9">
                                <input ref={this.propietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechaRef} type="date" className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-3">
                                <input ref={this.horaRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-9">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

AgregarCita.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default AgregarCita;