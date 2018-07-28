import React from "react";
import RepEntry from './RepEntry.jsx';

const ListView = props => (
  <div>
    This is the ListView Component.
    {Array.isArray(props.data) ? props.data.map((rep, i) => <RepEntry rep={rep} key={i}/>) : ''}
  </div>
)

export default ListView;