import React from 'react';
import './Box.css'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

class Box extends React.Component{

    render(){

        let border = this.props.colors.border;
        let icon = this.props.icon;
        let title = this.props.title;
        let description = this.props.description;

        const boxStyle = {
            borderColor: border
        }

        const titleStyle = {
            color: this.props.colors.text01
        }

        const descStyle = {
            color: this.props.colors.text02
        }

        return(
            <div className="Box" style = {boxStyle} onMouseOver = {this.props.onHover(this.props.visor.title,this.props.visor.description)}>
                <div className="icon">{icon}</div>
                
                <div className="box-container">
                    
                    <p id='box-title' style={titleStyle}>
                        <Typist cursor={{hideWhenDone: true}}>{title}</Typist>
                    </p>
                    
                    <p id='box-description' style={descStyle}>{description}</p>
                    {/* */}
                </div>
               
            </div>
        )

    }

}

export default Box;