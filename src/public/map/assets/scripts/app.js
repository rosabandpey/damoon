mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGlhbWJlbmRhdmlzIiwiYSI6IlVrb3BGVzQifQ.jeHxDCnpXXvAXKfAFEYG-A';

let all = document.getElementById("all");
all.style.height = `${window.innerHeight}px`;
var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [53.6880, 32.4279], // starting position [lng, lat]
      zoom: 4,
      paddings: [500, 500]
});
let geojson;
// map.setPadding({ left: 100, top: 100 });

let rcity = document.querySelector(".rdetail div.city");
let rname = document.querySelector(".rdetail h3.fullName");
let raddress = document.querySelector(".rdetail p");
let canvas = document.getElementById("map");
canvas.addEventListener("click", (e) => {
      if (e.target.nodeName == "CANVAS") {
            document.querySelectorAll("div.marker").forEach(marker => {
                  marker.classList.remove("active")
            })
      }
})



mapboxgl.setRTLTextPlugin('assets/scripts/mapbox-gl-rtl-text.js')
map.addControl(new mapboxgl.NavigationControl());


let regions;
let uniqs;
let divData = document.getElementById("data")
let tvalue = document.querySelector("div.title span.value");
let datas;
// fetch("https://dcairan.com:5555/Main/SiteBaseApi/GetAllMap")
//       .then(res => res.json())
//       .then(data => {
            // data.sort((a, b) => { return a.LastName.localeCompare(b.LastName) })
            // console.log(data);
            
            geojson = makeGeojson(branches);
            renderData(branches);
            datas = branches;
            addMarker(geojson);
            regions = branches.map(el => el.province);
            uniqs = regions.filter((item, index, self) => {
                  
                  return self.indexOf(item) === index
            })
            renderFilterBtns(uniqs)
            tvalue.textContent = PersianNum(branches.length);
            document.querySelector("div.current span.value").textContent = PersianNum(branches.length)
            document.querySelector("#footer span.value").textContent = PersianNum(branches.length);
            document.getElementById("loader").style.display = "none"


      // })

// geojson = makeGeojson(data);
// addMarker(geojson);



function makeGeojson(data) {
      let features = data.map(point => {
            return {
                  'type': 'Feature',
                  'properties': point,
                  'geometry': {
                        'type': 'Point',
                        'coordinates': [point.lng, point.lat]
                  }
            }
      })
      return {
            'type': 'FeatureCollection',
            'features': features
      }
}

function addMarker(geojson) {

      // add marker
      geojson.features.forEach(function (marker) {
            
            // create a DOM element for the marker
            var el = document.createElement('div');
            let span = document.createElement("div");
            span.style.backgroundImage = "url(./assets/images/logoa.png";
            // let imgs = document.createElement("img");
            // imgs.setAttribute("src", "./assets/images/logot.png");
            // imgs.setAttribute("width", "48px")
            // span.textContent = "DCA";
            // span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 365 560" enable-background="new 0 0 365 560" xml:space="preserve">
            // <g>
            //       <path fill="red" d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9   C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8   c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"/>
            // </g>
            // </svg>`
            el.appendChild(span);
            span.style.width = "40px";
            span.style.height = "40px";
            span.style.backgroundColor = "#0072bc"
            span.style.backgroundSize = "contain";
            span.style.backgroundPosition = "center";
            span.style.backgroundRepeat = "no-repeat";
            span.style.borderRadius = "50%"
            span.style.display = "flex";
            span.style.justifyContent = "center";
            span.style.alignItems = "center";
            span.style.fontWeight = 900;
            span.style.boxShadow = "rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px";
            // span.style.color = "#bd1b1b"

            el.className = `marker `;
            el.setAttribute("id", `rep-${marker.properties.id}`)
            // el.style.background = 'white';
            // el.style.width = marker.properties.iconSize[0] + 'px';
            // el.style.height = marker.properties.iconSize[1] + 'px';
            // el.style.height = '30px';
            // el.style.width = '78px';
            el.style.display = "flex"
            el.style.justifyContent = "center";
            el.style.alignItems = "center";

            // el.style.borderRadius = "18px"


            el.style.backgroundSize = '100%';

            let popupTmp = `
            <div class="popup-temp">
                  <div class="image">
                  <h3></h3>
                  </div>
                  <div class="info">
                   <div class="mobile">
                              <i class="fa fa-map-marker-alt"></i>
                              <span>${marker.properties.province}</span>
                        </div>
                        <div class="person">
                              <i class="fas fa-user"></i>
                              <span>${marker.properties.branch}</span>
                        </div>
                        <div class="phone">
                              <i class="fa fa-phone"></i>
                              <span>${PersianNum(marker.properties.phone)}</span>
                        </div>
                        <div class="address">
                              <i class="fa fa-map-marker"></i>
                              <span>${marker.properties.address}</span>
                        </div>
                        <div class="ctas">
                              <div class="call">
                                    <a href="tel:${marker.properties.phone}">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                                 
                                    </a>
                              </div>
                              <div class="waze" onclick="mapsSelector(${marker.properties.lat}, ${marker.properties.lng})">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>
                                   
                              </div>
                        </div>
                  </div>
            </div>
      `
            let popup = new mapboxgl.Popup({ offset: 10, closeButton: false }).setHTML(popupTmp)
            let markerr = new mapboxgl.Marker(el)
                  .setLngLat(marker.geometry.coordinates)
                  .setPopup(popup)
                  .addTo(map);

            el.addEventListener("click", (e) => {

                  document.querySelectorAll("div.marker").forEach(item => {
                        item.classList.remove("active")
                  })
                  rcity.textContent = marker.properties.province;
                  raddress.textContent = marker.properties.address;
                  rname.textContent = marker.properties.branch;
                  el.classList.add("active");
                  document.getElementById("mcontainer").classList.add("show")
                  document.querySelector("div.more").setAttribute("onclick", `more(${marker.properties.id})`)

            })
            // el.addEventListener('touchend', function () {
            //     popup.setLngLat(marker.geometry.coordinates).setHTML(popupTmp).addTo(map);
            // });


            // el.addEventListener('mouseenter', function (e) {
            //       map.getCanvas().style.cursor = '';
            //       popup.setLngLat(marker.geometry.coordinates).setHTML(popupTmp).addTo(map);

            // });

            // el.addEventListener('mouseleave', function (e) {
            //       map.getCanvas().style.cursor = '';
            //       popup.remove();


            // });

            // add marker to map
            new mapboxgl.Marker(el)
                  .setLngLat(marker.geometry.coordinates)
                  .addTo(map);
      });
}

function handleMounseOnRep(id) {
      
      document.getElementById(`rep-${id}`).classList.add("active");
}

function handleMounseOffRep(id) {
      document.getElementById(`rep-${id}`).classList.remove("active");
}



function renderData(data) {
      
      const reps = document.getElementById("reps")
      let places = data.map((item) => {
            return `
                  <div class="rep" onMouseEnter="handleMounseOnRep(${item.id})" onMouseLeave="handleMounseOffRep(${item.id})">
                  <div class="d-flex">
                  <div class="rep__code">
                        <img src="./assets/images/atieh.png" alt="شعب کارگزاری آتیه">
                  </div>
                  <div class="rep__detail">
                        <div class="title">
                              <div class="city">${item.province}</div>
                              <h3 class="fullName">${item.branch}</h3>
                              <p>${item.address}</p>
                              <p>تلفن شعبه: <span class="phone"> ${PersianNum(item.phone)}</span></p>
                        </div>
                  </div>
                  </div>
                  <div class="ctas">
                        <div class="call">
                              <a href="tel:${item.phone}">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                              تماس
                              </a>
                        </div>
                        <div class="map" onclick="showOnMap(${item.id}, ${item.lng}, ${item.lat})">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
                              مشاهده روی نقشه
                             
                        </div>
                        <div class="waze" onclick="mapsSelector(${item.lat}, ${item.lng})">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                              مسیریابی
                        </div>
                  </div>
            </div>
            `
      }).join("");
      reps.innerHTML = places;

}


function renderFilterBtns(data) {
      let cities = document.querySelector(".cities");
      if (data.length) {
            let filter = document.getElementById("filterBtns");
            data = data.filter(ell => ell);
            let doms = data.map(city => {
                  return `
                  <span class="filter-item" onclick="handleSelectCity(event,'${city}')">${city.replace('استان ', '')}</span>
            `
            }).join("");
            filter.querySelector("span.value").innerHTML = PersianNum(uniqs.length);
            filter.querySelector(".others .value").innerHTML = PersianNum(uniqs.length);
            document.querySelector("div.top span.value").innerHTML = PersianNum(uniqs.length)
            cities.innerHTML = doms;
      } else {
            cities.innerHTML = "موردی یافت نشد!"
      }
}


let current = document.querySelector("div.current");
let modalContainer = document.querySelector(".modal-container")


function handleSelectCity(e, city) {
      
      document.querySelectorAll("span.filter-item").forEach(el => {
            el.classList.remove("active")
      })
      let filters = datas.filter(item => item.province === city);
      let coordinates = filters.map(f => {
            return [f.lng, f.lat]
      })

      current.querySelector("span.title").textContent = city;
      current.querySelector("span.value").textContent = PersianNum(filters.length);
      renderData(filters);
      
      modalContainer.classList.remove("show");
      if (e)
            e.target.classList.add("active");
      
      if (coordinates.length === 1) {
            // coordinates = { lng: coordinates[0][0], lat: coordinates[0][1] }
            map.flyTo({ center: coordinates[0], zoom: 15 })
      } else {
            coordinates.sort();
            coordinates = [coordinates[0], coordinates[coordinates.length - 1]];
            map.fitBounds(coordinates, { padding: 200 });
      }


}

function handleAllCity(e) {
      
      document.querySelectorAll("span.filter-item").forEach(el => {
            el.classList.remove("active")
      })
      let coordinates = datas.map(f => {
            return [f.lng, f.lat]
      })

      current.querySelector("span.title").textContent = "همه استان‌ها";
      current.querySelector("span.value").textContent = PersianNum(datas.length);
      renderData(datas);
      
      modalContainer.classList.remove("show");
      if (e)
            e.target.classList.add("active");
      
      map.flyTo({ center: [53.6880, 32.4279], zoom: 4, paddings: [500, 500] })



}


let others = document.querySelector("span.others");
others.addEventListener("click", () => {
      document.querySelector("div.modal-container").classList.add("show")
})


function mapsSelector(lat, lng) {
      if /* if we're on iOS, open in Apple Maps */
            ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1) ||
            (navigator.platform.indexOf("iPad") != -1))
            window.open(`maps://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`);

      else /* else use Google */
            window.open(`https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`);
}


//     search
let input = document.getElementById("city-search");
input.addEventListener("keyup", (e) => {
      let results = uniqs.filter(city => {
            
            if (city)
                  return city.indexOf(e.target.value) >= 0
      })
      renderFilterBtns(results)
})

input.addEventListener("search", () => {
      renderFilterBtns(uniqs)
})



window.addEventListener("click", (e) => {
      if (e.target.isSameNode(modalContainer)) {
            modalContainer.classList.remove("show")
      }
})


function topmenu() {
      divData.classList.add("mobile");
      document.getElementById("mcontainer").classList.remove("show")
      document.getElementById("map-icon").classList.add("show");
      document.querySelectorAll("div.marker").forEach(el => {
            el.classList.remove("active")
      })
      // divData.classList.remove("after");

}


function PersianNum(value) {
      const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      let perValue = "";
      if (value) {
            
            perValue = value.toString().split("").map((num) => {
                  
                  if (!isNaN(num)) {
                        return persian[+num]
                  } else {
                        return num
                  }
            }).join("")
      }
      return perValue;
}


function showMap(event) {
      
      handleAllCity(event);
      document.getElementById("data").classList.remove("mobile")
      document.getElementById("map-icon").classList.remove("show")
}


function showOnMap(id, lng, lat) {
      let marker = datas.find(el => el.id === id)
      document.querySelectorAll("div.marker").forEach(it => {
            it.classList.remove("active")
      })
      document.getElementById(`rep-${id}`).classList.add("active");
      divData.classList.remove("mobile");
      map.flyTo({ center: [lng, lat], zoom: 15, offset: [0, -100], });

      rcity.textContent = marker.province;
      raddress.textContent = marker.address;
      rname.textContent = marker.branch;
      document.getElementById("mcontainer").classList.add("show")
      document.querySelector("div.more").setAttribute("onclick", `more(${id})`)

}


function more(id) {
     
      let find = datas.filter(item => item.id === `${id}`);
      handleSelectCity(null, find[0].province);
      renderData(find);
      document.getElementById("mcontainer").classList.remove("show")
      document.getElementById("map-icon").classList.add("show");
      document.querySelectorAll("div.marker").forEach(el => {
            el.classList.remove("active")
      })
      divData.classList.add("mobile");
}