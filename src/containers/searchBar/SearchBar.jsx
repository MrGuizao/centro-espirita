import React, { Component } from 'react';
import './style.css';

export default class SearchBar extends Component {
     state = {
          title: ''
     }
     render() {
          return (
               <form className="d-flex my-4" >
                    <input type="text" className="form-control" name="title" />
                    <button className="btn btn-primary rounded">Pesquisar</button>
               </form>
          )
     }
}
