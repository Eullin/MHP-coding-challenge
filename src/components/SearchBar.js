import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };
  onInputChange = e => {
    this.setState({ search: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.search);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>House Search</label>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
