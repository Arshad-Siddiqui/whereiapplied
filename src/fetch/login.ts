export default function login(email: string, password: string): Promise<any> {
  return fetch("https://whereiapplied.onrender.com/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
