const Navbar = () => {
  return (
    <nav>
      <a href="/" className="site-title">
        LOGO
      </a>
      <ul>
        <li>
          <a href="/compare">Compare</a>
        </li>
        <li>
          <a href="/sign-in">Sign In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
