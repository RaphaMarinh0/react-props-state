import react from 'react';

export default function welcome(props){
    let personName = props.name ? props.name : "anonimo";
    return(
        <h1 className={props.className}>
            Bem-vindo, {personName}
        </h1>
    ); 
}