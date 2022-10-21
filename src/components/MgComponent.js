import React from 'react';
import MgUi from './MgUi';

class MgComponent extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        displaymode : MgUi.DISPLAY_DESKTOP
      }
    }

    componentDidMount(){
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions); 
    }

    componentWillUnmount(){
      window.removeEventListener("resize", this.updateDimensions);
    }
  
    updateDimensions = () => {
      let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
      let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  
      let displaymode = MgUi.DISPLAY_DESKTOP;
      if( windowWidth < 1000 && windowWidth < windowHeight) 
      {
        displaymode = MgUi.DISPLAY_MOBILE;
      }

      this.setState({ displaymode : displaymode });
    }

    IsDesktop = () =>   {
      return this.state.displaymode === MgUi.DISPLAY_DESKTOP;
    }

    IsMobile = () => {
      return this.state.displaymode === MgUi.DISPLAY_MOBILE;
    }
}

export default MgComponent;