import CodeBlock from './Code'
import Callout from './Callout'
import Heading from './Heading'

const components = {
    pre: CodeBlock,
    Callout,
    h1: (props) => <Heading as='h1' {...props} />,
    h2: (props) => <Heading as='h2' {...props} />,
    h3: (props) => <Heading as='h3' {...props} />,
    h4: (props) => <Heading as='h4' {...props} />,
    h5: (props) => <Heading as='h5' {...props} />,
    h6: (props) => <Heading as='h6' {...props} />
}
export default components