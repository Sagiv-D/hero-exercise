import React from 'react'
import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

const Register = () => {
  return (
    <div>
      <Input placeholder="Username" type='text'/>
      <Input placeholder="Password" type='password' />
      <Input placeholder="Confirm Password" type='password' />
      <Button>Register</Button>
    </div>
  )
}

export default Register