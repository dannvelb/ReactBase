import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PeriodProvider } from "../store/providers/period.provider";
import { CallBackConst, NumberConst, StringConst } from "../const/const";
import { InjectProviders } from "../helpers";
import { TTypeCatalog } from "../models/data/data.catalog";
import useCommonHelper from "../helpers/common.helper";
import { catalogGetOptionsAction } from "../store/catalog/catalog.actionTypes";
import { TOptionDefault } from "../models/data/data.common";

export enum selectCatalogTypes {
  periodsPrimary,
  periodsSecondary,
}

type TSelectCatalogComponent = {
  label: string;
  typeCatalog: TTypeCatalog;
  name: string;
  value: any;
  onChangeName: any;
  optionsDefaultBefore?: Array<TOptionDefault>;
  idCatalog?:number;
};

const SelectCatalogComponent: React.FunctionComponent<
  TSelectCatalogComponent
> = ({ label, name, value, onChangeName, typeCatalog, idCatalog }) => {
  const {
    dispatch,
    state: { catalog },
  } = useCommonHelper();
  const handleChange = (event: SelectChangeEvent) => {
    onChangeName(name, event.target.value as string, false);
  };

  useEffect(() => {
    getOptionsCatalog();
  }, []);

  const getOptionsCatalog = () => {
    dispatch(
      catalogGetOptionsAction({
        typeCatalog,
        word: "",
        id:idCatalog
      })
    );
  };

  return (
    <div className="w-100 my-1">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          className="form-control p-0"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">{"Selecciona una opcion"}</MenuItem>
          {!catalog[typeCatalog].loading &&
            catalog[typeCatalog].options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

SelectCatalogComponent.defaultProps = {
  label: StringConst.empty,
  onChangeName: CallBackConst.empty,
  typeCatalog: "allCurriculums",
  idCatalog: NumberConst.zero
};

export default SelectCatalogComponent;
