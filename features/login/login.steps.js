import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../pages/LoginPage';

Given('el usuario abre la aplicación', async () => {
  // App launch ya lo maneja Appium
})

When(
  'inicia sesión con usuario {string} y contraseña {string}',
  async (user, pass) => {
    await LoginPage.login(user, pass);
  }
)

Then('debe ver la pantalla principal', async () => {
  // assertion aquí
})