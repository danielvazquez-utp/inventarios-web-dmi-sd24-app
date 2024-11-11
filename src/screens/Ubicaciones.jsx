import { useEffect } from "react";
import { DTable, Footer, Menu, Navbar, Title } from "../components";
import { useFetchVer2 } from "../hooks/useFetchVer2";

const columnas = [
    {
        name: 'Identificador',
        selector: row=> row.matricula
    },
    {
        name: 'Ubicación',
        selector: row=> row.nombre
    },
    {
        name: 'Opciones',
        selector: row => row.action,
        cell: (props) => (
            <button className="btn btn-info btn-sm" title="Editar ubicación">
                <i className="fas fa-pen"></i>
            </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    }
];
const data = [
    {
        id: 1,
        matricula: "ZAQ0001",
        nombre: "Administración",
        cell: (props) => (
            <button>Editar</button>
        )
    },
    {
        id: 2,
        matricula: "ZAQ0002",
        nombre: "Recepción",
        cell: (props) => (
            <button>Editar</button>
        )
    },
]

export const Ubicaciones = () => {

    const { getData } = useFetchVer2();

    const getUbicaciones = async() => {
        const ubicaciones = await getData('http://localhost/codeigniter3-rest-controller/index.php/Api/Ubicacion');
        console.log(ubicaciones);
    }
    
    useEffect(() => {
        getUbicaciones();
    }, [])

    return (
        <>
            <Navbar />
            <Menu nombre="InventarioSys" usuario="Jaimito el Cartero" />
            <div className="content-wrapper">
                <Title title="Ubicaciones" breadcrums={["Personas", "Menú"]} />
                <section className="content">

                    <div className="row">
                        <div className="col-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-title">Agregar ubicaciones</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Nombre de la ubicación</label>
                                            <input className="form-control" placeholder="Edificio de administración" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-secondary">Cancelar</button>
                                    <button className="btn btn-lg btn-primary float-right">Aceptar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-title">Ubicaciones registradas</h4>
                                </div>
                                <div className="card-body">
                                    <DTable cols={ columnas } info={ data } />
                                </div>
                            </div>
                        </div> 
                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}