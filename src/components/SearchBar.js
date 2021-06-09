import React from "react";

class SearchBar extends React.Component {
  state = { acrticleInput: "" };

  onSubmit = () => {
    this.props.onSubmit(this.state.acrticleInput);
  };
  render() {
    return (
      <div className='ui menu'>
          <div className='item'>
          <div className='ui action input'>
            <input type="text" placeholder="Articles search.." value={this.state.acrticleInput} onChange={(e)=>this.setState({acrticleInput:e.target.value})} />
            <div className="ui button" onClick={this.onSubmit}>Go</div>
          </div>
        </div>
        <div className='ui search right item'>
          <div className="ui icon input">
            <input className='prompt' type='text' placeholder='Search...' onChange={(e)=>this.props.onSearchTextChange(e.target.value)} />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
