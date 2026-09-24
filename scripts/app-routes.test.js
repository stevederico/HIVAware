import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const main = readFileSync(join(ROOT, 'src/main.tsx'), 'utf8');

/**
 * Component mounted for a static `/app` path in `src/main.tsx`.
 *
 * @param {string} path
 * @returns {string}
 */
function mountedView(path) {
  const start = main.indexOf(`path: '${path}'`);
  assert.ok(start >= 0, `src/main.tsx does not declare /app/${path}`);
  const slice = main.slice(start, start + 280);
  const names = [...slice.matchAll(/<([A-Z]\w+)/g)].map((match) => match[1]);
  const view = names.find((name) => name !== 'Suspense');
  assert.ok(view, `src/main.tsx does not mount a view at /app/${path}`);
  return view;
}

describe('master app routes', () => {
  it('mounts PreventionView at prevention', () => {
    assert.equal(mountedView('prevention'), 'PreventionView');
  });

  it('mounts RisksView at risks', () => {
    assert.equal(mountedView('risks'), 'RisksView');
  });

  it('mounts TestingView at testing', () => {
    assert.equal(mountedView('testing'), 'TestingView');
  });

  it('mounts PaymentView at the master stripe path', () => {
    assert.equal(mountedView('stripe'), 'PaymentView');
  });
});

describe('rust backend stubs', () => {
  it('has no todo or unimplemented handlers', () => {
    const srcDir = join(ROOT, 'backend/src');
    const hits = [];
    for (const name of readdirSync(srcDir)) {
      if (!name.endsWith('.rs')) continue;
      const text = readFileSync(join(srcDir, name), 'utf8');
      if (text.includes('todo!') || text.includes('unimplemented!')) hits.push(name);
    }
    assert.deepEqual(hits, []);
  });
});
