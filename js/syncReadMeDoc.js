
let url = "https://wilfredmorgan.com/style-guide-template/README.md"

async function getData(url) {
  let downloadData = await fetch(url)
  let data = await downloadData.text()
  document.querySelector('.overview').innerHTML = marked(data)
}

window.onload = getData(url)




