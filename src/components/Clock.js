import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        author: props.name ? props.name : "anonimo",
      };
    }
  
    tick() {
      this.setState({
        date: new Date(),
      });
    }
  
    componentDidMount(){
      this.timerID = setInterval(() => this.tick(), 1000) 
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID)
    }
  
    componentDidUpdate(){
      console.info(this.state.author, this.state.date)
    }
    render() {
      let hora = this.state.date.toLocaleTimeString();
      let author = this.state.author;
      return (
        <div className="App">
          <h1>Relogio de {author}</h1>
          <h2>O meu horário ficticio é {hora}</h2>
        </div>
      );
    }
  }
  