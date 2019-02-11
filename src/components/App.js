import React from "react";
import api from "../api";
import HouseList from "./HouseList";
import HouseDetail from "./HouseDetail";
import NavBar from "./NavBar";

class App extends React.Component {
  state = { houses: [], selectedHouse: null };

  componentDidMount() {
    api.get("/").then(response => {
      this.setState({ houses: response.data });
    });
  }

  onHouseSelect = house => {
    this.setState({ selectedHouse: house });
  };

  onSearchSubmit = async search => {
    const response = await api.get("/", {
      params: {
        name: search
      }
    });
    this.setState({ houses: response.data });
  };



  render() {
    return (
      <div>
        <NavBar />
        {!this.state.houses && <div class="ui active centered inline loader" />}
        {this.state.houses && ( 
          <div className="ui grid">
            <div className="ui row">
              <div key={this.state.houses.name}  className="five wide column">
                <HouseList
                  onHouseSelect={this.onHouseSelect}
                  houses={this.state.houses}
                />
              </div>
              <div className="eleven wide column">
                <HouseDetail house={this.state.selectedHouse} />
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default App;

