import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import MealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImg} alt="mealsImage"/>
      </div>
    </Fragment>
  );
};

export default Header;
