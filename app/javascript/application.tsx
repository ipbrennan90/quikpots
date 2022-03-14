// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import * as React from 'react'
import * as ReactDOM from 'react-dom'

declare global {
    interface Window { gon: any }
}

const gon = window.gon

const App = () => {
    return (<div>{gon.testCase}</div>)
}

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('app')
    ReactDOM.render(<App />, rootEl)
})