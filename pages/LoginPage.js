import BasePage from './BasePage'
import { usernameInput, passwordInput, loginButton } from '../selectors/android/login.selectors'

class LoginPage extends BasePage {
  get username() {
    return $(usernameInput)
  }

  get password() {
    return $(passwordInput)
  }

  get loginBtn() {
    return $(loginButton)
  }

  async login(user, pass) {
    await this.type(this.username, user)
    await this.type(this.password, pass)
    await this.click(this.loginBtn)
  }
}

export default new LoginPage()