import { Typewriter } from 'react-simple-typewriter'

const TypeWriterText = ({ text}:any) => {
    return (
      <Typewriter
      words={[text]}
      loop={Infinity}
      cursor
      cursorStyle='|'
      typeSpeed={180}
      deleteSpeed={70}
      delaySpeed={1500}
    />
    )
  }
  export default TypeWriterText