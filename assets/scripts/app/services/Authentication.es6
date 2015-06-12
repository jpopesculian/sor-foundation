import socket from 'app/services/Socket'

class Authentication {

  constructor() {
    this.user = {}
  }

  who() {
    let self = this
    return new Promise(function(resolve, reject) {
      socket.get('/auth/who')
        .then((res) => {
          let user = res.data
          self.user = user
          resolve(user)
        }, (res) => {
          reject(res.error)
        });
    });
  }

}

export default new Authentication()
