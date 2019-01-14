import React, {Component} from "react";
import Matka from "./components/Matka";

const mat = { otsikko: 'Lomalla', paiva:'26.1.2019', paikka: 'Lohja', saa: 'Sateinen, -1',kuvaus: 'Lomalla Lohjalla' }

class MatkaApp extends Component {
    render() {
        return(
        <Matka matka = { mat } />
        );
    }
} 
export default MatkaApp;