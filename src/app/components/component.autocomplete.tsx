import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import React, { FunctionComponent } from "react";
import {
  ArrayConst,
  CallBackConst,
  NumberConst,
  StringConst,
} from "../const/const";
import useCommonHelper from "../helpers/common.helper";
import { TCatalogComponent, TTypeCatalog } from "../models/data/data.catalog";
import { TOptionDefault } from "../models/data/data.common";
import { catalogGetOptionsAction } from "../store/catalog/catalog.actionTypes";

export const AutocompleteComponent: FunctionComponent<TCatalogComponent> = ({
  onChangeName,
  typeCatalog,
  value,
  label,
  name,
  optionsBefore = ArrayConst.empty,
  error,
  idCatalog
}) => {
  const {
    state: { catalog },
    dispatch,
  } = useCommonHelper();
  const [inputValue, setInputValue] = React.useState("");

  const changeAutocompleteInput = ({ target }) => {
    handleAutocompleteKey(target.value);
  };

  const handleAutocompleteKey = async (word: string) => {
    if (word && typeof word === "string") {
      resetValue();
      dispatch(
        catalogGetOptionsAction({
          typeCatalog,
          word,
          id:idCatalog
        })
      );
    }
  };

  const resetValue = () => {
    setInputValue("");
    onChangeName(name, null, false);
  };

  const changeVal = (event: any, newValue: TOptionDefault | null) => {
    onChangeName(name, newValue, false);
  };
  const inputChangeVal = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const getOptionsAutocomplete = (): Array<TOptionDefault> => {
    return catalog[typeCatalog].loading
      ? [{ label: "cargando...", value: null }]
      : catalog[typeCatalog].options;
  };

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={changeVal}
        inputValue={inputValue}
        onInputChange={inputChangeVal}
        onChangeCapture={changeAutocompleteInput}
        freeSolo
        blurOnSelect
        clearOnBlur
        renderOption={(propsR, option) => (
          <Box component="li" {...propsR}>
            {option.label !== "cargando..." ? (
              option.label
            ) : (
              <div className="w-100 d-flex justify-content-center">
                {" "}
                <CircularProgress size={"20px"} />
              </div>
            )}
          </Box>
        )}
        className="py-1 w-100 my-1"
        options={getOptionsAutocomplete()}
        renderInput={(params) => (
          <TextField
            error={error !== ""}
            helperText={error}
            {...params}
            className="form-control"
            label={label}
          />
        )}
      />
    </div>
  );
};

AutocompleteComponent.defaultProps = {
  onChangeName: CallBackConst.empty,
  optionsBefore: ArrayConst.empty,
  typeCatalog: "allCurriculums",
  value: NumberConst.zero,
  name: StringConst.empty,
  error: StringConst.empty,
};

export default AutocompleteComponent;
