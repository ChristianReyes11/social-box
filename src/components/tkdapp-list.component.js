import React, { Component } from "react";
import TkdAppDataServices from "../services/tkdapp.services"
import Coments from "./coments.component";
import Likes from "./likes.component"; 
//import Tkdapp from "./tkdapp.component"

export default class TkdappList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTkdapp = this.setActiveTkdapp.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tkdapps: [],
      currentTkdapp: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TkdAppDataServices.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tkdapp = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tkdapp.push({
        id: id,
        title: data.title,
        description: data.description,
        file: data.file,
        published: data.published,
        likes: data.likes,
      });
    });

    this.setState({
      tkdapps: tkdapp,
    });
  }

  refreshList() {
    this.setState({
      currentTkdapp: null,
      currentIndex: -1,
    });
  }

  setActiveTkdapp(tkdapp, index) {
    this.setState({
      currentTkdapp: tkdapp,
      currentIndex: index,
    });
  }
  render() {
    const { tkdapps: tkdapp } = this.state;

    const gridStyles = {
      display: "row",
      gap: "10px",
    };
    const imageStyles = {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      borderRadius: "7px",
      aspectRatio: "1/1",
    };
    

    return (
      <div style={{margin: 15}}>
        <h4>Boxeadores feed</h4>
        <div className="row" style={{ display: "flex", justifyContent: "space-between", alignContent:"center", alignItems:"center"}}>
          <div className="col" style={{maxWidth: '30%',alignContent:"center",alignItems:"center"}}>
            <div style={gridStyles}>
              {tkdapp.map((tkdapp, index) => (
                <div
                  className="tkdapp-item"
                  style={{ gridColumn: `span ${1}`, gridRow: `span ${1}` }}
                  key={index}
                >
                  
                    <img
                      src={tkdapp.file}
                      alt={tkdapp.title}
                      style={imageStyles}
                      onClick={() => this.setActiveTkdapp(tkdapp, index)}
                    />
                  <div key={index} className="tkdapp-item" style={{}}>
                    <Likes likes={tkdapp.likes} refreshList={this.refreshList} />
                    <Coments />
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    );
    
    
  }
}
