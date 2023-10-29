// Section.js
import React from 'react';

class Section extends React.Component {
  render() {
    const title = this.props.title;
    const children = this.props.children;

    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

export default Section;
