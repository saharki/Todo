/* global google */
import {
  default as React,
  Component,
} from "react"

import {
  withGoogleMap,
  GoogleMap,
  Circle,
  Marker,
} from "react-google-maps"

import DrawingManager from "react-google-maps/lib/drawing/DrawingManager"
import _ from "lodash"

/*
 * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
 *
 * Note: requires the Google Maps drawing API library in your script src
 *
 * Credits: thanks @idolize for the contribution!
 */

const DrawingExampleGoogleMap = withGoogleMap((props) =>{
  // console.log (props.onOverlaycomplete("chekch"))
  return (
     <GoogleMap
      defaultZoom={4}
      defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
      center={props.center || new google.maps.LatLng(-34.397, 150.644)}
      zoom={props.center || 4}
    >
      <DrawingManager
        onOverlayComplete={props.onOverlayComplete}
        defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              google.maps.drawing.OverlayType.POLYLINE,
              google.maps.drawing.OverlayType.RECTANGLE,
              google.maps.drawing.OverlayType.Marker,
            ],
          },
          circleOptions: {
            fillColor: `#ffff00`,
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
        }}
      />
    </GoogleMap>
  )

} 
)
/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class MyGoogleMap extends Component {
 handleOverlayComplete = (e) => {
  console.log (e)
 }

 handleSaveCenter = (e) => {
  this.props.onSaveCenter(0.0,4)
 }

  render() {
    return (
      <div>
      <DrawingExampleGoogleMap
      center = {this.props.center}
      onOverlayComplete={this.handleOverlayComplete.bind(this)}
        containerElement={
          <div style={{ height: `600px` , width: "100%"}} />
        }
        mapElement={
          <div style={{ height: `100%`, width: "100%" }} />
        }
      />
      <button onClick={this.handleSaveCenter.bind(this)}>Save Center</button>
      </div>
    )
  }
}





