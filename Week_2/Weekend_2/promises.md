## All About Promises

### Callbacks vs Promises

Lets talk about asynchronous vs synchronous code first...

- With asynchronous, we don't know when the code will run
  - This includes code that relies on network requests, threads, or some kind of unknowable time
- With synchronous code, code is executed following a single time line, we know when and in what order it will run

So how do we deal with async code? - **PROMISES**

## Callbacks vs Thens

- Be default, JS uses callbacks to handle aysnc code but there are some issues with this:
  - Hard to handle errors
  - Becomes hard to follow
  - Proves more difficult to debug
- Look at this example using callbacks:

```javascript
unction loadImage (src, parent, callback){
   let img = document.createElement('img')
   img.src = src
   img.onload = callback
   parent.appendChild(img)
}

// Pyramid Of Doom with callbacks

loadImage('above-the-fold.jpg', imgContainer, function(){
   loadImage('just-below-the-fold.jpg', imgContainer2, function(){
       loadImage('farther-down-the-fold.jpg', imgContainer3, function(){
           loadImage('abstract-art.jpg', imgContainer4, function(){
               loadImage('last-one.jpg', imgContainer5)
           })
       })
   })
})
```

But what if we used **promises** instead to write the same logic? It would look something look this:

```javascript
const sequence = get("example.json").then(doSomething).then(doSomethingElse);
```

Look how much simpler this is!

### Stages of Promises

1. Wrapping -> syntax, Promise structure
2. Thening -> Action (when it works)
3. Catching -> Recovery (when there's an error)
4. Chaining -> sequence of async work

There are 4 states that a promise can have:

1. Fulfilled (Resolved): It works! 👍
2. Rejects: It didn't work! 👎
3. Pending: Has not been fulfilled or rejected
4. Settled: Something happened!

- Promises execute in the main thread, which mean they are still potentially blocking

### Wrapping

- Promises are try, catch wrappers around code that will finish at an unpredictable time

```javascript
new Promise(function (resolve, reject) {
  const value = doSomething();
  if (thingWorked) {
    resolve(value);
  } else if (somethingWentWrong) {
    reject();
  }
})
  .then(function (value) {
    //success
    return nextThing(value);
  })
  .catch(rejectFunction);
```

### Error Handling with Promises

1. Using a `.catch`

```javascript
get("example.json").then(resolveFunc).catch(rejectFunc);
```

2. Chaining a second `.then` to handle the error

```javascript
get("example.json").then(resolveFunc).then(undefined, rejectFunc);
```

- Can't call both the resolve and reject function in the same `.then`
- Recommended to use `.catch`
