// Libraries
import React from "react";

// Components
import BoxResults from "../../Components/BoxResults/BoxResults";

// Assets
import SearchIcon from "../../Resources/search-normal.svg";

// Styles
import { Input, ContainerInput } from "./styles";

const InputSearch = ({ onChange, data, value }) => {
  return (
    <>
      <ContainerInput>
        <img src={SearchIcon} alt="search icon" />
        <Input type="text" onChange={(value) => onChange(value.target.value)} />
      </ContainerInput>
      {value && <BoxResults data={data} />}
    </>
  );
};

export default InputSearch;
