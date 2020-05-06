import React, { Component } from 'react';
class MobiesList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        
       return(<div className='moviesCard'>
       {this.props.movies.filter(e => e.rating>=this.props.rate).filter(e => e.title.toUpperCase().includes(this.props.input.toUpperCase())).map(e => <div key={e.id} className='film'>
           <p>{e.rating}</p>
           <img className='image' src={e.src} alt='' />
           <h3>{e.title}</h3>
       </div>)}
       <div className="add-movie">
           <p className='plus' onClick={this.props.addMovie}>+</p>
       </div>
   </div> )
       
        }
    }
     
export default MobiesList;