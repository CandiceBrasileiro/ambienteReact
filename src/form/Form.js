import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form >
      <Input id='email' label="email" required/>
      <Input id='senha' type="password" label="senha"/>
      <Button />
    </form>
  )
}

export default Form
