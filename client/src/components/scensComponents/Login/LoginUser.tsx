import React from "react"
import { useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { LOGIN_MUTATION } from "../../../graphql/Login"

interface LoginValues {
	email: string
	password: string
}

function LoginUser() {
	const history = useNavigate()
	const [ login, { data } ] = useMutation(LOGIN_MUTATION)

	const initialValues: LoginValues = {
		email: "",
		password: ""
	}

	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email address").required("Email Required"),
		password: Yup.string().max(20, "Must be 20 characters or less").required("Password Required")
	})

	return (
		<div className="container">
			<h3>Log in to Fake Twitter</h3>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(true)
					const response = await login({
						variables: values
					})
					localStorage.setItem("token", response.data.login.token)
					setSubmitting(false)
					history("/")
				}}
			>
				<Form>
					<Field name="email" type="text" placeholder="Email" />
					<ErrorMessage name="email" component={"div"} />

					<Field name="password" type="password" placeholder="Password" />
					<ErrorMessage name="password" component={"div"} />

					<button type="submit" className="login-button">
						<span>Login</span>
					</button>
				</Form>
			</Formik>
			<div className="register">
				<h4>Don't have an account?</h4>
				<Link to="/signup">Sign up</Link>
			</div>
		</div>
	)
}

export default LoginUser