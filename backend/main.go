package main

import (
	"flag"

	"github.com/yuta519/meipuru/backend/cmd"
)

func main() {
	port := flag.String("port", "8000", "Listen port for the service")
	flag.Parse()
	cmd.Execute(*port)
}
