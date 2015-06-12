import alt from 'app/alt'
import http from 'app/services/Http'

class AuthRegisterFormActions {

  updateUsername(username) {
    this.dispatch(username);
    setTimeout(this.actions.validateUsername.bind(this, username), 300)
  }

  validateUsername(username) {
    this.dispatch(username);
  }

  updateEmail(email) {
    this.dispatch(email);
    setTimeout(this.actions.validateEmail.bind(this, email), 300)
  }

  validateEmail(email) {
    this.dispatch(email);
  }

  updatePassword(password) {
    this.dispatch(password);
    setTimeout(this.actions.validatePassword.bind(this, password), 300)
  }

  validatePassword(password) {
    this.dispatch(password);
  }

  updatePasswordRepeat(password) {
    this.dispatch(password);
    setTimeout(this.actions.validatePasswordRepeat.bind(this, password), 300)
  }

  validatePasswordRepeat(password) {
    this.dispatch(password);
  }

  submit(form) {
    http.post('/user/register', form)
      .then((res) => {
        this.actions.success(res.data)
      }, (error) => {
        this.actions.error(error)
      });
    this.dispatch(form);
  }

  success(user) {
    this.dispatch(user);
  }

  error(error) {
    this.dispatch(error);
  }

}

export default alt.createActions(AuthRegisterFormActions);
