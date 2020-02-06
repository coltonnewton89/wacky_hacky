import React, { Component } from 'react';



class Algo extends Component {
    state = {
        algos: [],
        input: ""
      }
    
      onChange = (e) => {
        this.setState({input: e.target.value})
    
      }
    
      fetchArticles = (e) => {
        e.preventDefault()
        fetch("https://hn.algolia.com/api/v1/search?query=" + this.state.input)
          .then(res => res.json())
          .then(response => {
            console.log(response)
            this.setState({ algos: response.hits})
          });
      };
    render() {
        return (
            <form onSubmit={this.fetchArticles}>
            <input style={{backgroundColor: "pink"}}  onChange={this.onChange}></input> <br/>
            <button style={{backgroundColor: "green"}}  type="submit">Search</button>
            {
              this.state.algos.map(algos => {
                return <p style={{backgroundColor: "orange"}} > <a href={algos.url}>{algos.title}</a> <br/> 
                VIEWS:{algos.points}</p>
              })
            }
          </form>
        );
    }
}

export default Algo;