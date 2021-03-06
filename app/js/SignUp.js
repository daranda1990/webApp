var Link = ReactRouter.Link;

var SignUp = React.createClass({

	// context so the component can access the router
  	contextTypes: {
      router: React.PropTypes.func
  	},
  	
	render: function(){
		return(
			<form method="post" id="reg" name="reg" action="https://m.facebook.com/r.php" onsubmit="return function(event){return false;}.call(this,event)!==false &amp;&amp; window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)">
				<input type="hidden" name="lsd" value="AVrbhDJG" autoComplete="off"/>
				<div id="reg_form_box" className="large_form">
					<div className="clearfix _58mh">
						<div className="mbm _3-90 lfloat _ohe">
							<div className="_5dbb" id="u_0_a">
								<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
									<div className="placeholder" aria-hidden="true">First name</div>
									<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="firstname" aria-required="1" placeholder="" id="u_0_b" aria-label="First name" aria-owns="js_0" aria-haspopup="true" aria-describedby="js_5" aria-invalid="true"/>
								</div>
								<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
							</div>
						</div>
						<div className="mbm rfloat _ohf">
							<div className="_5dbb" id="u_0_c">
								<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
									<div className="placeholder" aria-hidden="true">Last name</div>
									<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="lastname" aria-required="1" placeholder="" id="u_0_d" aria-label="Last name"/>
								</div>
								<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
							</div>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_e">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Email</div>
								<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_email__" aria-required="1" placeholder="" id="u_0_f" aria-label="Email"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm" id="u_0_g">
						<div className="_5dbb" id="u_0_h">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Re-enter email</div>
								<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_email_confirmation__" aria-required="1" placeholder="" id="u_0_i" aria-label="Re-enter email"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">New password</div>
								<input type="password" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_passwd__" aria-required="1" placeholder="" id="u_0_k" aria-label="New password"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">First Wish</div>
								<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_first_wish__" aria-required="1" placeholder="" id="u_0_k" aria-label="First Wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Second Wish</div>
								<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_second_wish__" aria-required="1" placeholder="" id="u_0_k" aria-label="second wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Third Wish</div>
								<input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_third_wish__" aria-required="1" placeholder="" id="u_0_k" aria-label="third wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="_58mq _5dbb" id="u_0_l">
						<div className="mtm mbs _58mr">Birthday</div>
						<div className="_5k_5">
							<span className="_5k_4" data-type="selectors" data-name="birthday_wrapper" id="u_0_m">
								<span>
									<select aria-label="Month" name="birthday_month" id="month" title="Month" className="_5dba">
										<option value="0" selected="1">Month</option>
										<option value="1">Jan</option>
										<option value="2">Feb</option>
										<option value="3">Mar</option>
										<option value="4">Apr</option>
										<option value="5">May</option>
										<option value="6">Jun</option>
										<option value="7">Jul</option>
										<option value="8">Aug</option>
										<option value="9">Sep</option>
										<option value="10">Oct</option>
										<option value="11">Nov</option>
										<option value="12">Dec</option>
									</select>
									<select aria-label="Day" name="birthday_day" id="day" title="Day" className="_5dba">
										<option value="0" selected="1">Day</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</select>
									<select aria-label="Year" name="birthday_year" id="year" title="Year" className="_5dba">
										<option value="0" selected="1">Year</option>
										<option value="2015">2015</option>
										<option value="2014">2014</option>
										<option value="2013">2013</option>
										<option value="2012">2012</option>
										<option value="2011">2011</option>
										<option value="2010">2010</option>
										<option value="2009">2009</option>
										<option value="2008">2008</option>
										<option value="2007">2007</option>
										<option value="2006">2006</option>
										<option value="2005">2005</option>
										<option value="2004">2004</option>
										<option value="2003">2003</option>
										<option value="2002">2002</option>
										<option value="2001">2001</option>
										<option value="2000">2000</option>
										<option value="1999">1999</option>
										<option value="1998">1998</option>
										<option value="1997">1997</option>
										<option value="1996">1996</option>
										<option value="1995">1995</option>
										<option value="1994">1994</option>
										<option value="1993">1993</option>
										<option value="1992">1992</option>
										<option value="1991">1991</option>
										<option value="1990">1990</option>
										<option value="1989">1989</option>
										<option value="1988">1988</option>
										<option value="1987">1987</option>
										<option value="1986">1986</option>
										<option value="1985">1985</option>
										<option value="1984">1984</option>
										<option value="1983">1983</option>
										<option value="1982">1982</option>
										<option value="1981">1981</option>
										<option value="1980">1980</option>
										<option value="1979">1979</option>
										<option value="1978">1978</option>
										<option value="1977">1977</option>
										<option value="1976">1976</option>
										<option value="1975">1975</option>
										<option value="1974">1974</option>
										<option value="1973">1973</option>
										<option value="1972">1972</option>
										<option value="1971">1971</option>
										<option value="1970">1970</option>
										<option value="1969">1969</option>
										<option value="1968">1968</option>
										<option value="1967">1967</option>
										<option value="1966">1966</option>
										<option value="1965">1965</option>
										<option value="1964">1964</option>
										<option value="1963">1963</option>
										<option value="1962">1962</option>
										<option value="1961">1961</option>
										<option value="1960">1960</option>
										<option value="1959">1959</option>
										<option value="1958">1958</option>
										<option value="1957">1957</option>
										<option value="1956">1956</option>
										<option value="1955">1955</option>
										<option value="1954">1954</option>
										<option value="1953">1953</option>
										<option value="1952">1952</option>
										<option value="1951">1951</option>
										<option value="1950">1950</option>
										<option value="1949">1949</option>
										<option value="1948">1948</option>
										<option value="1947">1947</option>
										<option value="1946">1946</option>
										<option value="1945">1945</option>
										<option value="1944">1944</option>
										<option value="1943">1943</option>
										<option value="1942">1942</option>
										<option value="1941">1941</option>
										<option value="1940">1940</option>
										<option value="1939">1939</option>
										<option value="1938">1938</option>
										<option value="1937">1937</option>
										<option value="1936">1936</option>
										<option value="1935">1935</option>
										<option value="1934">1934</option>
										<option value="1933">1933</option>
										<option value="1932">1932</option>
										<option value="1931">1931</option>
										<option value="1930">1930</option>
										<option value="1929">1929</option>
										<option value="1928">1928</option>
										<option value="1927">1927</option>
										<option value="1926">1926</option>
										<option value="1925">1925</option>
										<option value="1924">1924</option>
										<option value="1923">1923</option>
										<option value="1922">1922</option>
										<option value="1921">1921</option>
										<option value="1920">1920</option>
										<option value="1919">1919</option>
										<option value="1918">1918</option>
										<option value="1917">1917</option>
										<option value="1916">1916</option>
										<option value="1915">1915</option>
										<option value="1914">1914</option>
										<option value="1913">1913</option>
										<option value="1912">1912</option>
										<option value="1911">1911</option>
										<option value="1910">1910</option>
										<option value="1909">1909</option>
										<option value="1908">1908</option>
										<option value="1907">1907</option>
										<option value="1906">1906</option>
										<option value="1905">1905</option>
									</select>
								</span>
							</span>
						</div>
					</div>
					<div className="mtm _5wa2 _5dbb" id="u_0_p"><span className="_5k_3" data-type="radio" data-name="gender_wrapper" id="u_0_q"><span className="_5k_2 _5dba"><input type="radio" name="sex" value="1" id="u_0_n"/><label className="_58mt" htmlFor="u_0_n">Female</label></span><span className="_5k_2 _5dba"><input type="radio" name="sex" value="2" id="u_0_o"/><label className="_58mt" htmlFor="u_0_o">Male</label></span></span><i className="_5dbc _5k_6 img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd _5k_7 img sp_7XMX65Pq0E7 sx_067138"></i></div>
					<div className="clearfix"><Link to="/mainAppWin">
                  <button id="LogInBtn" className="btn btn-primary btn-lg active" >Sign Up</button>
                </Link></div>
				</div>
				<input type="hidden" autoComplete="off" id="referrer" name="referrer" value=""/><input type="hidden" autoComplete="off" id="asked_to_login" name="asked_to_login"/><input type="hidden" autoComplete="off" id="terms" name="terms" value="on"/><input type="hidden" autoComplete="off" id="ab_test_data" name="ab_test_data" value=""/><input type="hidden" autoComplete="off" id="reg_instance" name="reg_instance" value="f5ZTVicvklCwNUJcUZfUDS8L"/><input type="hidden" autoComplete="off" id="contactpoint_label" name="contactpoint_label" value="email_or_phone"/><input type="hidden" autoComplete="off" id="locale" name="locale" value="en_US"/>
				<div id="reg_captcha" className="_58mw hidden_elem">
				</div>
			</form>
			);
	}
});

module.exports = SignUp