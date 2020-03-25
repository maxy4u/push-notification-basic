console.info("Loaded Service Worker");
self.addEventListener("push", event => {
  const data = event.data.json();
  console.log("Got push ", data);
  self.registration.showNotification(data.title, {
    body: "Hello World!",
    icon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEX///8AAABSUlIlJSUYGBj39/efn58zMzMuLi43NzcbGxsVFRUqKiqpqamurq50dHS7u7tvb2+BgYHMzMxERETx8fGJiYnr6+uVlZXFxcXk5OTV1dVbW1vc3NxKSkpkZGTG8PjEAAAAwElEQVQ4jd2Q2RaDIAxEM+ACuIC4Vqv9/78s2HPaaqk+t/NEMjchCdH/KU5OAHYC2LQ49Gsh2SHQSAFz4BsuuOJu0m8Ay7mK0FJXhf0ezs9ANIAHmxhEKoObUgMyBLjCBLhQjBwIrWsxFA4oOUYdbGFRT/CS1AIBQLsFrh6YiZZPYBZAT9SpZvIbY3+x2Zc+c/EmWlX5VLqJst2OXix++bht/1jHA3RZ2sdL7q9pJN6kQpcaS8tEFOWLLuaA/dO6A6MGBnoq3JRWAAAAAElFTkSuQmCC"
  });
});
