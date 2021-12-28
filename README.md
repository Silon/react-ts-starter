<h1 align="center">React SPA Starter with Typescript</h1>
<p align="center">
Project made with ❤️ and based on experience.
</p>

## 🛒 Tech Stack

- React
- Typescript
- Redux-Toolkit
- CSS Modules

## 🚀 Quick Start

```ts
  yarn install && yarn start
```

## ⚙ CLI Generating

Some parts of application may be automatically generated by plop.

### Components

Generated component will be placed inside `src/components` directory

### Reducers

Generated reducer will be placed inside `src/redux` directory and automatically added to reducers list in `combineReducers` in `src/redux/reducers.ts`.
Reducer can be [persisted](https://github.com/rt2zz/redux-persist) and if you want to use this feature you have to confirm it after command run.

```ts
// Generate new component
  yarn new-component [name]

// Generate new reducer
  yarn new-reducer [name]
```

---

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
