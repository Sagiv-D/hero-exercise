import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"


const Login = () => {
	return (
		<>
			<Input placeholder="Username" type='text'/>
			<Input placeholder="Password" type='password' />
			<input type="checkbox" />
			<Button>Login</Button>
		</>

	)
}

export default Login