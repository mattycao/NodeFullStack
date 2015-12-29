1. Event emitter allow programmers to subscribe to events that they are interested.
2. The standard callback pattern. CPS: continuous passing style
3. The end is not evaluated by a returning value to indicate the end. It is returned by calling continuous function with value as a arguments.
4. The event emitter pattern: 1. event emitter, 2. event listener
5. It is asynchronous.
6. Using the callback pattern when you want to regain the control of the function. Using the emitter pattern when the event happens multiple times.
7. If error occurs, most node will throw en error to outside.
8. The event emitter pattern has such following methods:
    1. addListener, alias for on method
    2. on
    3. once
    4. removeListener
    5. removeAllListener
