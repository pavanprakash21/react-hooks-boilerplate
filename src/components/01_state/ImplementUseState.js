/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

// TODO: Implement your own useState
function useState() {}

function HookHelloSelf() {
  const [firstName, setFirstName] = useState("some");
  const [lastName, setLastName] = useState("value");

  return (
    <div className="App">
      <marquee>
        <h1>
          Hello {firstName} {lastName}
        </h1>
      </marquee>
      <form>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default HookHelloSelf;
