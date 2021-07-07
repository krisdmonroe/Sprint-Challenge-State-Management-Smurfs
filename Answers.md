1. What problem does the context API help solve?

Share data across all components of app, prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions is what the actions will dispatch or the name of the action reducers is puting those actions to work and store is just the ability to store data for all compnents.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Aplication state is global and component state is local.Compnents state if you only want the data past down to that compnent and children of that compnent via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Allows you to write middleware that returns a function instead of an action. Turn your creators to function or gives them the ability to be functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state management system is just useState simple and easy to understand.
