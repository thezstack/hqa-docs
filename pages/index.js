// Helpers

import Link from 'next/link'

{/* import redirect from '../lib/redirect'

export default redirect('/docs') */}

export default () => (
  <div>
    <h1>welcome to hqa</h1>
    <Link href="/docs">
      <a>info</a>
    </Link>
  </div>
)
