Feature: Login

  Scenario: Login exitoso
    Given el usuario abre la aplicación
    When inicia sesión con usuario "test" y contraseña "1234"
    Then debe ver la pantalla principal