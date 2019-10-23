import React from 'react'

export default function $id(props) {
  return <div>{props.match.params.id}</div>
}
