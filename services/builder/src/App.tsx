import { Input } from '@workspace/shadcn-ui/components/input'
import './App.css'
import { Button } from '@workspace/shadcn-ui/components/button'

function App() {
  return (
    <>
      <div>
        <Button variant="ghost">LINK</Button>
      </div>
      <Input type='email' placeholder='Email' />
    </>
  )
}

export default App
