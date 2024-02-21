# Testing Practice 

This practice is to help with getting comfortable with writing TDD Test in JavaScript using jest

## Table Of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- AnalyzeArray  <!-- takes an array of numbers and returns an object with the following properties: average, min, max, and length -->
- CaesarCipher  <!-- takes a string and a shift factor and returns it with each character “shifted” -->
- Calculator    <!-- An object that contains functions for the basic operations: add, subtract, divide, and multiply -->
- Capitalize    <!-- takes a string and returns it with the first character capitalized -->
- ReverseString <!-- takes a string and returns it reversed -->

## Getting Started

```bash
To get started, run the following command in your project directory:

npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
## Usage 

```bash
npm test analyzeArray/analyzeArray.test.js 
npm test caesarCipher/caesarCipher.test.js 
npm test calculator/calculator.test.js
```