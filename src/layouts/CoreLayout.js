import React from 'react';
import {Link} from 'react-router';
export default class CoreLayout extends React.Component{
    static propTypes = {
        children: React.PropTypes.element
    }

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