import React from 'react';
import List from './containers/Layout';
import ReactDOM from 'react-dom/client';
import '../styles/index.css'
import Layout from './containers/Layout';
import About from './components/About.jsx';

const App = () => {
    return (
        <div className='container'>
            <Layout>
                <About />
            </Layout>
        </div>
    );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
