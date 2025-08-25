# First Mobile App with Expo Router

This repository documents the process of setting up my first mobile application using **React Native with Expo Router**.  
The objective was to scaffold a new Expo app, make simple modifications, run it on a physical device, and explore the `reset-project` command.

---

## 📂 Steps Followed

### 1. Navigate to Project Directory
```bash
cd prodev-mobile-setup
````

### 2. Initialize Expo Project

Created a new Expo Router project in the current directory:

```bash
npx create-expo-app@latest .
```

### 3. Modify the Home Screen

* Opened the file: `app/(tabs)/index.tsx`
* Changed the default text:

  ```tsx
  // Before
  <Text>Welcome!</Text>

  // After
  <Text>** First App Created**</Text>
  ```

### 4. Run and Test the Application

Started the Expo development server:

```bash
npx expo start
```

**Observations:**

* A QR code was generated in the terminal.
* Scanned with **Expo Go** app on my Android device.
* Application successfully loaded and displayed `** First App Created**`.
* Metro bundler provided additional commands (`r` for reload, `j` for debugger, etc.).

---

## 🔄 Reset Project

Ran the reset command:

```bash
npm run reset-project
```

**Expected behavior:**

* Existing files should move into an `app-example` directory instead of being deleted.

**What happened:**

* The script prompted:

  ```
  Do you want to move existing files to /app-example instead of deleting them? (Y/n): y
  ```
* After confirming with `y`, it attempted to move files but failed with a permissions error:

  ```
  ❌ Error during script execution: EPERM: operation not permitted, rename
  '...\prodev-mobile-app-0x00\app' ->
  '...\prodev-mobile-app-0x00\app-example\app'
  ```

**Reason:**

* On Windows, certain files in the `app` directory were in use (locked by VS Code or the running Metro server).
* This prevented the rename/move operation.

---

## 📝 Key Takeaways

* **Scaffolding:** Expo Router makes setting up a React Native app fast and simple.
* **Running the App:** Works smoothly on physical devices using Expo Go.
* **Reset Command:** Intended to archive the existing project into `app-example`, but may fail due to file permission issues on Windows.

  * Workaround: Close VS Code/Metro server and re-run, or manually move the `app` folder into `app-example`.

---

## 📂 Repository Structure After Setup

```
prodev-mobile-setup/
└── prodev-mobile-app-0x00/
    ├── app/                 # Current app source
    ├── app-example/         # Target directory for reset (incomplete due to error)
    ├── constants/           # Shared styling constants
    ├── package.json
    ├── README.md
    └── ...
```

---

## ✔️ Status

✅ First mobile app created and tested successfully.
⚠️ Reset script encountered a permission error; manual handling may be required on Windows.
