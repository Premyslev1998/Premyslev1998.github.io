import React, {Component} from 'react';
import './style.css'

/**** STORE ****/
import { observer } from 'mobx-react';
import dataStore from "../../../Lib/Store/dataStore";
import lg from "../../../Lib/Store/langStore";

const Specifications = observer(class Specifications extends Component{
    render(){
        return(
            Object.keys(dataStore.current_product).length && <section className="specifications">
                <table>
                    <tbody>
                        <tr>
                            <td className="full_td">{lg.translation.product.characteristics}</td>
                        </tr>
                    {dataStore.current_product.option_value.map((el,i) =>
                        <tr key={i}>
                            <td key={el.option_id}>{el.name[0].toUpperCase() + el.name.slice(1)}</td>
                            <td className="answer" key={el.value_id}>{el.value}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>
        )
    }
});

export default Specifications;