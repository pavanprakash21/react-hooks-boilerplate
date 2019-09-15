/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";

// TODO: Fill up the missing pieces and make it work
function HookHello() {
  return (
    <>
      <marquee>
        <h1>
          Hello {firstName} {lastName}
        </h1>
      </marquee>
      <form>
        <input
          type="text"
          value={firstName}
          onChange={e => setState(/* update code here */)}
        />
        <input
          type="text"
          value={lastName}
          onChange={e => setState(/* update code here */)}
        />
      </form>
    </>
  );
}

export default HookHello;
