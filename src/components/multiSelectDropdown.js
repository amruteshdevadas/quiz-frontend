import React, { useState } from "react";
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    Select,
    FormControl
} from "@mui/material";

export function MultiSelect(props) {
    const { names = [], selectedNames, setSelectedNames, placeHolder } = props

    return (
        <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel>{`${placeHolder}`}</InputLabel>
            <Select
                multiple
                value={selectedNames}
                onChange={(e) => setSelectedNames(e.target.value)}
                input={<OutlinedInput label={`${placeHolder}`} />}
                MenuProps={{ style: { maxHeight: '250px' } }}
            >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
