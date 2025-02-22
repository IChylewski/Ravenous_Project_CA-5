import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term:'', location:'', sortBy:'best_match', searched:false};
        this.sortByOptions = {
            'Best Match':'best_match',
            'Highest Rated':'rating',
            'Most Reviewed':'review_count',
            'Distance From':'distance'
        }
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.searchByEnter = this.searchByEnter.bind(this);
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        });
        if(this.state.searched){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        }
        
    }

    handleTermChange(event){
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event){
        this.setState({
            location: event.target.value
        });
    }
    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        this.setState({ searched:true });
        event.preventDefault();
    }
    
    renderSortByOptions(){  
        return Object.keys(this.sortByOptions).map(sortByOption => {
                let sortByOptionValue = this.sortByOptions[sortByOption];
                return <li className={this.getSortByClass(sortByOptionValue)} onClick={() => this.handleSortByChange(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
           });
        };  
    searchByEnter(event){
        if(event.charCode === 13){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            this.setState({ searched:true });
            event.preventDefault();
        }
    }
    
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses"onKeyPress={this.searchByEnter} />
                    <input onChange={this.handleLocationChange} placeholder="Where?" onKeyPress={this.searchByEnter} />
                </div>
                <div  onClick={this.handleSearch} className="SearchBar-submit">
                     <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
            
            }

    }

    export default SearchBar;
