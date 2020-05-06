import React, { Component } from 'react';
import './App.css'
import List from './component/List';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ title: "Bad Boys", src: "https://www.canalolympia.com/wp-content/uploads/2020/01/bad-boys-for-life-1080x1600.jpg", rating: 4, id: Math.random() },
      { title: "Now you See Me", src: "https://img.filmsactu.net/datas/films/i/n/insaisissables/vm/insaisissables-affiche-519f792eb3730.jpg", rating: 4, id: Math.random() },
      { title: "The Dark Knight", src: "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,804,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-dark-knight-rises-final-magistral-2128994/22608914-1-fre-FR/The-Dark-Knight-Rises-final-magistral.jpg", rating: 5, id: Math.random() },
      { title: "Grown Ups", src: "https://www.avoir-alire.com/local/cache-vignettes/L240xH320/arton13914-ecdc9.jpg?1578245241", rating: 3, id: Math.random() },
      { title: "Avengers", src: "https://unificationfrance.com/IMG/jpg/400-277.jpg", rating: 4, id: Math.random() }],
      input: "",
      tabStar: [{ icon: "⭐", id: Math.random(),isColored: false }, { icon: "⭐", id: Math.random(),isColored: false }, { icon: "⭐", id: Math.random(),isColored: false },
      { icon: "⭐", id: Math.random(),isColored: false }, { icon: "⭐", id: Math.random(),isColored: false }],
      rateValue:0
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  searchSubmit = () => {
    this.setState({
      movies: this.state.movies.filter(e => e.title.toUpperCase() === this.state.input.toUpperCase())
    })
  }

  colored = (id) => {
    this.setState({
      tabStar:this.state.tabStar.map(e=>(e.id===id)?{icon:e.icon,id:e.id,isColored:!e.isColored}:e),
     
    })
  }

  addMovie=()=>{
    let movieTitle=prompt('Please tap the movie title')
    let movieimg=prompt('Please enter the image url')
    let movierate=prompt('Please enter the movie rate')
    this.setState({
      movies:[...this.state.movies,{title:movieTitle,src:movieimg,rating:movierate,id:Math.random()}]
    })
  }

  render() {
    return (<div className='main'>
      <div className='section1'>
        <div className='search'>
          <input className='input' type='text' placeholder='type movie name to search' onChange={this.handleChange} />
          <button className='btn' onClick={this.searchSubmit}>Search</button>
        </div>
        <div className='rating'>
          <p className='text'>Minimum rating</p>
          {this.state.tabStar.map(e=><span key={e.id} onClick={()=>this.colored(e.id)} className={(e.isColored)?'starColored':'star'}>{e.icon}</span>)}
        </div>
      </div>
     
      <List movies={this.state.movies} input={this.state.input} rate={this.state.tabStar.filter(e=>(e.isColored===true)).length} addMovie={this.addMovie}/>
    </div>);
  }
}

export default App;
