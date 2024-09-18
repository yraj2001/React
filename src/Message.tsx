function A() {
  return <h1>Hello</h1>;
}
function B() {
  return <h1>It's my first React App</h1>;
}

function Message() {
  let name: string = "Yraj";
  if (name)
    // when ever a variable should be used it should be enclosed in {}
    return <h1>Hello {name}</h1>;
  else return <h1> Hello world</h1>;
}

export default Message;
