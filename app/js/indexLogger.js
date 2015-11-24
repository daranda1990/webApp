var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var App = require('./App');
var Profile = require('./Profile');
var Friends = require('./Friends');
var mainAppWin = require('./mainAppWin');
var IndexRoute = ReactRouter.IndexRoute;

var indexLogger = React.createClass({
	render: function(){
    	return(
			<div className="detail">
          		{this.props.children}
        	</div>
        );
	}
});

// Run the routes
var routes = (
    <Router>
      	<Route name="parent" path="/" component={indexLogger}>
      		<IndexRoute component={App}/>
	        <Route name="mainAppWin" path="/mainAppWin" component={mainAppWin}>
	            <Route name="Friends" path="/friends" component={Friends}/>
	            <Route name="profile" path="/profile" component={Profile}/>
	        </Route>
        </Route>
    </Router>
);



ReactDOM.render(routes, document.body);

module.exports = indexLogger;