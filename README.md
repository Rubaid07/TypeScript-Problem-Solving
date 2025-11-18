# What are some differences between interfaces and types in TypeScript?
Interface মূলত একটা blueprint বা নকশা যেটা দিয়ে আমরা object এর structure define করি। এটা বলে দেয় যে একটা object এ কোন কোন property থাকবে।
```
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Rubaid",
  age: 18
};
```
##
Type ও একই কাজ করে, তবে এটা আরেকটু বেশি flexible। শুধু object না, অন্য অনেক কিছুর জন্যও use করা যায়।

```
type User = {
  name: string;
  age: number;
};

const user2: User = {
  name: "Jubaid",
  age: 19
};
```

মোটকথা হলো যে Interface সাধারণত object structure আর Type আরও flexible, অনেক কিছুর type বানানো যায়

---
# Explain the difference between any, unknown, and never types in TypeScript.
- any Type:
  any মানে হলো যেকোনো type হতে পারে। এটা use করলে TypeScript আর কোনো type checking করে না।
```
let value: any;

value = 10; 
value = "Hello";
value = true;
```
- unknown Type:
  unknown ও যেকোনো type হতে পারে, কিন্তু এটা any থেকে safe। কারণ এটা ব্যবহার করতে চাইলে আগে টাইপ চেক করতে হয়।
```
let x: unknown = "hi";
if (typeof x === "string") {
  console.log(x.length);
}
```
- never Type:
  never মানে এমন type যেটার কোনো value হয়ই না। যে ফাংশন কখনো return করে না, যেমন error দেয়। 
```
function boom(): never {
  throw new Error("Crash!");
}
```