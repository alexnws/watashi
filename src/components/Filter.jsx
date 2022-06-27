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
  const myOptions = ["Croissant", "Décroissant", "Nom", "Note client"];

  return (
    <div>
      <Autocomplete
        filterOptions={filterOptions}
        options={myOptions}
        renderInput={(params) => (
          <TextField
            placeholder="Trier"
            {...params}
            style={{ backgroundColor: "white", width: "150px" }}
          />
        )}
      />
    </div>
  );
};

export default App;
