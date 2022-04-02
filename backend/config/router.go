package config

import (
	"net/http"

	"github.com/yuta519/meipuru/backend/controller/ping"
)

func Router(port string) {
	http.HandleFunc("/", ping.Ping)
}
