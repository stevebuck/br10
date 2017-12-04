import React from 'react';
import logo from './br10.png';


export class SplashPage extends React.Component {
    render() {
        return (
                <div class="site-wrapper">
                  <div class="splash-page">
                    <div className="col-md-auto">
                      <img alt="Blaze Riorden" className="img-fluid splash-image" src={logo}/>
                    </div>
                  </div>
                </div>
        );
    }
}
