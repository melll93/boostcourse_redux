import AddNumber from "../components/AddNumber";
import { connect } from 'react-redux';

const mapReduxDispatchToReactProps = (dispatch) => {
    return {
        onClick: ((size) => {
            dispatch({ type: 'INCREMENT', size: size })
        }).bind(this)
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// import React, { Component } from "react";
// export default class extends Component {
//     render() {
//         return <AddNumber onClick={((size) => {
//             store.dispatch({ type: 'INCREMENT', size: size })
//         }).bind(this)} />
//     }
// }