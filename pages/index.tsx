import Image from "next/image";
import { Inter } from "next/font/google";
import Router from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [teamName, setTeamName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Validate the entry is a string long enough
    if (teamName.length > 5) {
      //  Post the data
      Router.push(`/sentiment/team-sentiment?teamName=${encodeURI(teamName)}`);
    } else {
      console.log("That doesn't appear to be a valid team name");
    }
  };

  const handleTeamInput = (e) => {
    setTeamName(e.target.value);
  };
  return (
    <main>
      <div>
        <h1>Welcome! Let's see how the world feels about your team.</h1>
        <form onSubmit={handleSubmit}>
          <label>Enter a full team name</label>
          <div>
            <input
              type="text"
              value={teamName}
              onChange={handleTeamInput}
              placeholder="San Diego Padres"
            />
          </div>
          <div>
            <button type="submit">Check on Team</button>
          </div>
        </form>
        ;
      </div>
    </main>
  );
}
