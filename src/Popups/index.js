const leisurecentresPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-heart" aria-hidden="true"></i><p class="title">Leisure Centres</p>
  <p></p>
  <p class="info"><a href="${feature.properties.url}" target="_blank">${feature.properties.centre_name}</a></p>
  <p class="info">Address: ${feature.properties.address}</p>
  <p class="info">Tel: ${feature.properties.telephone}</p>
  <p></p>
  <p class="title"><a href="mailto:${feature.properties.email}" target="_blank">Email Leisure Centre</a></p>
  </div>`

  layer.bindPopup(content)
}

export {
  leisurecentresPopup
}