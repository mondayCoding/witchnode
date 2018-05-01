
//libs
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

//components
import Input from '../components/input';


export default class Dashboard extends React.Component {

    public state = {
        startCount: ""
    };

    public componentDidMount(){
        axios.get("/api/serverstatistics")
        .then((response:any) => {
            const logs = response.data.serverStartLogs;
            const count = response.data.serverStartCount;            
            console.log(logs);
            this.setState({startCount:count});
        });
    }

    public render() {
        return (
            <div className="page">

                {/* <section className="server-statistics">
                    <div className="statistic">
                        <span className="phrase">
                            Server has been started <span className="counter">{this.state.startCount}</span> times
                        </span>
                    </div>
                </section> */}

                <section className="dashboard">

                    <NavLink exact to="/" activeClassName="active" className="dash-item" >

                        <div className="pagesymbol">
                            <i className="fa fa-heart"></i>
                        </div>
                        <div className="pagetitle">
                            Dashboard
                        </div>
                    </NavLink>

                    <NavLink exact to="/createchar" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-heart"></i>
                        </div>
                        <div className="pagetitle">
                            Create Character
                        </div>
                    </NavLink>

                    <NavLink exact to="/soon" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-hashtag"></i>
                        </div>
                        <div className="pagetitle">
                            Soon™
                        </div>
                    </NavLink>


                    <NavLink exact to="/missions" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-exclamation"></i>
                        </div>
                        <div className="pagetitle">
                            Missions
                        </div>
                    </NavLink>

                    <NavLink exact to="/witchchat" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-medkit"></i>
                        </div>
                        <div className="pagetitle">
                            covenChat
                        </div>
                    </NavLink>


                    <NavLink exact to="/profile" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-flask"></i>
                        </div>
                        <div className="pagetitle">
                            Profile
                        </div>
                    </NavLink>


                    <NavLink exact to="/settings" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-cog"></i>
                        </div>
                        <div className="pagetitle">
                            Settings
                        </div>
                    </NavLink>


                    <NavLink exact to="/docs" activeClassName="active" className="dash-item" >
                        <div className="pagesymbol">
                            <i className="fa fa-book"></i>
                        </div>
                        <div className="pagetitle">
                            Documentation
                            </div>
                    </NavLink>

                </section>



            </div>
        );
    }
}
