// Libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Selectors
import { getSearchData } from "../../Redux/Search/search.selectors";

// Actions
import { actionSearch } from "../../Redux/Search/search.actions";

// Controls
import InputSearch from "../../Controls/InputSearch/InputSearch";

// Assets
import Logo from "../../Resources/Logo.svg";

// Styles
import { MainContainer } from "./styles";

const Search = () => {
  const dispatch = useDispatch();
  const Data = useSelector(getSearchData);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(actionSearch(value));
  }, [value]);

  return (
    <MainContainer>
      <div className="input-container">
        <img className="img-logo" src={Logo} alt="logo" />
        <br />
        <InputSearch value={value} onChange={setValue} data={Data} />
      </div>
    </MainContainer>
  );
};

export default Search;
