import React from 'react'
import Products from './Products'
import FormatName from './FormatName'


function App() {
  const user = {
    firstName: 'Lee',
    lastName: 'Yende',
  }

  return (
    <div>
      <Products />
      <FormatName user={user} />
    </div>
  )
}

export default App
