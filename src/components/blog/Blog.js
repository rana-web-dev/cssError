import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-6xl mx-auto md:p-0 p-2'>
            <div className='mt-10'>
                <h1 className='text-xl mb-2 font-bold'>What is the React Router?</h1>
                <p><span className='text-blue-500'>Answer: </span>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                </p>
                <p>
                    It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application. React Router uses a component-based approach to routing.
                </p>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl mb-2 font-bold'>How Does Context API works?</h1>
                <p><span className='text-blue-500'>Answer: </span>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <p>
                    Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props
                </p>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl mb-2 font-bold'>What is useRef() in react?</h1>
                <p><span className='text-blue-500'>Answer: </span>
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called.
                </p>
                <p>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.
                </p>
            </div>
        </div>
    );
};

export default Blog;    