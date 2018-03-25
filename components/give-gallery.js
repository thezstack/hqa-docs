import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';

const photos = [
  { src: '../static/media/student.JPG', width: 3.5, height: 3 },
  { src: '../static/media/gallery/DSC_0050.JPG', width: 6, height: 4 },
  { src: '../static/media/student3.JPG', width: 5, height: 4 },
  { src: '../static/media/student4.JPG', width: 5, height: 4 },
  { src: '../static/media/student5.JPG', width: 5, height: 4 },
  { src: '../static/media/gallery/DSC_0870.JPG', width: 4, height: 3 },
  { src: '../static/media/gallery/DSC_0017 2.JPG', width: 4, height: 3 },
  { src: '../static/media/gallery/DSC_0011.JPG', width: 4, height: 3 }
];

// to best see the results, click the popout button in the preview browser
// and resize your browser

class App extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
  }
  render() {
    const width = this.state.width;
    return (
      <div className="cont">
      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
        ({measureRef}) => {
          if (width < 1 ){
            return <div ref={measureRef}></div>;
          }
          let columns = 1;
          if (width >= 480){
            columns = 2;
          }
          if (width >= 1024){
            columns = 3;
          }
          if (width >= 1824){
            columns = 4;
          }
          return <div ref={measureRef}><Gallery photos= {photos} columns={columns} /></div>
        }
      }
      </Measure>

      <style jsx>
        {`
          .cont {
            margin-top:50px;
          }





      `}
      </style>


      </div>
    )
  }
}
export default App;
