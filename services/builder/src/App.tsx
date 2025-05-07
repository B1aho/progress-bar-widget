import { Preview } from './features/online-preview/Preview'
import { OptionMenu } from './features/option-menu/OptionMenu'

function App() {
  return (
    <div className='w-full h-full flex'>
      <OptionMenu />
      <Preview />
    </div>
  )
}

export default App
