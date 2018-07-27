import React, { Component } from "react";
import RepEntry from './RepEntry.jsx';

const ListView = props => (
  <div>
    {props.data ? props.data.map((rep, i) => <RepEntry rep={rep} key={i}/>) : ''}
  </div>
)

export default ListView;