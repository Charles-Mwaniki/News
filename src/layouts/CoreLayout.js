import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
export default class CoreLayout extends React.Component{
  
    render(){
        return (
            <div>
                 <span>
                Links: <Link to='/login'>Login</Link>
                <Link to='/'>Home</Link>
            </span>
            <br/>
            {this.props.children}
            </div>
           
        )
    }

}
CoreLayout.propTypes = {
    children: PropTypes.element
}
