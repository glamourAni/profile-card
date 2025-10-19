const currentTime = document.getElementById("current-time")

function updateTime() {
	currentTime.textContent = Date.now()
}

updateTime()
setInterval(updateTime, 1000)
