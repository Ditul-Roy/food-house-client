import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const Blog = () => {
    const ref = useRef()
    return (
        <div>
            <ReactToPrint trigger={()=> <buttto className='btn btn-primary text-center my-4'>print</buttto>} content={()=>ref.current}/>
            <div ref={ref} className='my-10 mx-6 text-green-600'>
                <h2 className='text-center text-3xl my-4'>Some quistion and answare</h2>
                <div>
                    <h4 className='text-2xl text-center'>1. Tell us the differences between uncontrolled and controlled components ?</h4>
                    <div className="overflow-x-auto">
                        <p className='text-xl text-center'>differences between uncontrolled and controlled:</p>
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Controller</th>
                                    <th>Uncontroller</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Does not maintain its internal state</td>
                                    <td>Maintains its internal state.</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Easier to debug</td>
                                    <td>More difficult to debug</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>It has better control over the form elements and data.</td>
                                    <td>It has limited control over the form elements and data.</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td>Allows validation control.</td>
                                    <td>Does not allow validation control.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h4 className='text-center text-2xl my-4'>2. How to validate React props using PropTypes ?</h4>
                    <p>propTypes is used to verify the input type for props in react. If you try to put any other type, then it will give you warning in console. For example, if you set name should be string, but you pass something else like number then it will give you warning in console and also the result might get different. After you define patterns in for propTypes you should set default values for props as well. So we use this syntex to validate props with proptypes, Prop types for our Component App.propTypes = propArray: PropTypes.array.isRequired. In this above example, we have used some validations, as you can see in app.propTypes we have propArray and propBool have isRequired propType this means for propArray and propBool it must have the array and boolean propType in the prop.
                    </p>
                </div>
                <div>
                    <h4 className='text-center text-2xl my-4'>3. Tell us the difference between nodejs and express js ?</h4>
                    <p className='text-xl text-center'> defference between nodejs and express js</p>
                    <div className="overflow-x-auto">
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>nodejs</th>
                                    <th>expressjs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>It is used to build server-side, input-output, event-driven apps.</td>
                                    <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>It is built on Google’s V8 engine.</td>
                                    <td>It is built on Node.js.</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td> it is write byC, C++, JavaScript</td>
                                    <td>it is write by JavaScript</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
                                    <td>Framework based on Node.js.</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <td>It requires more coding time.</td>
                                    <td>It requires less coding time.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h4 className='text-center text-2xl my-4'>4. What is a custom hook, and why will you create a custom hook ?</h4>
                    <p>Custom React hook is an essential tool that let we add special, unique functionality to our React applications. Custom hook is a simple function, there is of which we can do to use React hooks and we can use to component of React and return anything value of this function. Since this function will start 'use' so its custom hook, in hare we do not need to return jsx. in here we do any kind of work like take anything parameter, do anything reuseable word, in hare get data on server, useEffect, useCalback any kind of hook etc will do in hare and return anything. first time, we need to create hook like number.js then we will extract that into a custom Hook. In index.js, we are importing our number.js Hook and utilizing it like any other Hook. This is where we pass in the URL to update number data from.Now we can reuse this custom Hook in any component to fetch data from any URL</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;