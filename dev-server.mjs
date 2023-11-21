import fs from 'fs'
import {create} from 'browser-sync'
import {fileURLToPath} from 'url'

const path_404 = fileURLToPath(await import.meta.resolve('./404.html'))
const content_404 = fs.readFileSync(path_404)
const browserSync = create()

browserSync.init(
	{
		port: 54321,
		ui: {port: 54322},
		cors: true,
		watch: true,
		server: {baseDir: '.'},
	},
	(err, bs) => {
		if (err) throw err
		bs.addMiddleware('*', (req, res) => {
			// Provides the 404 content without redirect.
			res.statusCode = 404
			res.write(content_404)
			res.end()
		})
	},
)
