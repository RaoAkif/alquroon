### Profile

#### Create a New Repository on GitHib

#### Generate a Template
Using Command Line
``` npx create-react-app profile --template pwa-typescript ```

``` cd profile ```


#### Initialize Git Repo
``` git init ```

#### Add Files to the Staging Area
``` git add . ```

#### Check the Status of Files
``` git status ```

#### Commit Files
``` git commit -m 'your message' ```

#### Add Remote Origin
``` git remote add origin git@github.com:RaoAkif/Profile.git ```

#### Push to the Origin Branch
``` git push -u origin master ```


### Starting the Profile

#### Cleaning the Template
Hello World display on DOM

Cleaning App.tsx
Removing logo.svg, App.test.tsx, setup.test.tsx 


#### App.css
Update App.css

```
body {
  background: #f4f4f4;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  margin: 0;
}

header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 0.5rem;
}

main {
  padding: 2rem;
}

nav {
  background: #444;
  padding: 0.2rem 2rem;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center
}

nav a {
  padding: 10px;
  color: #fff;
  text-decoration: none;
}

nav .current > a {
  color: yellow;
}

li {
  list-style-type: none;
  text-align: left;
  border-width: 10px;
  margin: grey 10px;
}


Link ::after{
  color: black;
  align-items: left;
}

products-container {
  text-align: left;
}

.project-container {
  padding-right: 20px;
  padding-left: 20px;
} 
```

#### Creating Components
Create src/components

``` cd src ```
``` mkdir components ```
``` cd components ```



``` touch Header.tsx ```
``` touch Header.css ```
``` touch Footer.tsx ```
``` touch Footer.css ```
``` touch Layout.tsx ```
``` touch Layout.css ```
``` touch RouterConfig.tsx ```

``` cd .. ```
``` mkdir images ```
``` cd images ```
Put all images in this folder

``` cd .. ```
``` mkdir Pages ```
``` cd Pages ```

``` touch Home.tsx ```
``` touch Home.css ```
``` touch About.tsx ```
``` touch About.css ```
``` touch Contact.tsx ```
``` touch Contact.css ```






#### Write Codes in Home, About Contact
rfce snippets

####  Creating the Styling files for above componets


####  In Header.tsx
```
import Profile from "../images/profile.png"
import "./Header.css"

export const Header = () => 
  <div id="header">    
      <img src={Profile} alt="Profile" />
  </div>


export default Header

```

####  In Header.css
```
img {
  height: 100px;
  border-radius: 50%;
  padding: 10px;
}

#header {
  background: #333;
  display: flex;
  justify-content: center
}
```

####  In Footer.tsx
```
import "./Footer.css"

export const Footer = () =>
    <div id="footer">
      Created by Rao Akif. Copyright © 2021.
    </div>

export default Footer
```

####  In Footer.tsx
```
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
```

####  In Layout.tsx
```
import React, { FunctionComponent } from 'react'
import Footer from "./Footer"
import "./Layout.css"

type LayoutProps = {
  title: string,
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => 
  <div>
    <h2>{title}</h2>
    <div id="paragraph"> {children} </div>
    <Footer />
  </div>

export default Layout

```

####  In Layout.css
```
#paragraph {
  text-align: justify;
  padding: 5px 10%;
}

```

#### In RouterConfig.tsx
```
import Header from "./Header"
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export const RouterConfig = () =>
    <div>
      <Header />
      <Router>
        <div style={{ textAlign: 'center' }}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>

export default RouterConfig;

```


####  In Home.tsx
```
import Layout from '../components/Layout'

export const Home = () =>
    <Layout 
    title="This is my Home"
    >
    Welcome to my Profile. Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    Welcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my ProfileWelcome to my Profile
    </Layout>

export default Home

```
####  In Home.css
```
```
####  In About.tsx
```
import Layout from '../components/Layout'

export const About = () =>
<Layout 
title="About Me"
>
I am a web development learner !!!
</Layout>

export default About

```
####  In About.css
```
```
####  In Contact.tsx
```
import Layout from '../components/Layout'

export const Contact = () =>
<Layout 
title="Contact Me"
>
Facebook: http://fb.com/raoakif
</Layout>

export default Contact

```
####  In Contact.css
```
```

#### In App.tsx
```
import './App.css';
import RouterConfig from "./components/RouterConfig"

function App() {
  return (
    <div>
      <RouterConfig />
    </div>
  );
}

export default App;

```

