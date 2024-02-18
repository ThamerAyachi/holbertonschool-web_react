import React from "react";
import "./Login.css";

const Login = () => {
	return (
		<div className="Login">
			<p>Login to access the full dashboard</p>
			<div>
				<div>
					<label for="email">Email:</label>
					<input type="email" id="email" />
				</div>

				<div>
					<label for="password">Password:</label>
					<input type="password" id="password" />
				</div>

				<div>
					<button>OK</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
