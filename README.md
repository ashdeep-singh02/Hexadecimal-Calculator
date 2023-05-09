## Hexadecimal Calculator

## Project Description

Using ReactJS to build a **Hexadecimal Calculator**. Project is intended to help practice creating **components** in React, and thinking in terms of organizing your website/app into components and breaking it down into reusable parts.

---

## Running React App
Deployed locally via `npm run start`.
Starts up app at `http://localhost:3000`.

## Project Components/Highlights

### 1) Calculator Buttons & UI 

```text
AS a USER 
WHEN you view the app
You SHOULD be presented with a clean user interface that represents a Hexadecimal Calculator
AND you SHOULD see buttons 0 - F for hexadecimal value input
AND you SHOULD see buttons "+", "-", "*", "/" for arithmetic operation input
AND you should see a "=" button to evaluate the current input
AND you should see a "Clear" button to clear out the current input
```

```text
AS a USER
WHEN you view the app
You SHOULD be presented with a clean user interface that represents a Hexadecimal Calculator
AND you SHOULD see an input display bar that shows the current input state of the calculator
```

### 2) Calculator Input State Functionality
```text
AS a USER
WHEN you INITIALLY interact with the app
You SHOULD have the value 0 as the initial state of your input
AND you SHOULD see this state being displayed
```

```text
AS a USER
WHEN you interact with the app
AND you click on any of the hexadecimal value input buttons
You SHOULD see the input state display update with the values you entered
```

```text
AS a USER
WHEN you interact with the app
AND you click on any of the arithmetic operation buttons
The Calculator SHOULD keep track of this arithmetic operation in it's input state
AND it should perform this arithmetic operation between two successive input values
```

```text
AS a USER
WHEN you interact with the app
AND you click on the "=" button
The calculator SHOULD evaluate your current input state
AND you should see the input display being updated with the evaluated value
```

```text
AS a USER
WHEN you interact with the app
AND you click on the "Clear" button
The calculator SHOULD clear your current input state, and reset back to 0
AND you should see the input display being updated to this reset value.
```

### 3) Error Handling Input State
```text
AS a USER
WHEN you interact with the app
AND you perform an illegal arithmetic operation between to numbers
The calculator SHOULD have your input state evaluate to an error value
AND you should see this error updated in the input state display
```

```text
AS a USER
WHEN you interact with the app
AND you perform an action that causes a number overflow (MAX/MIN)
The calculator SHOULD have your input state evaluate to an error value
AND you should see this error updated in the input state display
```

### 4) Code Organizing 
```text
AS a DEVELOPER
WHEN you checkout and navigate to the source code
you SHOULD see the code organized in a logical manner
AND you should see all my component files listed in their own `components` directory
AND you should see all my styling files listed in their own `styles` directory
```
