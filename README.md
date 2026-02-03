# 📱 Overland Mobile Automation Framework

This repository contains a **mobile test automation framework** built with **Appium**, **WebdriverIO**, and **Cucumber (BDD)**.

The main goal of this project is to:

* Reuse **BDD test cases (Gherkin)** as the single source of truth
* Translate them into **maintainable and scalable automation scripts**
* Follow **industry best practices** for mobile automation

---

## 🚀 Tech Stack

* **Node.js**
* **Appium** (mobile automation)
* **WebdriverIO** (test runner)
* **CucumberJS** (BDD framework)
* **Chai** (assertions)
* **Android (real device support)**

---

## 🧱 Project Architecture

The framework follows a **clean separation of concerns** using the **Page Object Model (POM)** pattern:

```
overland-appium-bdd/
│
├── config/                 # Environment & capabilities configuration
│   └── capabilities.android.js
│
├── features/               # BDD features & step definitions
│   ├── login/
│   │   ├── login.feature
│   │   └── login.steps.js
│   └── hooks.js
│
├── pages/                  # Page Objects (UI logic)
│   ├── BasePage.js
│   └── LoginPage.js
│
├── selectors/              # Platform-specific selectors
│   └── android/
│       └── login.selectors.js
│
├── utils/                  # Utilities & helpers
│
├── reports/                # Test execution reports
│
├── wdio.conf.js            # WebdriverIO configuration
├── package.json
└── README.md
```

### 📌 Key Principles

* **Feature files** contain business-readable scenarios only
* **Step definitions** orchestrate actions (no UI logic)
* **Page objects** encapsulate all interactions
* **Selectors** are fully decoupled and platform-specific

---

## 🧪 BDD Workflow

1. QA writes test scenarios in **Gherkin** (`.feature` files)
2. Automation maps steps to step definitions
3. Step definitions reuse Page Objects
4. UI changes only affect Pages or Selectors — not Features

Example:

```gherkin
Scenario: Successful login
  Given the user opens the application
  When the user logs in with username "test" and password "1234"
  Then the user should see the home screen
```

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

* Node.js (v18+ recommended)
* Android Studio
* Android SDK & platform-tools
* Appium (installed globally)

```bash
npm install -g appium
```

---

### 2️⃣ Environment Variables (Windows)

Make sure the following environment variables are set:

* **ANDROID_HOME**

```
C:\Users\<your-user>\AppData\Local\Android\Sdk
```

* Add to **PATH**:

```
%ANDROID_HOME%\platform-tools
```

Verify:

```bash
adb version
adb devices
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

## 📱 Running Tests on a Real Android Device

### 1️⃣ Prepare the device

* Enable **Developer Options**
* Enable **USB Debugging**
* Connect the device via USB

Verify:

```bash
adb devices
```

---

### 2️⃣ Configure Capabilities

Edit:

```
config/capabilities.android.js
```

Example:

```js
exports.androidCaps = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android Device',
  'appium:udid': '<your-device-id>',
  'appium:app': '/path/to/app.apk',
  'appium:noReset': true
}
```

---

### 3️⃣ Start Appium Server

```bash
appium
```

---

### 4️⃣ Run the Tests

```bash
npm run wdio
```

or

```bash
npx wdio run ./wdio.conf.js
```

---

## 🏷️ Best Practices Followed

* No hard-coded waits
* Accessibility IDs preferred
* Thin step definitions
* Single responsibility per Page Object
* No test logic inside feature files

---

## 🧩 Future Enhancements

* Allure Reports integration
* Android & iOS dual-platform support
* CI/CD execution (GitHub Actions)
* Test tagging (@smoke, @regression)
* Parallel execution

---

## 👨‍💻 Author

**Ilich Andrés García Ramos**
QA Automation Engineer

---

## 📄 License

This project is intended for internal use and learning purposes.

---

Happy Testing! 🚀