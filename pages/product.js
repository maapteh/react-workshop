import * as React from 'react';
import App from '../components/App';
import {Header} from '../components/header/header';
import {Product} from '../components/product/product';

export default class extends React.Component {
  static getInitialProps({query: {id}}) {
    return {id};
  }

  render() {
    return (
      <App>
        <Header />
        <div className="content__section">
          <Product id={this.props.id} />
        </div>
      </App>
    );
  }
}
