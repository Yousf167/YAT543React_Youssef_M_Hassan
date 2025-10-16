1. What is the primary purpose of he useReducer and useRef hook in React?
    * `useRef` is most commonly used primarily for manipulating the DOM by giving a `ref` attribute to an html element. the element can then be accessed with `element.<attr>`
    * `useReducer` is like `useState` but it allows you to add state update logic without using other hooks like `useEffect` which allows you to create a function outside of the component to handle updates which make the component cleaner

2. Create a Dropdown in React with Tailwind CSS Using useReducer and useRef
```jsx
import { useReducer, useRef, } from "react";

function dropdownReducer(state, action) {
    switch (action.type) {
        case "TOGGLE": return { ...state, open: !state.open };
        default:       throw new Error("Something went wrong");
        
    }
}

export default function Dropdown() {
    const [state, dispatch] = useReducer(dropdownReducer, { open: false });
    const dropdownRef = useRef(null);

    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center text-left" ref={dropdownRef}>
            <button
                onClick={() => dispatch({ type: "TOGGLE" })}
                className="inline-flex justify-center w-40 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
                {state.open ? "Close Menu" : "Open Menu"}
            </button>

            {state.open && (
                <div className="absolute translate-y-20 mt-2 w-40 rounded-md bg-white shadow-lg ">
                    <div className="py-1">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
```


