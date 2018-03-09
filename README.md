# PubSub.js

Small script for Pub/Sub Pattern.
<br/>
Useful when building communications with different modules and helps to achieve loose coupling.

# Usage

PubSub.subscribe

```
PubSub.subscribe('news', function(data){
   // do something with data
}, 'listener1');

// listener1 is optional - use when we need to unsubscribe to particular topic

```


PubSub.publish

```
PubSub.publish('news', {message: 'this is new news!'});

// all subscribed listeners for 'news' topic will be notified

```


PubSub.unsubscribe

```
PubSub.unsubscribe('news', 'listener1');

// listener with id: listener1 will no longer receive notifications for topic 'news'

```