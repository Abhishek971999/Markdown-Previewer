import React from 'react';
import './MarkDown.css';
import GithubRibbon from './GithubRibbon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
let marked = require('marked');

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# React Markdown Previewer!`,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <div className='App'>
        <GithubRibbon />
        <div className='container'>
          <div className='row mt-4'>
            <div className='col text-center'>
              <h1>
                <u className='text-info'>Markdown Previewer</u>
              </h1>
            </div>
          </div>

          <div className='row mt-4 justify-content-center'>
            <div className='col-md-6'>
              <div className='col d-flex mb-2'>
                <h4 className='text-info'>Markdown Input</h4>
                <button
                  className='btn btn-primary ml-3'
                  onClick={() => this.setState({ markdown: '' })}
                >
                  Reset
                </button>
                <CopyToClipboard text={this.state.markdown}>
                  <button className='btn btn-success  ml-3'>
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
              <div className='input'>
                <textarea
                  className='input inputStyle'
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='col mb-3'>
                <h4 className='text-info'>Preview</h4>
              </div>
              <div
                className='outputStyle'
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MarkDown;
