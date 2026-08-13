#!/usr/bin/env python3
"""No-cache HTTP server for local development."""
import http.server
import socketserver
import sys

# Fix Windows encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

PORT = 8000

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        try:
            print(f"[Server] {format % args}")
        except Exception:
            pass

with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    print("No-cache mode: browser will always load fresh files")
    httpd.serve_forever()
