import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header class="heading d-flex grow-shrink-basis align-center">
        <div class="heading-title-icon d-flex grow-shrink-basis align-center">
          
          <h1 class="heading-title">
            <Link to="/" class="link">
              Page Title
            </Link>
          </h1>
        </div>
        <nav class="navigation">
          <ul class="list-non-bullet">
            <li class="list-item-inline">
              <Link to="#" class="link cursor">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
