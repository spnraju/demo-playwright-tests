const IPT_USERNAME = '#user-name';
const IPT_PASSWORD = '#password';
const BTN_LOGIN = '#login-button';
const LOGO_SAUCE = '.login_logo';

export class Login {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'networkidle', timeout: 5000 });
    await this.page.waitForSelector(LOGO_SAUCE, 'attached', true);
  }

  async login(username, password) {
    await this.page.type(IPT_USERNAME, username);
    await this.page.type(IPT_PASSWORD, password);
    await this.page.click(BTN_LOGIN);
  }
}
