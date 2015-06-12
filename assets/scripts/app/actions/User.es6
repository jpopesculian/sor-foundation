import alt from 'app/alt'

class UserActions {

  authenticatedUser(user) {
    this.dispatch(user);
  }

  noUser(error) {
    this.dispatch(error);
  }

}

export default alt.createActions(UserActions);
