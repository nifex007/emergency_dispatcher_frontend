import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { home } from '../utils/routes'


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({ dispatch });

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed,
        }));
    };

    getRoutes = routes => {
        return home.map((prop, key) => {
            if (prop.layout === "/") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={routeProps => (
                            <prop.component {...routeProps} {...this.props} />
                        )}
                        key={key}
                    />
                );
            }
            return "null";
        });
    };

    render() {
        return (

            <Switch>{this.getRoutes(home)}</Switch>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeLayout);