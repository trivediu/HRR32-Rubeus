import React from "react";
import RepEntry from './RepEntry.jsx';

const ListView = props => (
  <div className="container">
    <div className="row">
        {Array.isArray(props.data) ? props.data.map((rep, i) => <RepEntry rep={rep} key={i}/>) : ''}
    </div>
  </div>
)

export default ListView;