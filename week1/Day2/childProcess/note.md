1. For the CPU intensive tasks, we should assign a different process to free the event loop.
2. In node, we mainly use the child-process lib. 
3. using the exec, we can execute the external commands.
4. Remember the environment variables are passed between processes using the operating systems, so all the values arrives at the child process as a string.
5. The drawbacks of using exec:
    1. exec() is not allowed to communicate with child process
    2. output of the child process is buffered, and it will consume the memory
6. the spawn() function: The spawn function call returns a ChildProcess object, which is a handler object that 
encapsulates access to the real process. Here you assign this new descriptor to the variable named child.
7. Unlike the spawn, the fork will build a communication between the parent and child, the childprocess object has a method called:
n.send. see the fork.js for example
8. The spawn communication doesn't get it
9. exit, the code: 0 is success, 1 is failure
10. But if the child process is killed, it will not has a code, but has a signed returned. See the exit2
11. Notice, if the child process handle the stop signal event, it will not get a right behaviour. So we need use the SIGKILL and SIGSTOP, which are signals
handled by OS. THe process cannot override the behavior.