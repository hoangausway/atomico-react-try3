import { h, customElement, useState } from 'atomico'
import './my-react-webcomponent'

const AWebComponent = props => {
  const [count, setCount] = useState(10)
  const handler = e => setCount(count + 1)
  return (
    <host shadowDom>
      <style>{style()}</style>
      <button onclick={handler}>Increase</button>
      <my-react-webcomponent count={count} />
    </host>
  )
}

AWebComponent.props = {}
export default customElement('a-web-component', AWebComponent)

const style = () => `
:host {
  width: 500px;
  height: 500px;
  padding: 6px;
}
button {
  width: 60px;
  height: 28px;
  margin: 10px 0px;
}
my-react-webcomponent {
  margin-left: 6px;
  width: 500px;
}
`
