import alt from 'app/alt'
import AuthRegisterFormActions from 'app/actions/forms/auth/Register'
import validator from 'validator'

class AuthRegisterFormStore {

  constructor() {
    this.bindActions(AuthRegisterFormActions);
    let { meta, username, email, password, passwordRepeat } = AuthRegisterFormStore.initialValues()
    this.meta = meta
    this.username = username
    this.email = email
    this.password = password
    this.passwordRepeat = passwordRepeat
  }

  static initialValues() {
    return {
      meta: {
        submitted: false,
        sending: false,
        valid: true,
        error: false,
        fields: [
          'username',
          'email',
          'password',
          'passwordRepeat'
        ]
      },
      username: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
      passwordRepeat: {
        value: '',
        error: '',
      },
    };
  }

  onUpdateUsername(value) {
    let { username } = AuthRegisterFormStore.initialValues()
    username.value = value
    this.username = username
  }

  onValidateUsername(username) {
    if (username != this.username.value) return;

    let error = '';
    if (!error && !validator.isAlphanumeric(username)) {
      error = 'Username contains unsupported characters!'
    }
    if (!error && username.length < 3) {
      error = 'Username too short!'
    }
    if (!error && username.length > 64) {
      error = 'Username too long!'
    }
    this.username.error = error
    this.meta.valid = AuthRegisterFormStore.isValidForm(this)
  }

  onUpdateEmail(value) {
    let { email } = AuthRegisterFormStore.initialValues()
    email.value = value
    this.email = email
  }

  onValidateEmail(email) {
    if (email != this.email.value) return;

    let error = '';
    if (!error && !validator.isEmail(email)) {
      error = 'Must be an actual email!'
    }
    this.email.error = error
    this.meta.valid = AuthRegisterFormStore.isValidForm(this)
  }

  onUpdatePassword(value) {
    let { password } = AuthRegisterFormStore.initialValues()
    password.value = value
    this.password = password
  }

  onValidatePassword(password) {
    if (password != this.password.value) return;

    let error = '';
    if (!error && password.length < 5) {
      error = 'Password too short! (must be at least 5 characters)'
    }
    if (!error && password.length > 64) {
      error = 'Password too long!'
    }
    this.password.error = error
    this.meta.valid = AuthRegisterFormStore.isValidForm(this)
  }

  onUpdatePasswordRepeat(value) {
    let { passwordRepeat } = AuthRegisterFormStore.initialValues()
    passwordRepeat.value = value
    this.passwordRepeat = passwordRepeat
  }

  onValidatePasswordRepeat(password) {
    if (password != this.passwordRepeat.value) return;

    let error = '';
    if (!error && password != this.password.value) {
      error = 'Passwords must match!'
    }
    this.passwordRepeat.error = error
    this.meta.valid = AuthRegisterFormStore.isValidForm(this)
  }

  onSubmit() {
    this.meta.sending = true
  }

  onSuccess(user) {
    this.meta.sending = false
    this.meta.submitted = true
  }

  onError(error) {
    this.meta.sending = false
    this.username.error = 'Username or Email Taken'
    this.meta.valid = AuthRegisterFormStore.isValidForm(this)
  }

  static isValidForm(form) {
    for (let field of form.meta.fields) {
      if (form[field].error) {
        return false
      }
    }
    return true
  }

  static extractValues(form) {
    let values = {}
    for (let field of form.meta.fields) {
      values[field] = form[field].value
    }
    return values
  }

}

export default alt.createStore(AuthRegisterFormStore);
