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
        return <input onChange={this.onInputChange} />;
    }

    //will be executed with each change
    onInputChange(event) { //"on/handle" + "tagName" + "Change"
        console.log(event.target.value);
    }
}



export default SearchBar;