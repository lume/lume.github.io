import fs from 'fs'
import {create} from 'browser-sync'

const path_404 = (await import.meta.resolve('./404.html')).replace('file://', '')
const content_404 = fs.readFileSync(path_404)
const browserSync = create()

browserSync.init(
	{
		port: 54321,
		ui: {
			port: 54322,
		},
		cors: true,
		watch: true,
		// files: ['dist'],
		server: {
			baseDir: 'dist',
		},
		// middleware
	},
	(err, bs) => {
		bs.addMiddleware('*', (req, res) => {
			// Provides the 404 content without redirect.
			res.statusCode = 404
			res.write(content_404)
			res.end()
		})
	},
)
