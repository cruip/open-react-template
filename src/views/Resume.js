import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../components/elements/Button';
import { Document, Page, pdfjs } from 'react-pdf/dist/entry.webpack';

import resume from '../assets/pdf/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const outerClasses = classNames(
  'hero section center-content',
  'has-top-divider',
  'has-bottom-divider',
  // 'has-bg-color',
  // 'invert-color'
);

const innerClasses = classNames(
  'hero-inner section-inner',
  'has-top-divider',
  'has-bottom-divider'
);

export default class Resume extends Component {

  state = {
    numPages: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { numPages } = this.state;

    return (
      <section
        className={outerClasses}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <h4>Note: Does not work on mobile screens</h4>
              <Document
                file={resume}
                onLoadSuccess={this.onDocumentLoadSuccess}
                options={options}
              >
                {
                  Array.from(
                    new Array(numPages),
                    (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                      />
                    ),
                  )
                }
              </Document>
              <br></br>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <a href={resume} download={'resume.pdf'}>
                  <Button tag="a" color="light" wideMobile>                  
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}