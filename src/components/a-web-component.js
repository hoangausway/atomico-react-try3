import { h, customElement, useState } from 'atomico'
import './my-react-webcomponent'

const AWebComponent = props => {
  const [count, setCount] = useState(10)
  const handler = e => setCount(count + 1)
  return (
    <host shadowDom>
      <style>style()</style>
      <div>
        <button onclick={handler}>Increase</button>
        <div>
          <my-react-webcomponent count={count} />
        </div>
      </div>
    </host>
  )
}

AWebComponent.props = {}
export default customElement('a-web-component', AWebComponent)

const style = () => `
  width: 500px;
  height: 500px;
`
