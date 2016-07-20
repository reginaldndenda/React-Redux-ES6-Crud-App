import React from 'react';
import {Link} from 'react-router';



const HomePage = () => {
    return (
      <div>
        <form>
          <div>
            <input type="email" placeholder="Email Address" /*value={this.state.email} */ />
          </div>
          <div>
          <input type = "password" placeholder = "Password" /*value={this.state.password}*/ />
          </div>
          <div>
          <input type ="submit"
                 /*onSubmit={this.handleAuth}*/ />
          </div>
        </form>
      </div>
    );
  };

export default HomePage;


