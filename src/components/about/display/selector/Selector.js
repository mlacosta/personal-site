import React from 'react';
import './Selector.css';
import Box from './box/Box';


class Selector extends React.Component{

    render(){

        const colors = this.props.colors;

        let styles = {
            borderColor: colors.border
        }

        let onHover =  this.props.onHover;

        return(
            <div className="Selector" style={styles}>
                {this.props.selectors.map(
                    select =>{
                        return(<Box colors = {colors}
                                    title = {select.title}
                                    description = {select.description}
                                    icon = {select.icon}
                                    visor  = {select.visor}
                                    highlight = {(select.title === this.props.currentBox) ? true : false}
                                    onHover = {onHover}/>)
                    })
                }
            </div>
        )

    }

}

export default Selector;