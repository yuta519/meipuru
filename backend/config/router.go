package config

import (
	"net/http"

	"github.com/yuta519/meipuru/backend/controller/ping"
)

func Router() {
	http.HandleFunc("/", ping.Ping)
}
