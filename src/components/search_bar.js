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
            <div className="search-bar">
                <input
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
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