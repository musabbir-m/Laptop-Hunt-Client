import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div>
        <div>
          <div className="hero h-96 rounded-xl" style={{}}>
            <div className="hero-overlay bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">LaptopHunt blog</h1>
                <p className="mb-5"></p>
                <Link to="/signup">
                  <button className="btn bg-gradient-to-r border-none from-purple-500 via-purple-600 to-purple-700">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow-sm rounded mx-3 mt-2 bg-white border border-gray-300 px-5 py-3 mb-4">
          <h2 className="text-4xl mb-4">
            Difference ways to manage state in react
          </h2>
          <p className="text-xl">
            Local (UI) state – Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook. For example, local state would be needed to show or
            hide a modal component or to track values for a form component, such
            as form submission, when the form is disabled and the values of a
            form’s inputs. <br /> Global (UI) state – Global state is data we
            manage across multiple components. Global state is necessary when we
            want to get and update data anywhere in our app, or in multiple
            components at least. A common example of global state is
            authenticated user state. If a user is logged into our app, it is
            necessary to get and change their data throughout our application.
            Sometimes state we think should be local might become global. <br />{" "}
            Server state – Data that comes from an external server that must be
            integrated with our UI state. Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state. There are several pieces of state that must be managed every
            time you fetch or update data from an external server, including
            loading and error state. Fortunately there are tools such as SWR and
            React Query that make managing server state much easier. <br /> URL
            state – Data that exists on our URLs, including the pathname and
            query parameters. URL state is often missing as a category of state,
            but it is an important one. In many cases, a lot of major parts of
            our application rely upon accessing URL state. Try to imagine
            building a blog without being able to fetch a post based off of its
            slug or id that is located in the URL
          </p>
        </div>
        <div className=" shadow-sm rounded mx-3 mb-4 pb-4 mt-2 bg-white border border-gray-300">
          <h2 className="text-4xl">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p className="text-xl justify-start">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended. Unit testing is an important step in the development
            process, because if done correctly, it can help detect early flaws
            in code which may be more difficult to find in later testing stages.
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
          </p>
          <br />
        </div>

        <div className="text-4xl shadow-sm rounded mx-3 mb-4 pb-4 mt-2 bg-white border border-gray-300">
          <h2>How does prototypical inheritance work</h2>
          <p className="text-xl">
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
        <div className=" shadow-sm rounded mx-3 mt-2 bg-white border border-gray-300 py-5">
          <h2 className="text-4xl">React vs. Angular vs. Vue?</h2>
          <p className="text-xl">
            There are three frameworks for building web applications that every
            frontend developer has heard about: React, Vue.js, and Angular.
            React is a UI library, Angular is a fully-fledged front-end
            framework, while Vue.js is a progressive framework. <br />
          </p>
          <h4 className="text-2xl my-2">React</h4>
          <p className="text-xl">
            React is based on JavaScript, but it’s mostly combined with JSX
            (JavaScript XML), a syntax extension that allows you to create
            elements that contain HTML and JavaScript at the same time. Anything
            you create with JSX could also be created with the React JavaScript
            API, but most developers prefer JSX because it’s more intuitive.
          </p>
          <h4 className="text-2xl my-2">Angular</h4>
          <p className="text-xl">
            {" "}
            Each component in Angular contains a Template, a Class that defines
            the application logic, and MetaData (Decorators). The metadata for a
            component tells Angular where to find the building blocks that it
            needs to create and present its view. Angular templates are written
            in HTML but can also include Angular template syntax with special
            directives to output reactive data and render multiple elements,
            among other things.
          </p>

          <h4 className="text-2xl my-2">Vue</h4>
          <p className="text-xl">
            Vue’s templating syntax lets you create View components, and it
            combines familiar HTML with special directives and features. This
            templating syntax is preferred, even though raw JavaScript and JSX
            are also supported. Components in Vue are small, self-contained, and
            can be reused throughout the application. Single File Components
            (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so
            that all relevant code resides in one file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
