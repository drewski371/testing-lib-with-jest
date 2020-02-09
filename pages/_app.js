import App from 'next/app';

class ReactTestingDemo extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
};

export default ReactTestingDemo;