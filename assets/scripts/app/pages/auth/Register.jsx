import React from 'react';
import router from 'app/router';

import AuthRegisterFormActions from 'app/actions/forms/auth/Register';
import AuthRegisterFormStore from 'app/stores/forms/auth/Register';

class AuthRegister extends React.Component {

    constructor(props) {
        super(props)
        this.state = { form: AuthRegisterFormStore.getState() }
        this.listeners = {
          AuthRegisterForm: this.onFormUpdate.bind(this)
        }
    }

    updateField(field) {
      let fieldName = field.charAt(0).toUpperCase() + field.slice(1);
      let action = AuthRegisterFormActions['update' + fieldName];
      return function(event) { action(event.target.value); };
    }

    submit(event) {
      event.preventDefault();
      let { form } = this.state;
      if (AuthRegisterFormStore.isValidForm(form)) {
        let data = AuthRegisterFormStore.extractValues(form)
        AuthRegisterFormActions.submit(data)
      }
    }

    onFormUpdate() {
      let form = AuthRegisterFormStore.getState();
      if (form.meta.submitted) {
        router.transitionTo('app.survey')
      }
      this.setState({ form: form })
    }

    render() {
      return false;
    }

    componentWillMount() {
      AuthRegisterFormStore.listen(this.listeners.AuthRegisterForm)
    }

    componentWillUnmount() {
      AuthRegisterFormStore.unlisten(this.listeners.AuthRegisterForm)
    }
}

export default AuthRegister
