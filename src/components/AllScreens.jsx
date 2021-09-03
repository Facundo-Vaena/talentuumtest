import React from "react";
import { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import styles from "./styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core'


export default function AllScreens() {
    const [value, setValue] = useState({ sValue: '', iValue: '' });
    const [unidad, setUnidad] = useState('');
    const [flag, setFlag] = useState(false);
    const [results, setResults] = useState([]);
    const [inputError, setInputError] = useState(false);

    const medidas = { Agua: 'L', Gas: 'L', Pólvora: 'gr', Hojas: 'resma/s', Equipo: 'cant' }
    let randomKey = 0;

    const handleClick = (e)=>{

        if (e.target.value !== 0) {
            setUnidad(medidas[e.target.value]);
            setFlag(true);
            return setValue({ ...value, sValue: e.target.value });
        }
    }

    const handleChange = (e)=> {
        if (e.target.value <= 0 && e.target.value !== '') {
            return setInputError('La cantidad debe ser mayor a cero');

        }
        setInputError(false);
        return setValue({ ...value, iValue: e.target.value });
    }


    const handleSubmit = ()=> {
        if (value.sValue === 0 || value.sValue === '') {
            return setInputError('Debe seleccionar un recurso válido')
        }

        const hoy = new Date()
        setResults([...results, {
            id: randomKey++,
            recurso: value.sValue,
            cantidad: value.iValue,
            fecha: `${hoy.getDate()}-${hoy.getMonth()}-${hoy.getFullYear()}`
        }])
        let tagInput = document.getElementById('input');
        tagInput.value = '';
    }
    const eraseResource = (id)=> {
        setResults(results.filter(element => element.id !== id));
    }


    return (<div style={styles.container}>
        <form
            style={!results.length ? styles.form : styles.modifiedForm}
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit();
            }}>
            <div style={results.length ? styles.inputSelectContainer : null}>
                <div style={styles.inputErrorContainer}>
                    {
                        flag
                            ? <div
                                style={styles.inputYunidad}>
                                <input
                                    id='input'
                                    style={styles.inputText}
                                    placeholder='cantidad'
                                    required
                                    type="number"
                                    onChange={(e) => handleChange(e)}
                                />
                                <span style={styles.unidad}>
                                    {unidad}
                                </span>
                            </div>
                            : null
                    }
                    {
                        inputError
                            ? <div><h2 style={styles.error}>{inputError}</h2></div>
                            : null
                    }
                </div>
                <div style={results.length ? styles.selectSubmitContainer : null}>
                    <select style={styles.select} required onChange={(e) => { handleClick(e) }}>
                        <option style={styles.option} value='0' selected disabled>Seleccionar recurso</option>
                        <option value='Agua'>Agua</option>
                        <option value='Pólvora'>Pólvora</option>
                        <option value='Gas'>Gas</option>
                        <option value='Hojas'>Hojas (filo)</option>
                        <option value='Equipo'>Equipo maniobras</option>
                    </select>
                </div>
            </div>
            {
                flag && !inputError
                    ? <div style={styles.ingresarContainer}><Button type="submit" style={!results.length ? styles.ingresar : styles.ingresarModified}>Ingresar</Button></div>
                    : null
            }
        </form>
        {
            results.length
                ?
                <TableContainer style={styles.table}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={styles.tableHead}>Recurso</TableCell>
                                <TableCell style={styles.tableHead}>Cantidad</TableCell>
                                <TableCell style={styles.tableHead}>Fecha Ingreso</TableCell>
                                <TableCell style={styles.tableHead}>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                results.map(element => {
                                    return (<TableRow key={randomKey++}>
                                        <TableCell>{element.recurso}</TableCell>
                                        <TableCell>{`${element.cantidad} ${medidas[element.recurso]}`}</TableCell>
                                        <TableCell>{element.fecha}</TableCell>
                                        <TableCell style={styles.trash} onClick={() => eraseResource(element.id)}><FaTrash /></TableCell>
                                    </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                : null
        }

    </div>)
}
