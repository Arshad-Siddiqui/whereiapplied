export default function getApps() {
  return fetch("https://whereiapplied.onrender.com/applications", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  }).then((res) => res.json());
}
