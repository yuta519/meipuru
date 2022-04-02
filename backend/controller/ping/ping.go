package ping

import (
	"fmt"
	"html"
	"log"
	"net/http"
)

func Ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Ping, %q", html.EscapeString(r.URL.Path))
	log.Printf("Ping, %q", html.EscapeString(r.URL.Path))
}
