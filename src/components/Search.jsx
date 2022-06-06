import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const App = () => {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  // Sample options for search box
  const myOptions = [
    "Canape",
    "Etagere en bois d'accajou",
    "Chaise",
    "Chaise en bois blanc",
    "Etagere en bois blanc",
    "Canape en tissu",
    "Canape en cuire",
  ];

  return (
    <div>
      <Autocomplete
        filterOptions={filterOptions}
        options={myOptions}
        renderInput={(params) => (
          <TextField
            placeholder="Search..."
            {...params}
            style={{ backgroundColor: "white", width: "150px" }}
          />
        )}
      />
    </div>
  );
};

export default App;
