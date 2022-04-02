package config

import (
	"fmt"
	"log"
	"net/http"

	"github.com/yuta519/meipuru/backend/controller/ping"
)

func Router(port string) {
	http.HandleFunc("/", ping.Ping)

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
