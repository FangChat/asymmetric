"use client";
import { Input } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

export default function RegisterPage(){
  const [ edition, setEdition ] = useState('');
  const [ themes, setThemes ] =  useState('');

  const handleEdition = (event: SelectChangeEvent) => {
    setEdition(event.target.value);
  }

  const handleThemes = (event: SelectChangeEvent) => {
    setThemes(event.target.value);
  }


    return (
      <main className="flex min-h-screen flex-col items-center p-24 shadow-lg bg-black">
        <h1 className="text-white text-center font-tiltPrism font-bold text-6xl">
          Synaptiq Hackathon Registration
        </h1>

        <section className="flex flex-row gap-10 flex-wrap flex-shrink mt-16">
          <Input
            placeholder="Email"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="email"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Team Name"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Name of Team Leader"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Team Member 1"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Team Member 2"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Team Member 3"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Team Member 4"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            placeholder="Team Member 5"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <FormControl className="bg-white rounded-3xl w-96 text-center" focused={false}>
            <Select
              placeholder="Edition Interest"
              labelId="editionSelector"
              id="editions"
              value={edition}
              onChange={handleEdition}
              autoWidth={true}
              label="edition"
            >
              <MenuItem value={"Hardware Edition"}>Hardware Edition</MenuItem>
              <MenuItem value={"Software Edition"}>Software Edition</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="bg-white rounded-3xl w-96 text-center" focused={false} >
            <Select
              placeholder="Themes Interest"
              labelId="themesSelector"
              id="themes"
              value={themes}
              onChange={handleThemes}
              autoWidth={true}
              label="theme"
            >

              <MenuItem value={"Smart Automation"}>Smart Automation</MenuItem>
              <MenuItem value={"Fitness & Sports"}>Fitness & Sports</MenuItem>
              <MenuItem value={"Heritage & Culture"}>Heritage & Culture</MenuItem>
              <MenuItem value={"MedTech/Biotech/HealthTech"}>MedTech/Biotech/HealthTech</MenuItem>

            </Select>
          </FormControl>

        </section>
      </main>
    );
}