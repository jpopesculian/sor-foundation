import React from 'react';
import router from 'app/router';

import AuthLoginFormActions from 'app/actions/forms/auth/Login';
import AuthLoginFormStore from 'app/stores/forms/auth/Login';

class AuthLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = { form: AuthLoginFormStore.getState() }
        this.listeners = {
          AuthLoginForm: this.onFormUpdate.bind(this)
        }
    }

    updateField(field) {
      let fieldName = field.charAt(0).toUpperCase() + field.slice(1);
      let action = AuthLoginFormActions['update' + fieldName];
      return function(event) { action(event.target.value); };
    }

    submit(event) {
      event.preventDefault();
      let { form } = this.state;
      let data = AuthLoginFormStore.extractValues(form)
      AuthLoginFormActions.submit(data)
    }

    onFormUpdate() {
      let form = AuthLoginFormStore.getState()
      if (form.meta.submitted) {
        router.transitionTo('app.profile')
      }
      this.setState({ form: form })
    }

    render() {
      return false;
    }

    componentWillMount() {
      AuthLoginFormStore.listen(this.listeners.AuthLoginForm)
    }

    componentWillUnmount() {
      AuthLoginFormStore.unlisten(this.listeners.AuthLoginForm)
    }
}

export default AuthLogin
