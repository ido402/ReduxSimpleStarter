import React,{Component} from 'react';


// //functional component structure
// const SearchBar = () => {
//     return <input/>;
// }

//class based components 
class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term:''};
    }

    render(){
        //return <input onChange={this.onInputChange} />;
        return (
            <div className="search-bar col-md-8 col-md-offset-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."
                            value = {this.state.term}
                            onChange={event => this.onInputChange(event.target.value)}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </span>
                </div>
            </div>
        );
    }

    //will be executed with each change
    onInputChange(term) { //"on/handle" + "tagName" + "Change"
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}



export default SearchBar;