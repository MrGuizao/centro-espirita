import React, { Component } from 'react';
import './style.css';

export default class SearchBar extends Component {
     state = {
          title: '',
     }

     handleChange = e => this.setState({ title: e.target.value });

     handleSubmit = e => {
          e.preventDefault();
          this.props.searchTitle(this.state.title);
          this.setState({ title: '' })
     }

     render() {
          return (
               <form onSubmit={this.handleSubmit} className="d-flex my-4" >
                    <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
                    <button className="btn btn-primary rounded">Pesquisar</button>
               </form>
          )
     }
}
