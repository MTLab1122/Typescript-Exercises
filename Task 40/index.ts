interface Album { artist: string; title: string; tracks?: number; }

const makeAlbum = (artist: string, title: string, tracks?: number): Album => ({ artist, title, tracks });

console.log(makeAlbum("Artist 1", "Album 1" ,));
console.log(makeAlbum("Artist 2", "Album 2", 10));
console.log(makeAlbum("Artist 3", "Album 3"));
