import React from 'react';
import Falcor from 'falcor';
import falcorModel from '../FalcorModel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch) => ({});
class LoginView extends React.Component{
    render(){
        return (
            <div>
            <h1>Login View</h1>
            form goes here
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);