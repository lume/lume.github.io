import {Motor} from 'lume'

// Simple animation for background spheres
export function initBackgroundAnimation() {
	Motor.addRenderTask(time => {
		const sphere1 = document.getElementById('sphere1')
		const sphere2 = document.getElementById('sphere2') 
		const sphere3 = document.getElementById('sphere3')
		
		if (sphere1) {
			sphere1.rotation.x = time * 0.0005
			sphere1.rotation.y = time * 0.0003
			sphere1.position.z = -200 + Math.sin(time * 0.001) * 30
		}
		
		if (sphere2) {
			sphere2.rotation.x = time * 0.0008
			sphere2.rotation.z = time * 0.0004
			sphere2.position.z = -150 + Math.cos(time * 0.0012) * 25
		}
		
		if (sphere3) {
			sphere3.rotation.y = time * 0.0006
			sphere3.rotation.z = time * 0.0005
			sphere3.position.z = -100 + Math.sin(time * 0.0008) * 20
		}
	})
}