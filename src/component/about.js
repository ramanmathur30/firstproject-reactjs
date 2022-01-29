import React, { useMemo } from 'react'
import isEmail from 'validator/lib/isEmail'
import { useForm, defineForm } from 'react-hooks-forms'

const About = () => {
  const formDefinition = useMemo(() => defineForm({
    username: { value: '', isValid: (value) => isEmail(value) },//arrow function(=>)
    password: { value: '', isValid: (value) => value.length > 0 },
    rememberMe: { value: false}
  }))
  const form = useForm(formDefinition)

  return (
    <form
      onSubmit={form.onSubmit(json => {
        console.log(json)
        // reset()
      })}>
      <h1>Sign In</h1>

      <label>Username</label>
      <input
        value={form.fields.username.value}
        className={form.fields.username.isValidOrPristine ? '' : 'error'}//ternary operator(?)
        onChange={form.fields.username.onChange}
      />

      <label>Password</label>
      <input
        type="password"
        value={form.fields.password.value}
        className={!form.fields.password.isValidOrPristine ? '' : 'error'}
        onChange={form.fields.password.onChange}
      />

      <label>
        <input
          type="checkbox"
          value={form.fields.rememberMe.value}
          onChange={form.fields.rememberMe.OnChange}
        />
        remember me?
      </label>

      <button type="submit" disabled={form.isValid}>
        Sign In
      </button>
    </form>
  )
}



export default About

  