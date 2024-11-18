import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import './index.css'

export default function App() {
	const store = useSyncDemo({ roomId: 'Rumi room' })

	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw store={store} />
		</div>
	)
}