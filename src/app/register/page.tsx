"use client";
import { Button, Input } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

export default function RegisterPage(){
  const [ edition, setEdition ] = useState('');
  const [ themes, setThemes ] =  useState('');
  const [ teamLeader, setTeamLeader ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ member1, setMember1 ] = useState('');
  const [ member2, setMember2 ] = useState('');
  const [ member3, setMember3 ] = useState('');
  const [ member4, setMember4 ] = useState('');
  const [ member5, setMember5 ] = useState('');

  const handleTeamLeader = (event: any) => {
    if(!/\d/.test(event.target.value)){
      setTeamLeader(event.target.value);
    }
  }

  const handlePhoneNumber = (event: any) => {
    setPhoneNumber(event.target.value.replace(/[^0-9]/g, ''));
  }

  const handleMember1 = (event: any) => {
    if(!/\d/.test(event.target.value)){
      setMember1(event.target.value);
    }
  }

  const handleMember2 = (event: any) => {
    if(!/\d/.test(event.target.value)){
      setMember2(event.target.value);
    }
  }

  const handleMember3 = (event: any) => {
    if(!/\d/.test(event.target.value)){
      setMember3(event.target.value);
    }
  }

  const handleMember4 = (event: any) => {
    if(!/\d/.test(event.target.value)){
      setMember4(event.target.value);
    }
  }

  const handleMember5 = (event: any) => {
    if(!/\d/.test(event.target.value)){
      setMember5(event.target.value);
    }
  }

  const handleEdition = (event: SelectChangeEvent) => {
    setEdition(event.target.value);
    const editionInputLabel = document.getElementById("editionInputLabel");
    if(editionInputLabel != null){
      editionInputLabel.style.visibility = "hidden";
    }
  }

  const handleThemes = (event: SelectChangeEvent) => {
    setThemes(event.target.value);
    const themeInputLabel = document.getElementById("themeInputLabel");
    if(themeInputLabel != null){
      themeInputLabel.style.visibility = "hidden";
    }
  }


    return (
      <main className="flex min-h-screen flex-col items-center p-24 shadow-lg bg-black">
        <h1 className="text-white text-center font-tiltPrism font-bold text-6xl">
          Synaptiq Hackathon Registration
        </h1>

        <form>
          <section className="flex flex-row gap-10 flex-wrap flex-shrink mt-16">

          <Input
            id="college"
            name="college"
            placeholder="Name of College"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            id="email"
            name="email"
            placeholder="Email"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="email"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            id="teamname"
            name="teamname"
            placeholder="Team Name"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handleTeamLeader}
            value={teamLeader}
            id="teamleader"
            name="teamleader"
            placeholder="Name of Team Leader"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handlePhoneNumber}
            value={phoneNumber}
            id="leaderphone"
            name="leaderphone"
            placeholder="Team Leader Phone No"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handleMember1}
            value={member1}
            id="member1"
            name="member1"
            placeholder="Team Member 1"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handleMember2}
            value={member2}
            id="member2"
            name="member2"
            placeholder="Team Member 2"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handleMember3}
            value={member3}
            id="member3"
            name="member3"
            placeholder="Team Member 3"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handleMember4}
            value={member4}
            id="member4"
            name="member4"
            placeholder="Team Member 4"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <Input
            onChange={handleMember5}
            value={member5}
            id="member5"
            name="member5"
            placeholder="Team Member 5"
            className="w-96 h-14 bg-white rounded-3xl text-black"
            disableUnderline={true}
            required={true}
            type="text"
            inputProps={{ style: { textAlign: "center" } }}
          ></Input>

          <FormControl className="bg-white rounded-3xl w-96 text-center" focused={false}>
            <InputLabel className="w-full h-full mx-auto" id="editionInputLabel" focused={false}>Select Edition Interest</InputLabel>
            <Select
              autoFocus = {false}
              placeholder="Edition Interest"
              labelId="editionSelector"
              id="editions"
              name="editions"
              value={edition}
              onChange={handleEdition}
              autoWidth={true}
              label="edition"
            >
              <MenuItem value={"Hardware Edition"}>Hardware Edition</MenuItem>
              <MenuItem value={"Software Edition"}>Software Edition</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="bg-white rounded-3xl w-96 text-center" focused={false}>
            <InputLabel className="w-full h-full mx-auto" id="themeInputLabel" focused={false}>Select Themes Interest</InputLabel>
            <Select
              autoFocus = {false}
              placeholder="Themes Interest"
              labelId="themesSelector"
              id="themes"
              name="themes"
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
          <Button type="submit" size="large" className="flex mt-10 w-48 h-14 text-white border-2 border-solid border-white bg-carribean-current mx-auto hover:bg-green-500">Submit</Button>
          
        </form>

      </main>
    );
}