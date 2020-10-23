import React from 'react';
import ProfilePic from '../../../profilePic/profilePic';
import '../../../profilePic/profilePic';
import Button01 from '../../../misc/button01/Button01';
import './Visor.css';
import 'react-typist/dist/Typist.css';
import Menu from '../../menu/menu';


const buttonStyle = {
    position:'absolute',
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#eee',
    marginTop:70,
    bottom:80,
}

export default function Visor({colors, visor}) {

    const titleStyle = {color: colors.text01}
    const descStyle = {color: colors.text02}

    let { title, description, menu } = visor;

    let hasMenu = menu.isValid;
    let renderP = <p id='visor-desc' style={descStyle}>{description}</p>
    let render = hasMenu ? < Menu content = {menu.content}/> : renderP;

    return(
        <div className="Visor">
            <h2 id='visor-title' style={titleStyle}>{title}</h2>
            {render}
            <Button01 {...{colors}} msg='Generate CV'style={buttonStyle}/>
        </div>
    );

}

