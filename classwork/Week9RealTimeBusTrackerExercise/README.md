## Title: Real Time Bus Tracker 

### Description:
This is a project that I edited for MIT xPRO's web development class. The goal was to add markers to a map to show the live position of each bus that travels the route between Harvard and MIT. 

Most of the code was provided for me by Google Maps and MIT xPRO. 
 
I added a marker for each bus in the data collected from MBTA's API and set the positions of the markers to update every 15 seconds to the latitude and longitude collected from the location data. I also added an id to the gmp-map in the index.html file so that I could update the markers in the inner html of the gmp-map element every time their positions were updated. I separated the HTML, JavaScript, and CSS into separate files. 

I used the Google Maps API instead of the MapBox API, and I changed the title of each marker so that when the marker representing a bus is hovered over, the bus label is displayed (the identifying number) in addition to the occupancy status (how many seats are available). 

#### How to Run: 

You need to obtain a Google Maps API key and insert it in the Google Maps API url in the indicated location in the index.html file. Note that my project won't run because I removed my API key before pushing the project to GitHub in order to protect it. 

#### Support:

N/A

#### Roadmap of Future Improvements: 
I'd be interested in customizing the advanced markers using Google's libraries for advanced markers.

I found these relevant pages on Google Maps Platform (linked below):
https://developers.google.com/maps/documentation/javascript/advanced-markers/start

https://developers.google.com/maps/documentation/javascript/advanced-markers/overview?utm_source=Website&utm_medium=Blog&utm_campaign=FY22-Q1-global-Maps-website-cs-2022-gmp-blog-social&utm_content=advanced_markers_documentation

https://developers.google.com/maps/documentation/javascript/advanced-markers/basic-customization?utm_source=Website&utm_medium=Blog&utm_campaign=FY22-Q1-global-Maps-website-cs-2022-gmp-blog-social&utm_content=advanced_markers_documentation#javascript_1



#### License Information:

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.