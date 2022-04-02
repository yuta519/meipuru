package cmd

import (
	"fmt"
	"log"
	"net/http"

	"github.com/yuta519/meipuru/backend/config"
)

func Execute(port string) {
	log.Printf("A server is starting on %s/TCP.", port)
	config.Router()
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
