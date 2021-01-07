import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(e) {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="search" value = {this.props.searchText} onChange={this.handleSearchChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar