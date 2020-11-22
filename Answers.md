1. What problem does the context API help solve? 

- Context API looks to solve the issue of "prop drilling", by using a data store on a context object to pass data to the necesary components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are the only way that information passed to the store in Redux. Actions carry payloads from the application to the store.
- Reducers are functions that take a previos state and an action to return the next state. 
- Store is the entire app's state and stores are used to share state to components throughout the app. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global like component state, but in Redux, "stores" can be used to make the state available anywhere in the app, while component-level state is only available within that component and passed down via props. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- Redux-thunk let's you create actions that return functions. The function uses a store's dispatch method to allow synchronous operations to run after the async functions complete.  
- Action creators allow one to functions that create action in an app. 

5. What is your favorite state management system you've learned and this sprint? Please explain why! I don't really have a favorite at this moment. I am still trying to get a better understanding of them and which I like most. 
