# 1
```javascript
 const keys = Object.keys(messages); 
```

`Object.keys()` is a built-in JavaScript method that takes an object as an argument and returns an array containing all the enumerable property keys of that object.

For example, if the `messages` object looks like this:

```json
{
  "message1": {
    "text": "Hello",
    "sender": "UserA"
  },
  "message2": {
    "text": "Hi there",
    "sender": "UserB"
  },
  "message3": {
    "text": "Greetings",
    "sender": "UserA"
  }
}
```

Then `keys` will be assigned the following array:

```javascript
["message1", "message2", "message3"]
```


# 2
```jsx
<div className="chat-title">
  {chat?.title}
</div>
```

- `chat?.title` uses the optional chaining operator `?.`, which means it will only access the `title` property if the `chat` object exists and the `title` property is present. This is a safe way to access properties and avoids errors if `chat` or `title` is `null` or `undefined`.

# 3 message?.attachments?.length>0
这段代码是使用了可选链（optional chaining）语法来判断消息对象（message）是否存在附件（attachments）并且附件的数量（length）是否大于0。

具体判断的过程如下：

1. 首先，代码中的`message?.attachments`表示尝试获取消息对象的附件属性。如果消息对象存在并且具有附件属性，那么表达式的结果就是附件属性的值。如果消息对象不存在或者没有附件属性，那么表达式的结果就是`undefined`。

2. 接着，对获取到的附件属性应用可选链（`?.`）语法，使用`.`操作符尝试获取附件属性的长度。如果附件属性存在并且具有长度属性，那么表达式的结果就是附件属性的长度。如果附件属性不存在或者没有长度属性，那么表达式的结果就是`undefined`。

3. 最后，判断表达式的结果是否大于0。如果结果大于0，则条件为真（true），表示消息对象存在附件并且附件数量大于0；如果结果为0或者`undefined`，则条件为假（false），表示消息对象不存在附件或者附件数量为0。

根据这个判断结果，可以在条件语句块中执行相应的代码来处理具有附件的情况。

