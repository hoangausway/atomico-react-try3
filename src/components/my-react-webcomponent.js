/* @jsx React.createElement */
import { BaseElement } from 'atomico'
import React from 'react'
import ReactDom from 'react-dom'

function createCustomElement (Component) {
  const Element = class extends BaseElement {
    async create () {
      const root = Component.shadowDom
        ? this.attachShadow({ mode: 'open' })
        : this
      this.update = () => {
        try {
          ReactDom.render(<Component {...this._props} />, root)
        } catch (e) {}
      }
      await this.unmounted
      ReactDom.unmountComponentAtNode(root)
    }
  }
  Element.props = Component.props

  return Element
}

// React component
function MyReactComponent ({ count }) {
  return (
    <div>
      <style>{style()}</style>
      count : [{count}]<h1>React -> WebComponent</h1>
    </div>
  )
}

MyReactComponent.props = {
  count: {
    type: Number,
    value: 10
  }
}

MyReactComponent.shadowDom = true

export default window.customElements.define(
  'my-react-webcomponent',
  createCustomElement(MyReactComponent)
)

const style = () => `
:host {
  width: 100%; 
  height: 100%;
  display: block;
  border: 1px solid black;
  padding: 1rem;
  box-sizing: border-box;
}
`
