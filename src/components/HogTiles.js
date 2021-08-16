import HogTile from './HogTile';

export default function HogTiles({ hogs }) {
  return <main>
    { hogs.map(hog => <HogTile hog={hog} key={hog.name} />) }
  </main>;
}
