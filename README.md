
 1. What is JSX, and why is it used?
### Ans: 
####  JSX means JavaScript XML. It's looks like html but it actually works inside javascript.
#### It's look clean and simple. We can write html-like code directly into JavaScript, thats why we used it. 


 2. What is the difference between State and Props?
### Ans:
- state: State is like variable we can change it, update it.
- Props: Props is like argument. We give it to a component. Props can passed from parent to child.



 3. What is the useState hook, and how does it work?
 ### Ans: useState is a react hook to create an d update state.
 example: Const [count, setCount]= useState(0);
 setCount(Count+1);// react update the state

 4. How can you share state between components in React?
 ### Ans: we can share state between components by Lift State Up, put the state in the parent component and pass it into children by props.

 5. How is event handling done in React?
### ans: we can do it by camelcase like (onClick={function}) and pass a function in to it.
