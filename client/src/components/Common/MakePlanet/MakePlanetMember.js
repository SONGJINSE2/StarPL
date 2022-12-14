import React from "react";
import TextField from "@mui/material/TextField";
import "./MakePlanetMember.scss";
export default function MakePlanetMember({ text, value, onChange }) {
  let metaData = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(metaData);
  return (
    <div className="makePlanetMemberBox">
      <div className="makeplanetMemberAccount_Box">
        <div className="makePlanetMemberAccount">{text}</div>
      </div>
      {value == userInfo.userID ? (
        <TextField
          style={{
            width: "100%",
          }}
          value={value}
          readonly
          disabled
        />
      ) : (
        <TextField
          id="outlined-search"
          label="유저 아이디를 입력해주세요 "
          type="search"
          style={{
            width: "100%",
          }}
          onChange={onChange}
        />
      )}
    </div>
  );
}
