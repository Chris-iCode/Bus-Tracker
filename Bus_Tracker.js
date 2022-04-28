

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZWhvcHBlcjQ1IiwiYSI6ImNsMXcycHd1MTJvODgzY21vYjN6ZWozZzYifQ.UzY6v9S80XIGPXDh5MTNuQ';
     var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.101, 42.358],
        zoom: 12
        });

      var marker = new mapboxgl.Marker()
      .setLngLat([-71.101, 42.358])
      .addTo(map);

      
      const busStops = [
        [-71.0948528358365, 42.360237277268375],
        [-71.09947224929616, 42.362992780090714],
        [-71.1058319632832, 42.36681929722778],
        [-71.11301988620755, 42.37028211074132],
        [-71.11537915092998, 42.37210486757619],
        [-71.11749248199324, 42.37310103812517],
        [-71.11994132432979, 42.377785196465744]
      ];


      var counter = 0;
      function move(){
        setTimeout(() =>{
          if (counter >= busStops.length) return;
          marker.setLngLat(busStops[counter]);
          counter++;
          move();

        }, 1000);
      }