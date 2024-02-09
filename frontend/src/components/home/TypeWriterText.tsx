import { Typewriter } from 'react-simple-typewriter'

const TypeWriterText = ({ text}:any) => {
    return (
      <Typewriter
      words={[text]}
      loop={Infinity}
      cursor
      cursorStyle='|'
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={1000}
    />
    )
  }
  export default TypeWriterText