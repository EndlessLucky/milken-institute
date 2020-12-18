import logo from './logo.svg';
import './App.css';
import { Button, Collapse, Tabs, Tab } from 'react-bootstrap';
import React, {useState} from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.isToggle = this.isToggle.bind(this);
  }
  isToggle() {
    this.setState({open: !this.state.open});
  }
  render() {
    const menuObject = [
      {
        tab_name: "Main Menu",
        menu_columns_array: [
          {
            column: 1,
            column_name: "Left Column",
            links_array: [
              {
                title: "Link 1",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
              {
                title: "Link 2",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
            ]
          },        
          {
            column: 2,
            column_name: "Middle Column",
            links_array: [
              {
                title: "Link 1",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
              {
                title: "Link 2",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
            ]
          },        
          {
            column: 3,
            column_name: "Right Column",
            links_array: [
              {
                title: "Link 1",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
              {
                title: "Link 2",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
            ]
          },       
        ]
      },
      
      {
        tab_name: "Secondary Tab Menu",
        menu_columns_array: [
          {
            column: 1,
            column_name: "Secondary Menu Left Column",
            links_array: [
              {
                title: "Link 1",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
              {
                title: "Link 2",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
            ]
          },        
          {
            column: 2,
            column_name: "Secondary Menu Middle Column",
            links_array: [
              {
                title: "Link 1",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
              {
                title: "Link 2",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
            ]
          },        
          {
            column: 3,
            column_name: "Secondary Menu Right Column",
            links_array: [
              {
                title: "Link 1",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
              {
                title: "Link 2",
                description: "Some description about this link",
                url: "http://somewhere.com"
              },
            ]
          },
        ]
      },
    ]
    return (
      <>
        <Button
          className="menu-btn"
          onClick={this.isToggle}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
          variant="dark"
        >
          Menu
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              {
                menuObject.map((obj, i) => {
                  return (
                    <Tab key={i} eventKey="obj.tab_name" title="obj.tab_name">
                      <div className="row">
                        {
                          menuObject.menu_columns_array.map((obj, i) => {
                            return(
                              <div className="col-lg-3 col-sm-12" key={i}>
                                <h5 className="menu-title">{obj.column_name}</h5>
                                <ul className="menu-content">
                                  {
                                    
                                  }
                                  <li>
                                    <h6>
                                      <a href="">About Us</a>
                                    </h6>
                                    <p className="hidden-sm hidden-xs">Learn about our mission</p>
                                  </li>
                                  <li>
                                    <h6>
                                      <a href="">Leadership</a>
                                    </h6>
                                    <p className="hidden-sm hidden-xs">Meet the Milken Institute leadership team</p>
                                  </li>
                                </ul>
                              </div>
                            )
                          })
                        }                        
                      </div>
                    </Tab>
                  )
                })
              }
              
              <Tab eventKey="profile" title="Profile">
                <div className="row">
                  <div className="col-lg-3 col-sm-12">
                    <h5 className="menu-title">Asia</h5>
                    <ul className="menu-content">
                      <li>
                        <h6>
                          <a href="">About Us</a>
                        </h6>
                        <p className="hidden-sm hidden-xs">Learn about our mission</p>
                      </li>
                      <li>
                        <h6>
                          <a href="">Leadership</a>
                        </h6>
                        <p className="hidden-sm hidden-xs">Meet the Milken Institute leadership team</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
            </Tabs>          
          </div>
        </Collapse>
      </>
    );
  }  
}

export default App;
