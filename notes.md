# App.js
- StrictMode a highlevel component
- Router 
- Switch 
- 

# Portals
- Portals provide a first-class way to render children into a DOM node [modal] that exists outside the DOM hierarchy of the parent component [app] .

# Constructor
- instead of constructor, public class fields

# Details.js
- Componentdidmount() runs after render() but render elements needs the async data updated by setState() inside Componentdidmount() ??
    * You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. 
   * setState() outside Componentdidmount() can casue infinite loop
- object.assign inside setstate to cause deep merging, instead of react's shallow merging
- use arrow functions for callback functions either in callback or in expression inside class(in this case no need to use () in after method name in callback)
    * Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
- <Modal> is rendered from within the component to some other part of the dom

# SearchParams.js
- The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
    * confusion: but there are many state updation functions inside render methods always
    * conclusion: but they aren't called by render(), they are called by user "on events"

# Contexts ThemeContext.js
- we have used anonymous function inside createContext() and thus assume any name while destructuring via useContext or ThemeContext.Consumer ({theme, setTheme}=>{})
    * It is often necessary to update the context from a component that is nested somewhere deeply in the component tree. In this case you can pass a function down through the context to allow consumers to update the context:
    export const ThemeContext = React.createContext({theme: themes.dark,toggleTheme: ()=> {},});

# Portals 
- [ReactDOM.createPortal(this.props.children, ContainerDomNoder)]
- Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
- typical use case when child component need to visually break out of parent components
- wrap create portal children inside div, because sometimes children might be a list of elements, and top level elements always have to be a single thing

# Refs and DOM 
- a way to access children outside of typical dataflow of props
- two ways of using ref
    * class constructor: this.myref= ReactDOM.createRef() <htmlelement_or_component ref={this.myref}/>
    * funtions: const elRef = useRef(mutable_reference_object);  //makes elRef.current =mutable... 
## Modal.js
- why use useRef() why not directly inside modal-div, or create a div outside Modal for container
    * we want different modals/portal to be totally contained  to finally put em all inside DOM components [not here] here we just have single div so...? Maybe with useRef same div is being used with the help of refernce objects

# Error Boundaries
- to handle javascript errors in react, 
- error boundaries can catch error in whole tree **below them
- A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). 
- Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.
- only class component can be error boundary
