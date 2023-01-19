WEEK ONE 

Challenge: Draw and explain in a diagram of how the queue data structure works.

Answer: 

A queue is an ordered, one-way data structure, storing data sequentially on a first in first out (FIFO) basis. It has front and rear properties denoting the node(s) at the beginning and end of the queue, as well as a size property representing the total amount of nodes currently in the queue. 

Nodes are ordered linearly (nodes in a queue have next and value properties), with each node connecting to the node that comes AFTER it in the queue. It is through this connection that we're able to traverse through the nodes in any given queue. Nodes do not have any links to the node that came BEFORE it in the queue (there is no before/previous property for nodes in a queue). We'd be unable to get to the penultimate without first looping through the entire queue until we reached our desired node. 

Use Cases:
    Useful when we want to sequentially add elements to the end of a list or for removing the first element from a list.

FIFO Behaviour  means:
    - Nodes are added to the end of the queue.
    - Nodes are removed from the front of the queue.

                TO-DO: ADD DIAGRAM!



Challenge: Draw and explain in a diagram of how the stack data structure works.

Answer:

A stack is an ordered, one-way data structure. It's similar to a queue, but instead operates on a last in first out (LIFO) basis. It has top and bottom properties denoting node(s) at the, well, top and bottom of the stack (the first and last nodes). Nodes can only be added to or removed from the top of the stack. A stack's size property will have a limit (unlike queue which can go on and on unless a fixed size is enforced); if that limit is exceeded we have a 'stack overflow'.

Use Case:
    Useful when we want to sequentially add elements to the front of a list or for removing the last element from a list.

LIFO Behaviour  means:
    - Nodes are added to the top of the stack.
    - Nodes are removed from the top of the stack.

                TO-DO: ADD DIAGRAM!
