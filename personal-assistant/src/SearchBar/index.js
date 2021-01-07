import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <label>search</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar