/* const asyncCall = () => {
  setTimeout(() => {
    return {message: "Ez egy időzített üzenet."};
  }, 2000);
};
const value = asyncCall();
console.log(value.message);


FETCH

let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"};

fetch("http://localhost:3000/users", fetchInit).then(
    data => data.json(),
    err => console.log(err)
    ).then(users => console.log(users));
    
KOMBINÁLT

    const postPromise = fetch("http://localhost:3000/users");
postPromise
  .then(data => data.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });


  */