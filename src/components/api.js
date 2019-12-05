import React, { Component } from 'react';
// import SearchBox from './SearchBox';
import './api.css';
import axios from 'axios';

export default class api extends Component {
    constructor(props){
        super(props)
            this.state=
            {
                data1:[],
                valueInp:"",
                li:""
            }
        }
        componentDidMount()
        {
            axios.post('http://localhost:8081/films')
            .then(info=>{
                this.setState({data1 : info.data.results})
                this.sortArray();
            })
           
        }
       
        SearchChange = (event) => {
            event.preventDefault();
            if(event.target.value!==""){
            fetch(`http://localhost:8081/films`)
            .then(res => res.json())
            .then((info)=>{
               
                this.setState({data1 : info.results})
                this.sortArray();
            })
       
        }else{
            fetch(`http://localhost:8081/films`)
            .then(res => res.json())
            .then((info)=>{
               

                this.setState({data1 : info.results})
                this.sortArray();
            })
        }
            
        };
        sortArray = () =>
        {
            let url = this.state.data1
            url.sort(
                function(a,b)
                {
                    return b.popularity-a.popularity;
                }
            )
            this.setState({data1 : url});
        }
       
        apiCall()
        {
           
            let {data1} = this.state;
            return(
                <div >
                    <div className="jumbotron">
                    <div className='pa2'>
            <input 
            className='pa3 b--darkblue bg-light-blue dim br4'
            type="search"
            placeholder="search here "
            onChange={this.SearchChange}
            value={this.state.value}
            name="valueInp"	
            />
        
                    </div>
                    </div>
                <div className="container">
                <div className='row'>
            {data1.map((data,index)=>
                {
                    let image='http://image.tmdb.org/t/p/w185/'+data.poster_path;
                    return(
                        <div className='col-md-3 col-sm-4'>
                        
                        <div className="row bg-dark">
                            
                        <div class="card" style={ {width : '18rem'}}>
                            
                                <img src={image} class="card-img-top " alt="error"></img>
                                    <div class="card-body bg-dark" style={{height : '10rem'}}>
                                    <h4 key={index} class="card-title"className="text-white">{data.original_title}</h4>
                                    {/* <p class="card-text"className="text-dark">{data.ov}</p> */}
                                    <p class="card-text" className="text-white">Ratings: {data.popularity}</p>
                                    </div>
                            </div>
                            
                        </div>
                        </div>
                        
                    )
                })}
                </div>
                </div>
                </div>)
        }
        
        

  render() {
    return (
        <div>
                {this.apiCall()}
        </div>
    );
  }
}
