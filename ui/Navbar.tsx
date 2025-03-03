import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center h-16 px-4 bg-muted-foreground text-background">
      <span>Password Manager</span>
      <ul className="flex gap-5 items-center justify-start">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
